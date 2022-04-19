import { storageRead } from "./StorageService";

let _token;
let handle401Error = () => { };
export const set401ErrorHandler = (handler) => {
    handle401Error = handler;
};

export const setToken = (bearer) => {
    _token = bearer;
};
export const setRefreshToken = (token) => {
    setToken(token);
};

const addAuthorizationHeader = (options) => {
    const headers = options.headers || {};

    if (headers && !headers.Authorization) {
        if (_token) {
            headers.Authorization = "Bearer " + _token;
        } else {
            _token = storageRead("token");
            if (_token) {
                headers.Authorization = "Bearer " + _token;
            }
        }
    }
    options.headers = headers;
};

const cache = new Map();
const buffer = new Map();
const CACHE_VALIDITY_DURATION_MS = 2000;

export const clearCache = () => {
    cache.clear();
    buffer.clear();
};
export const get = async (url, options = {}) => {
    const hash = url + JSON.stringify(options);
    if (cache.has(hash)) {
        const data = cache.get(hash);
        if (new Date().getTime() - CACHE_VALIDITY_DURATION_MS < data.date) {
            return data.response;
        }
        clearCache();
    }
    if (buffer.has(hash)) {
        const res = await buffer.get(hash);
        // eslint-disable-next-line no-underscore-dangle
        if (res.__CANCEL__ !== true) {
            return res;
        }
    }

    const resp = new Promise((resolve, reject) => {
        addAuthorizationHeader(options);
        if (!options.method) {
            options.method = "GET";
        }
        fetch(url, options)
            .then((resp) => {
                if (resp.status >= 400) {
                    throw new Error(resp.status);
                }
                return resp.json();
            })
            .then((resp) => {
                cache.set(hash, { resp, date: new Date().getTime() });
                buffer.delete(hash);

                resolve(resp);
            })
            .catch((err) => {
                console.error("GET", err);
                buffer.delete(hash);
                set401ErrorHandler(err);
                reject(err);
            });
    });

    buffer.set(hash, resp);
    return resp;
};

export const post = async (url, options = {}) => {
    return new Promise((resolve, reject) => {
        addAuthorizationHeader(options);
        if (!options.method) {
            options.method = "POST";
        }
        fetch(url, options)
            .then((resp) => {
                if (resp.status >= 400) {
                    throw new Error(resp.status);
                }
                return resp.json();
            })
            .then(resolve)
            .catch((err) => {
                console.error("POST", err);
                reject(err);
            });
    });
};
