/***
 * Assignment
 * 1. rhs -> non-primitive
 *  lhs-> gets the address
 * 2. rhs-> primitive
 *      lhs -> value
 * */
// let arr = [1, 2, 3, 4, 5];
// let arr2 = arr;
// arr2.pop();
// arr2 = 10;
// console.log(arr,arr2);
//20k =[20,7,9]
// 30k =[3,30,8];

function modifier(a, b) { 
    console.log("16->",a, b) //[4,7,9][3,6,8]
    a = 20;
    b = 30;
    console.log("19->",a, b) //20 30
}
let p = [4, 7, 9]
let q = [3, 6, 8]
modifier(p, q); 
console.log("24->", p, q); 


