/***
 * throttle ->  
 * input :takes a function , interval
 *  output: return a throttled function thaty can only be called
 * once in that interval 
 * */

let productValue = 100;
function apply20Coupon() {
    console.log("New price", productValue - (productValue * 0.2));
}

function throttle(fn, delay=1000) {
    console.log("called throttled fn and returning inner fn ")
    let shouldIWait = false;
    return function (...args) {
        if (shouldIWait == true) {
            console.log(" next iteration call->should i wait is true")
            return;
        }
        // 1st event happens 
        console.log("called it first time")
        fn();
        // interval should starte
        console.log("made should i wait true")
        shouldIWait = true;

        setTimeout(function () {
            shouldIWait = false;
        }, delay)
    }

}


const throttledApplyCoupon = throttle(apply20Coupon, 5000);


console.log("```````````````````");
throttledApplyCoupon();  //1
console.log("```````````````````");
throttledApplyCoupon();  //2

setTimeout(() => {
    console.log("at t=2000");
    throttledApplyCoupon(); //3
}, 2000);

setTimeout(() => {
    console.log(" at t=6000");
    throttledApplyCoupon(); //4
}, 6000);

