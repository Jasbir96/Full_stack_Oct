
/*******************ques-1*************/
// let cap = {
//     firstName: "Steve",
//     sayHi: function () {
//         console.log("4 this is ", this);
//         console.log("Hi from ", this.firstName);
//     }
// }

// method 
cap.sayHi();
let sayHiAdd = cap.sayHi;
// function call
sayHiAdd();

// console.log("13", this);

// let firstName="Jasbir";
// var lastSName="Singh"
// console.log(this);

/*********************question-2********************/
// let cap = {
//     firstName: "Steve",
//     sayHi: function () {
//         console.log("53", this.firstName);
//         const iAmInner = function () {
//             // undefined -> ???
//             console.log("55", this.firstName);
//         }
//         // creating EC
//         iAmInner();
//     }
// }
// method call
// cap.sayHi();

/*************************questions -3 ************************/

/****
 * 1. syntax sugar
 * 2. related to this 
 * **/
// var firstName = "loki";
// let cap = {
//     firstName: "Steve",
//     sayHi: ()=> {
//         console.log("53", this.firstName);
//         const iAmInner = () => {
//             console.log("55", this.firstName);
//         }
//         iAmInner();
//     }
// }

// cap.sayHi();












