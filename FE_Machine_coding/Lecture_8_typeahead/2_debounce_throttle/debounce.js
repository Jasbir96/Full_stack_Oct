/***
 * debounce ->  
 * input :takes a function , delay
 *  output: return a debounced fn function that will  only be called
 * when delay b/w two susequent calls are more than the delay provided otherwise the dealy will be reset 
 * */
function debounce(fn, delay) {
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



function printHello() {
    console.log("hello");
}
const debouncedPrintHello = debounce(printHello, 2000);
//0
debouncedPrintHello();

setTimeout(() => {
    //1
    debouncedPrintHello();
    setTimeout(() => {
        //2
        debouncedPrintHello();
    }, 1000);
}, 3000)