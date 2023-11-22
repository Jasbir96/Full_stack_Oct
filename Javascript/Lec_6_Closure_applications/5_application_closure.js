/***
 * 1. Create Private variables
 * 2. memoize a fn
 * 3. inifinite curry 
 * **/


/**********private variables ****/
// function createEvenStack() {
//     const items = []
//     return {
//         push: function (item) {
//             if (item % 2 == 0) {
//                 console.log("Is pushed");
//                 items.push(item);
//             }
//             else {
//                 console.log("Please input even value");
//             }
//         },
//         pop: function () {
//             console.log("removed elem")
//             return items.pop();
//         }
//         ,
//         print: function () {
//             console.log("content", items)
//         }
//     };
// }
// const stack = createEvenStack();
// stack.print();
// stack.push(10);
// stack.push(20);
// stack.push(5);
// stack.pop();
// stack.print();
// // console.log("direct access ",stack.items);
// console.log(stack.items);

/************memoization
 * There are always few operation-> 
 * * that can take a bit of time 
 * * those operation can be repetitive with same inputs 
 * 
 * 
 * ****/



function calc(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += n;
    }
    return sum;
}


// console.time();
// console.log(calc(10000000));

// console.timeEnd();

// console.log("`````````````")
// console.time();

// console.log(calc(10000000));
// console.timeEnd();


function memoizedFn(fn) {
    // object -> input and output
    let cache = {}
    // retrun a fn 
    return function (input) {
        // you check the result in cache object
        if (cache[input]) {
            return cache[input];
        }
        // exceute the function
        const result = fn(input);
        // future add it to cache 
        cache[input] = result;
    }
}
// 1st section
const effcientFn = memoizedFn(calc);

/***********************************/
// console.log("optiized ouput")
// console.time();
// // 2nd part
// effcientFn(1000000);
// console.timeEnd();


// console.time();
// effcientFn(1000000);
// console.timeEnd();




// infinite currying
// version-1
function countFn(param) {
    let count = 0;
    count++;
    if (param == 0) {
        console.log(count);
    } else {
        return function inner(param) {
            count++;
            if (param==0) {
                console.log(count);
                return;
            }else{
                return inner;
            }
        }
    }

}
countFn(0) // print 1
countFn()(0)
countFn()()(0)


// countFn ()()(0) //-> Print 3
countFn ()()()()(0) //-> Print 5 
countFn ()()()()()()()(0) //-> Print 8









// version-2
function sum() { }
// sum(1)(2)(3)(4)()=>10

// sum(2)(3)() -> 5
