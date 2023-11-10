/***
 * 1. Assignment
 * 2. Shallow copy
 * 3. Deep copy
 * **/

// * Assignment
//     * 1. rhs -> non - primitive
//         * lhs -> gets the address
//             * 2. rhs -> primitive
//                 * lhs -> value
//                 * * /
// let arr = [1, 2, 3, 4, 5];
// let arr2 = arr;
// arr2.pop();
// // arr2 = 10;
// console.log(arr, arr2);

/*************Shallow copy
 * copy values on the first level
 *  1. using spread operator
 *
 * *******/

// let arr = [1, 2, 3, 4, 5];
// let arr2 = [...arr];
// arr2.pop();
// console.log(arr, arr2);

// if array/obj contains non-primitives
let arr = "[1, 2, [6, 7], 4]";
let arr2 = [...arr];
// arr2.pop();
arr2[2].pop();
console.log("first", arr, " :   ", "first", arr2);

/****
 * Deep copy: copies non-primitives at all the level 
 * object -> JSON.stringify after JSON.parse
 * Con :it is slo 
 * **/
