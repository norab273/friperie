export function storageWrite(key, content) {
    localStorage.setItem(key, btoa(content));
}

export function storageRead(key) {
    const value = localStorage.getItem(key);
    if (value) {
        return atob(value);
    } else {
        return undefined;
    }

}

export function storageObjectWrite(key, content) {
    localStorage.setItem(key, btoa(JSON.stringify(content)));
}

export function storageObjectRead(key, defaultValue) {
    const data = localStorage.getItem(key);
    try {
        return JSON.parse(atob(data));
    }
    catch (err) {
        return defaultValue
    }
}

export function storageRemove(key) {
    localStorage.removeItem(key);
}
