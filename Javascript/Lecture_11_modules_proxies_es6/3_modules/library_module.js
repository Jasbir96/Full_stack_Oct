var a = 10;
let abc = "Hello";
function fn() {
    console.log("Hi I am Fn");
}

console.log(" I am lib module");
let obj = { name: "Jasbir" };
export default obj;

// setTimeout(function () {
//     console.log("100ms", a);
// }, 100)
// exports 
// it is known as named export ;

export { a, fn };