/***** 
 * 1. as soon as your interpreter encounter an await it pauses exec of your async function
     moves rest of the code to webapi and execute the next function
    2. a. normal function -> return a value and your
     b. async function returns a promise
    promise returned by an async function represents  that all the lines are executed 
Usecase : whenever you recieve a return value from an async keyword fn always await for it   
    
    **/
const fs = require("fs");
const f1Promises = fs.promises
    .readFile("./f1.txt", "utf-8");
console.log("6 before");
async function fn() {
    try {
        console.log(" 10 Before in async ");
        // as soon as your interpreter encounter an await it pauses exec of your async function
        // moves rest of the code to webapi
        const data1 = await f1Promises;
        console.log("12", data1);
        const f2promise = fs.promises.readFile("./f2.txt", "utf-8");
        const data2 = await f2promise;
        console.log("15", data2);
        console.log("16 between in async ");
        const f3promise = fs.promises.readFile("./f3.txt", "utf-8");
        const data3 = await f3promise;
        console.log("19", data3);
        console.log("20 After in async ");
        return 10;
    } catch (err) {
        console.log(err);
    }
}

const rVal = fn();

rVal
    .then(function (data) {
        console.log("40 rval value", data)
    }).catch(console.log)
// console.log("rval", rVal);

console.log("26 After");

// function normalfn() {
//     console.log("before in normalfn")
//     console.log("b/w in normal")
//     console.log("after in normalfn")
//     return 10;
// }

// const rVal = normalfn();
// console.log("rVal",rVal);

