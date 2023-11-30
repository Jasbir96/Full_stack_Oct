/*****
 * Timer
 * a. SetTimeout : fn , delay
 * b. SetInterval : fn , interval
 * c. clearInterval -> break the interval
 *
 * **/

// console.log("Before");
// function fn() {
//     console.log(" I am being called")
// }
// const timerId = setTimeout(fn, 5000);
// function stopperfn() {
//     console.log("exiting intervals");
//     clearTimeout(timerId);
// }
// setTimeout(stopperfn, 2000);
// console.log("After");





/********* clear interval and setInterval*****/
// console.log("Before");
// function fn() {
//     console.log(" I am being called")
// }
// function stopperfn() {
//     console.log("exiting intervals");
//     clearInterval(timerId);
// }
// const timerId = setInterval(fn, 1000);
// console.log("After");
// setTimeout(stopperfn,5000);



/************************Polyfill of setInteval with the help of setTimeout*************/





console.log("Before");
function customSetInterval(cb, interval) {
    let obj = {
        flag: true
    }
    function innerFN() {
        if (obj.flag == true) {
            cb();
            setTimeout(innerFN, interval);
        }
    }
    // delay the execution of cb by 1 sec 
    setTimeout(innerFN, interval);
    return obj;
}
function fn() {
    console.log("I am being called")
}
// 1
const timerId = customSetInterval(fn, 1000);

function myClearInterval(timerId) {
    timerId.flag = false;
}

setTimeout(() => {
    console.log("Stopping interval");
    myClearInterval(timerId);
},5000)
//2
console.log("after");



