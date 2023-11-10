
/***
 * When you want a feature on all the childrens of a data types
 * Add that feature to Parent's prototype 
 * 
 * Polyfills : f
 * **/ 

Array.prototype.sumCalc = function () {
    let sum = 0
    for (let i = 0; i < this.length; i++) {
        sum = sum + this[i];
    }
    console.log("sum is", sum);
}

let arr = [1, 2, 3];
console.log(arr);
// arr.push("hello");
// arr.map();
// arr.filter();
// console.log("arr",arr);
// arr.sumCalc = function () {
//     let sum = 0
//     for (let i = 0; i < this.length; i++) {
//         sum = sum + this[i];
//     }
//     console.log("sum is", sum);
// }


arr.sumCalc();
let arr2 = [2, 3, 4, 5];
arr2.sumCalc();
// arr2.sumCalc = function () {
//     let sum = 0
//     for (let i = 0; i < this.length; i++) {
//         sum = sum + this[i];
//     }
//     console.log("sum is", sum);
// }

