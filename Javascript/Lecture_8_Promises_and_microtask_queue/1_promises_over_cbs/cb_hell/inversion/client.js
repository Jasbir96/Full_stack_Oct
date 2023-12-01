const lib = require("./lib");
console.log("Before");
let amount = 100;
let priceofOne = 20;
/**
 * takes the amount and callbacks as paramas
 * and it calls the cb for us
 * */
// console.log("Before");
// async function -> 3rd party
// lib.runMlalgo(amount, cb);

function cb() {
    amount = amount - priceofOne;
    console.log("amount", amount);
}
// console.log("After");
/***********consumption**********/
let promise = lib.pRunMLAlgo(amount);

// data-> then
promise.then(cb);

promise.catch(function (err) {
    console.log("err", err);
})




