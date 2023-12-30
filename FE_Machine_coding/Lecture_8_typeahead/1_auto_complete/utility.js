export function debounce(fn, delay) {
    let timerId = null;
    return function (...args) {
        // intially there was some timer that already running
        if (timerId) {
            clearTimeout(timerId);
            console.log("resetting the delay")
        }
        timerId = setTimeout(() => {
            fn(...args);
        }, delay)
    }

}