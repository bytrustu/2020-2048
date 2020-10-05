import hotkeys from "hotkeys-js";

const observerMap = {};

export function addKeyObserver(key, callback) {
    if (!observerMap[key]) {
        observerMap[key] = [];
        hotkeys(key, () => excuteCallback(key));
    }
    observerMap[key].push(callback)
}

export function removeKeyObserver(key, callback) {
    observerMap[key] = observerMap[key].filter(item => item !== callback);
}

function excuteCallback(key) {
    for(const ob of observerMap[key]) {
        ob();
    }
}



