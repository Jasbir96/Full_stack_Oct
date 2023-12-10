
/**
 * 1. iterator -> access to values
 * 2. in js if a dataType implements: Symbol.iterator
 * **/
let arr = [1, 2, 3, 10, 12];
// for (let elem of arr) {
//     console.log("val", elem);
// }
// let obj = {
//    firstName:"Jasbir",
//     lastName:"Singh"
// }
// for (let elem of obj) {
//     console.log("val", elem);
// }

// console.log(arr);

/**
 * 1. you pass the data -> declarative
 * 2. You can pause the iteartion 
 * 3. Iterator can handle stream of data 
 * **/ 
// it is building an iterator 
// function fectNextElement(array) {
//     let idx = 0;
//     let done = false;
//     let value = undefined;
//     function next() {
//         /*************logic starts***********/
//         if (idx == array.length) {
//             done = true
//             return { value: undefined, done: done };
//         }
//         const returnObj = { value: arr[idx], done: done };
//         idx++;
//         /****************logic ends ********************/
//         return returnObj;
//     }
//     return { next }
// }

// const itrObject = fectNextElement(arr);

// console.log(itrObject.next());
// console.log("Between");
// console.log(itrObject.next());
// console.log(itrObject.next());
// console.log(itrObject.next());
// console.log("Between");
// console.log(itrObject.next());
// console.log(itrObject.next());