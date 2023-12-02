/****
 * Note: for this whole excercise we will assume that we have a 
 * file name f1.txt with the content of "I am F1"
 *
 *  Promise -> object
 *          * value  :  undefined,  value/err               
 *          * state :  pending , setteled -> 
 *                                          resolved 
 *                                           rejected           
 *                                          
 *******************************************************************/
/*****
 * *******************basics of then catch finally **********************************************************************************
 * for this section
 * we will only asume only one case of promise resolution -> when file is read
 *  we will only asume only one case of promise rejection -> when file is not found
 * */

/*************then
 * 1. then's is an eventlistener/subscriber  attached to  a promise it's cb only executes when
 * promise is resolved
 * 2. you can attach multiple then to a given promise and every one will execute
 * ********/


// let fs = require("fs");
// let promise = fs.promises.readFile("f1.txt");
// /***************1.& 2**************/
// promise.then(function (data) {
//     console.log("Hi the data is 31 " + data);
// })

// promise.then(function (data) {
//     console.log("buffer format on 35", data);
// })
// promise.then(function () {
//     console.log("I am not accepting")
// });




/*******************************
 * catch
 *  * 1. catch is an eventlistener/subscriber  attached to  a promise it's cb only executes when
 * promise is rejected
 * 2. you can attach multiple catch to a given promise and every one will execute
 * ***************************/

// let fs = require("fs");
//  let promise = fs.promises.readFile("f11.txt");
// /***************1.& 2**************/ 
// promise.catch(function (err) {
//     console.log("err is 1" + err);
// })
// promise.catch(function (err) {
//     console.log("err is 2 ", err);
// })
// promise.catch(function () {
//     console.log("err 3 I am not accepting");
// });


/*******************************
 * finally
 *  * 1. finally is an eventlistener/subscriber  attached to  a promise it's cb will 
 * exceute whether your promise is rejected or resolved 
 * 2. you can attach multiple finally to a given promise and every one will execute 
 * 3. finally's cb will not take accept in arguments
 * 4. finally will not do error handling
 * ***************************/

// let fs = require("fs");
// let promise = fs.promises.readFile("f11.txt");

// // /***************1.& 2**************/ 
// promise.finally(function (err) {
//     console.log("err is 1" + err);
//     console.log("`````````````");
// });

// promise.finally(function (err) {
//     console.log("err is 2 ", err);
//     console.log("```````````````````")
// })
// promise.finally(function () {
//     console.log("I am not accepting");
//     console.log("I will not exceute");
//     console.log("``````````````````````````");
// });



/***
 * Note :If a rejected promise -> 
 * if not caught will be converted into  an error and code stops execution
 * 
 * Learning : always catch your promise
 * */
 let fs = require("fs");
 let promise = fs.promises.readFile("f11.txt");

promise.finally(function () {
    console.log("I am not accepting");
console.log("I will not exceute");
}).catch((function(err){
console.log("I have saved you all TIL"+err)
}))
