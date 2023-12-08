/**********************ways a Promise can  resolved****************************************************
 //  resolving  -> something has went right
 * Different ways in which you can get a resolved promise 
 * 1. Promise.resolve
 * 2. Getting a resolved value from a promise based fn 
 * 3. for chained then if then above you  returns a value  or either of above 2 points 
 * 4. for chained then if catch above you return a value or either of above 2 points

 * *****************/

// Promise.resolve().then().then() ->3 point
// Promise.reject().catch().catch() -> 4 point
 
/*******************1.********************/
// Promise.resolve(100)
//     .then(function (data) {
//         console.log("1", data)
//     })

// /*************2.****************************************/
const fs = require("fs");
// //  assuming f1 files is present and has content of I am F1   
// let rfIlePromise = fs.promises.readFile("f1.txt");
// rfIlePromise
//     .then(function (data) {
//         console.log("1 " + data);
//     })

/******3  *******************************/

//a. first the returns  a  value 
// Promise.resolve("hey then")
// .then(function (data) {
//         console.log("1 ", data);
//         return 10;
//     }).then(function (data) {
//         console.log("2 " + data);  // 2 10
//     })

//  b first then does not return anything 
// Promise.resolve("hey then").then(
//     function (data) {
//         console.log("1 ", data); //1 hey then
//     }).then(function (data) {
//         console.log("2 " + data);  // 2 undefined
//     })

// c first then returns promise.resolve 
// Promise.resolve("hey then")
// .then(
//     function (data) {
//         console.log("1 ", data);
//         return Promise.resolve("i am resolved value returned by first then")
//     }).then(function (data) {
//         console.log("2 " + data);  // 2 i am resolved value returned by first then
//     })

// d  first then returns function that return a promise about to be resolved promise
// Promise.resolve("hey then").then(
//     function (data) {
//         console.log("1 ", data);
//         return fs.promises.readFile("f1.txt");
//     }).then(function (data) {
//         console.log("2 " + data);  // 2 i am resolved value returned by first then
//     })


/*********************4.***********************/
//a. first catch returns  a  value 
// Promise.reject("hey catch")
// .catch(
//     function (data) {
//         console.log("1 ", data);
//         return 10;
//     }).then(function (data) {
//         console.log("2 " + data);  // 2 10
//     })

//  b first catch does not return anything 
// Promise.reject("hey catch").catch(
//     function (data) {
//         console.log("1 ", data); //1 hey then
//         
//     }).then(function (data) {
//         console.log("2 " + data);  // 2 undefined
//     })

// c first catch returns promise.resolve 
// Promise.reject("hey catch").catch(
//     function (data) {
//         console.log("1 ", data);
//         return Promise.resolve("i am resolved value returned by first then")
//     }).then(function (data) {
//         console.log("2 " + data);  // 2 i am resolved value returned by first then
//     })

// d  first catch returns about to be resolved promise
// Promise.reject("hey catch").catch(
//     function (data) {
//         console.log("1 ", data);
//         return fs.promises.readFile("f1.txt");
//     }).then(function (data) {
//         console.log("2 " + data);  // 2 i am resolved value returned by first then
//     })
/**********************Promise is rejected****************************************************
 * Different ways in which you can get a rejected promise 
 * 1. Promise.reject
 * 2. Getting a rejected promise from a promise based fn 
 * 3. throw new Error from then/catch
 * 4. for chained catch if then above you returns either of above 3 points
 * 5. for chained catch if catch above returns either of above 3 points
    *********/

// Promise.then().catch()
// Promise.catch().catch()

/*******************1.********************/
// Promise.reject("sending rejected err")
//     .catch(function (err) {
//         console.log("1", err) 
//     })


/*************2.****************************************/
// const fs = require("fs");
// //  assuming f11 files is not present and has content of I am F1   
// let filePromise = fs.promises.readFile("f11.txt");
// filePromise.catch(function (err) {
//     console.log("1 " + err); // 1  f1.txt not found
// })


/****************3**************************/
// a) throw new error from then/catch
// Promise.resolve("resolved value ")
// .then((data) => {
//     console.log("1 " + data);
//     throw new Error("Error from then")
// })
// .catch((err) => { console.log("2"+ err) });


//b) throw new error from catch
// Promise.reject("rejected value ")
//     .catch((data) => {
//         console.log("1 " + data);
//         throw new Error("Error from then");
//     })
//     .catch((err) => { console.log("2" + err) });


/***************4*******************************/
//a. first then returns a error
// Promise.resolve("hey then").then(
//     function (data) {
//         console.log("1 ", data); //1 hey then
//         throw new Error("error from first catch")
//     }).catch(function (err) {
//         console.log("2 " + err);  // 2 eror from first catch 
//     })

// b. first then returns promise.reject
// Promise.resolve("hey then").then(
//     function (data) {
//         console.log("1 ", data); //1 hey then
//         return Promise.reject("rejected from first catch")
//     }).catch(function (err) {
//         console.log("2 " + err);  // 2 rejected from first catch
//     })
// c.  first then returns a promise that will be rejected  -> assuming f11.txt does not exist
// Promise.reject("hey catch").catch(
//     function (data) {
//         console.log("1 ", data); //1 hey catch
//         return fs.promises.readFile("f11.txt");
//     }).catch(function (data) {
//         console.log("2 " + data);  // 2 f1.txt is not found
//     })

/************5. Exactly like case 4 *******/
/**
 * How to create your Promise 
 * relation b/w -> then and catch
 * finally ->  deeper 
 * **/ 