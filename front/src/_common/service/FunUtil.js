export function isFunction(value) {
    return typeof value === "function";
  }
  export function isString(value) {
    return typeof value === "string";
  }
  export function isNumber(value) {
    return typeof value === "number";
  }
  export function isDictionary(value) {
    return value !== null && typeof value === "object";
  }
  const objectToString = (o) => Object.prototype.toString.call(o);
  
  function isObject(value) {
    return value !== null && typeof value === "object";
  }
  export function isDate(value) {
    return isObject(value) && objectToString(value) === "[object Date]";
  }
  export function isArray(value) {
    return Array.isArray(value);
  }
  export function escapeRegExp(s) {
    return s.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
  }
  
  export function replaceAll(str, toFind, toReplace) {
    return str.replace(new RegExp(escapeRegExp(toFind), "g"), toReplace);
  }
  
  export const debounce = (wait, callback) => {
    let timeout;
    return (...args) => {
      const next = () => callback(...args);
      clearTimeout(timeout);
      timeout = setTimeout(next, wait);
    };
  };
  export function later(durationMsOrPredicat = 10) {
    if (isFunction(durationMsOrPredicat)) {
      // eslint-disable-next-line no-async-promise-executor
      return new Promise(async (resolve, reject) => {
        let cpt = 0;
  
        while (!durationMsOrPredicat()) {
          cpt++;
          await later(500);
          if (cpt > 1000) {
            reject();
          }
        }
        resolve(undefined);
      });
    } else {
      return new Promise((resolve) => {
        setTimeout(resolve, durationMsOrPredicat);
      });
    }
  }
  
  export function guid() {
    // source : https://blogs.cozi.com/tech/2010/04/generating-uuids-in-javascript.html
    // avec ajout de la date en plus :-)
    let uuid = new Array(36);
    const data = [
      Math.floor(0x100000000 * Math.random()) & 0xffffffff,
      (Math.floor(0x100000000 * Math.random()) & 0xffff0fff) | (4 << 12), // version (1-5)
      (Math.floor(0x100000000 * Math.random()) & 0x3fffffff) | 0x80000000, // rfc 4122 variant
      Math.floor(0x100000000 * Math.random()) & 0xffffffff,
      new Date().getTime(),
    ];
    for (let i = 0, k = 0; i < 5; i++) {
      let rnd = data[i];
      for (let j = 0; j < 8; j++) {
        if (k === 8 || k === 13 || k === 18 || k === 23) {
          uuid[k++] = "-";
        }
        let r = (rnd >>> 28) & 0xf; // Take the high-order nybble
        rnd = (rnd & 0x0fffffff) << 4;
        uuid[k++] = "0123456789abcdef".charAt(r);
      }
    }
    return uuid.join("");
  }
  // else : simple unique id generation
  const state = {cpt:0};
  export function getUniqueNumber() {
    state.cpt = state.cpt+1;
    return state.cpt;
  }
  
  export function slsx(...args) {
    if (args) {
      return args.reduce((accumulator, currentValue) => {
        if (currentValue === undefined || currentValue === null) {
          return accumulator;
        }
        if (isDictionary(currentValue)) {
          const validObject = Object.keys(currentValue)
            .filter((k) => currentValue[k] !== null && currentValue[k] !== undefined)
            .reduce((obj, key) => {
              obj[key] = currentValue[key];
              return obj;
            }, {});
  
          return { ...accumulator, ...validObject };
        } else if (isString(currentValue)) {
          const parts = currentValue.split(":", 1);
          accumulator[parts[0]] = parts[1];
          return accumulator;
        } else if (isFunction(currentValue)) {
          return { ...accumulator, ...slsx(currentValue()) };
        } else {
          return accumulator;
        }
      }, {});
    } else {
      return {};
    }
  }
  
  /**
   *
   * Permet de créer un nouveau tableau en excluant certaines valeurs
   *
   * @param predicat indique si un élément du tableau source est égal à l'élément du tableau des éléments à exclure
   * @param source le tableau source à partir duquel on veut créer un tableau avec des éléments exclus
   * @param toExclude le tableau des éléments à exclure
   */
  export function excludeArray(equals /*: (a: T, b: T) => boolean */) {
    return (source, toExclude) => {
      if (!source) {
        return [];
      }
      if (!toExclude || toExclude.length === 0) {
        return [...source];
      }
      return source.filter((a) => toExclude.filter((b) => equals(a, b)).length === 0);
    };
  }
  
  export function truncate(str, length, ending) {
    // source : https://www.w3resource.com/javascript-exercises/javascript-string-exercise-16.php
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = "…";
    }
    if (str && str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  }
  
  // check if arrays have same items in same order
  // only shallow compare items.
  export function areArraysShallowEqual(first, second) {
    if (!first && !second && first === second) { 
      return true;
    }
    if (!first || !second) {
      return false;
    }
    if (first.length !== second.length) {
      return false;
    }
  
    for (let i = 0; i < first.length; i++) {
      if (second[i] !== first[i]) {
        return false;
      }
    }
  
    return true;
  }
  
  