/*****
 * Static method on Promises
 *
 * // Promise.all -> 
// Promise.any -> 
// Promise.race->
// Promise.allsettled
// Promise.withresolver()
 *  */

/***************
 * Promise.all
    * Input :
    *      it takes an array of promise
    * Output : it returns a single promise
    *     1.  if all of the input promises get resolved then ->promise returned by Promise.all
    *             state also get resolved ->you get array of resolved values of all the resp promises.
    *     2. if any of the input promise get's rejcted -?  promise returned by Promise.all
    *               state also get rejected -> you get that rejected promise
    * **********/

/******* all of these will be resolved*****/
// const p0 = Promise.resolve(3);
// const p1 = 42;
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('foo');
//     }, 100);
// });

/****case-1 if all the promise will be resolved**/
// Promise.all([p0, p1, p2])
//     .then(function (arrayofResolvedPromises) {
//         console.log("Inside my then");
//         console.log("32",arrayofResolvedPromises)
//     })

/****
 * case-2 if either of the promise are going to be rejected
 * ****/
// const p4 = 42;
// const p3 = Promise.reject(3);
// const p5 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('foo');
//     }, 100);
// });

// Promise.all([p4, p3, p5])
//     .then(function (arrayofResolvedPromises) {
//         console.log("Inside my then");
//         console.log("32", arrayofResolvedPromises)
//     }).catch(function (err) {
//         console.log("err",err);
//     })







/*** Promise.any -> This returned promise fulfills when
// 1. any of the input's promises fulfills, with this first fulfillment value.
// 2. It rejects when all of the input's promises reject -> get an array of reasons of error****/


// const p4 = Promise.reject();
// const p3 = Promise.reject(3);
// const p5 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('foo');
//     }, 100);
// });

// Promise.any([p4, p3, p5])
//     .then(function (arrayofResolvedPromises) {
//         console.log("Inside my then");
//         console.log("32", arrayofResolvedPromises)
//     }).catch(function (err) {
//         console.log("err",err);
//     })

/***
 * 
 * Promise.race-> 
 * Input : Array of promises
 * Output : return a single Promise 
 * Behviour: This returned promise settles with the eventual state of the first promise that settles
 *  */

/***
 * Promise.allSettled
 * Input : Array of promises
 * Output : return  a single Promise
 * Behaviour : This returned promise fulfills when all of the input's promises 
 * settle -> , 
 * with an array of objects that describe the outcome of each promise.
 * 
 * **/
const p4 = Promise.resolve();
const p3 = Promise.reject(3);
const p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 100);
});

Promise.allSettled([p4, p3, p5])
    .then(function (arrayofResolvedPromises) {
        console.log("Inside my then");
        console.log("32", arrayofResolvedPromises)
    }).catch(function (err) {
        console.log("err",err);
    })