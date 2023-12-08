console.log(" Before import in client file")
import nameObj, { a, fn } from "./library_module.js";
console.log("I am first client ", a);
// console.log("private", abc);
fn();
console.log(nameObj)
// a = 100;
// console.log("GEC", this);