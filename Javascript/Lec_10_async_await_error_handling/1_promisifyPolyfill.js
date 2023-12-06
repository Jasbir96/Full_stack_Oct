/***
 * What does it do-> promisify  -> these are asynchronous cb based functions -> give you promisified version
 * where does it comes from  -> nodejs enviornment
 * What are the few assumption we make while using promisify-> 
 *  1. Async function -> 
 *     a. take all the arguments initially
 *      b. last argument will be cb and cbs are Error First
 * 
 * 
 * Implemenetation -> promisify 
 * */



const fs = require("fs");
// util
const { promisify } = require("util");
// // these are asynchronous cb based functions
// fs.readFile();
// fs.writeFile();
// fs.copyFile();
// fs.appendFile();
// // sql -> nodejs
// db.query("jasdhjs",cb);

// const promisifiedReadfile = promisify(fs.readFile);
// promisifiedReadfile("./f11.txt")
// .then(console.log)
// .catch((err)=>{console.log("message",err.message)});



// function asynchronousRandomFn(arg1,arg2,arg3,cb ){
//     // code..... 
// }

// // callbacks -> that are last parameter of that async fn and the first parameter is an error
// function cb(err,result){

// }


// console.log("Before");
// fs.writeFile("./f2.txt", "I am file content", function (err, data) {
//     if (err) {
//         console.log("err", err);
//     } else {
//         console.log("filw write is completed")
//         console.log(data);
//     }
// })
// console.log("After");

//  * 1. Async function -> 
//  * a. take all the arguments initially
//     * b.last argument will be cb and cbs are Error First
/*****************************Implementation************************/
function OwnPromisify(asyncFn) {
    return function (...inputs) {
        return new Promise((resolve, reject) => {
            // intrenally also called your cb based fn 
            asyncFn(...inputs, function cb(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            })
        })
    }
}
/*********************usage promisifiy*******************/
// 1st line 
const promisifiedReadfile = OwnPromisify(fs.writeFile);

promisifiedReadfile("./f11.txt", "content with the help of promisiify")
    .then((data)=>{console.log("then part working")})
    .catch((err) => { console.log("message", err.message) });