/*********
 * fns are first class citizen in js -> fn acts as a object in js
 * objects
 *  * assign address of on object to another var
 *  * pass an object as a parameter
 *  * return an object from a function
 * **/

/**
 * 0. function has two parts
 *      fn defintion
 *      fn invocation
 *
 * */

// fn defintion 
// function statements 
// function fn() {
//     console.log("Hello");
// }

// // fn invocation -> code inside that fn is execute 
// fn();
// //  you are just accessing it address
// console.log(fn);


/****first behaviour
 * assign address of on object to another var -> assign address of a  fn  to another var
 * 
 * */


// let obj = { name: "Jasbir" };
// let obj2 = obj;


// function fn() {
//     console.log("Hello i am fn");
// }
// let anotherName = fn;
// anotherName();

/****function expression*/

// let fn = function() {
//     console.log("Hi i am fn");
// }
// fn();
// arrow function
// let fn = ()=> {
//     console.log("Hi i am fn");
// }
// fn();



// let real = function () {
//     console.log("I am real. Always run me");
// }

// let real = function real() {
//     console.log("No I am real one ");
// }


// let real = function real() {
//     console.log("You both are wasted");
// }
// real();



/********************* 2nd behaviour ***************************/
// pass an object as a parameter
// let obj = { name: "Jasbir" };
// higher order function : is a fn that recives a fn as a parameter or return a function
// cb : a function that is passeda s parameter to another function (HOF) and that will be called later  
// function bigger(param1) {
//     console.log(param1);
//     param1();
// }
// // bigger(obj);
// bigger(smaller);

// function smaller() {
//     console.log("I am smaller");
// }


/************
 * usecase of HOF:
 *  1. arr -> object 
 *  2. you can create fn for similar behaviour 
 * ******/

// 
// function squarer(source) {
//     let newArr = [];
//     for (let i = 0; i < source.length; i++) {
//         newArr[i] =     source[i]*source[i]
//     }
//     return newArr;
// }

// function cuber(source) {
//     let newArr = [];
//     for (let i = 0; i < source.length; i++) {
//         newArr[i] = source[i] * source[i] * source[i];
//     }
//     return newArr;
// }

// function getFirstName(source) {
//     let newArr = [];
//     for (let i = 0; i < source.length; i++) {
//         newArr[i] = source[i].name;
//     }
//     return newArr;
// }
// *********************

Array.prototype.transformer=function ( logicfn) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr[i] = logicfn(this[i]);
    }
    return newArr;
}

// function squarecb(val) {
//     return val * val;
// }
// function cuberCb(val) {
//     return val * val * val;
// }
// function getFirstNameCB(obj) {
//     return obj.name;
// }
// let arr = [1, 2, 3, 4, 5];
// let metaArr = [{ name: "Jasbir", lastName: "Singh" }, { name: "Steve", lastname: "Rogers" }]

// let sqArr = transformer(arr, squarecb);
// let cubeArr = transformer(arr, cuberCb);
// let firstNameArr = transformer(metaArr, getFirstNameCB);

// let sqArr = squarer(arr);
// let cubeArr = cuber(arr);
// let firstNameArr = getFirstName(metaArr);
// console.log("sqArr ", sqArr)
// console.log("cubeArr ", cubeArr)
// console.log("sqArr", firstNameArr)

/***********
 * array.map -> it tranforms every element of an array using a cb . what ever your
cb will return it will add it to the new Arr
 * */
// let cubeArr = arr.map(cuberCb);
// arr.transformer(cuberCb);
// console.log("cubeArr ", cubeArr)



/********************************forEach*************************/

// -> loops through an array and does not return anything -> 
// let arr=[10,20,30];
// arr.forEach((val,idx)=>{
//     console.log(idx, val)
// })





/*****************************Filter***************************/
/*traverse through every elem -> elem to cb fn if cb fn returns true
-> it will add that elem to a new Arr at the end it returns the new Arr*/
// let elems = [1, 2, 3, 11, 4, 5, 34, 12];
// function isOdd(elem) {
//     return elem % 2 == 1;
// }

// function isgtr5(elem) {
//     return elem > 5;
// }
// // odd values
// let isgtr5Arr = elems.filter(isgtr5);

// console.log("isgtr5Arr", isgtr5Arr);
// console.log("elem", elems);


/*********************reduce ********************/
let elems = [1, 2, 3, 4, 5];
Array.prototype.myReduce = function (cb, defaultValue) {
    let sidx = defaultValue == undefined ? 1 : 0;
    let acc = defaultValue == undefined ? this[0] : defaultValue;
    for (let i = sidx; i < this.length; i++) {
        acc = cb(acc, this[i])
    }
    return acc;
}
function sumCb(acc, elem) {
    // console.log("acc", acc, "elem", elem);
    return acc + elem;
}
function product(acc, elem) {
    // console.log("acc", acc, "elem", elem);
    return acc * elem;
}

const sum = elems.myReduce(sumCb);

console.log("ans", sum)
console.log("`````````````")
const ans = elems.myReduce(product);
console.log("ans", ans)