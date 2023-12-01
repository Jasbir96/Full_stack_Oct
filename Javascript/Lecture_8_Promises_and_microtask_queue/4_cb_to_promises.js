const fs = require("fs");
/****
 * convert a cb based async fn -> promise base d fn 
 * **/
function promisifedfsReadFile(filePath) {
    /**
     * 1. return a Promise
     * 2. you have to decide when to call you then and when to call your catch 
     * **/
    return new Promise(function (resolve, reject) {
        fs.readFile(filePath, function (err, data) {
            // resolve  fn
            // state -> fullfilled -> resolved
            //value -> whatevere you pass into

            // reject  fn
            // state -> fullfilled -> rejected 
            //value -> whatevere you pass into
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })

}


/*****consumption ****/
const promise = promisifedfsReadFile("./f1.txt");

console.log("before");
promise.then(function (data) {
    console.log("then data", data)
})

promise.catch(function (err) {
    console.log("catch data", err)
})
console.log("After");


/**
 * WHy Promise are better then cb 
 * * Promises can only be rejected or resolved once in there life time 
 * * all the cbs of promises goes to a seperate queue that is know as microtask queue
 *  and it has higher priority then normal cb queue
 * **/


