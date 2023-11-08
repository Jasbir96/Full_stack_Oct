"use strict";
// varName = 100;
// console.log(" I am ", varName);

/*********************Question-1*************/
// let cap = {
//     firstName: "Steve",
//     sayHi: function () {
//         console.log("9",this);
//         console.log("Hi from ", this.firstName);
//     }
// }
// console.log("GEC", this)
// // method -> steve
// cap.sayHi();
// let sayHiAdd = cap.sayHi;
// var firstName = "loki";
// // function call
// sayHiAdd();


/**************************question-2*************************/

// let cap = {
//     firstName: "Steve",
//     sayHi: function () {
//         console.log("27", this.firstName);
//         const iAmInner = function () {
//             // undefined -> ???
//             console.log("30", this.firstName);
//         }
//         // creating EC
//         iAmInner();
//     }
// }
// cap.sayHi();

/***************************question-3****************************/

var firstName = "loki";
let cap = {
    firstName: "Steve",
    sayHi: ()=>  {
        // loki
        console.log("53", this.firstName);
        // loki 
        const iAmInner = () => {
            console.log("55", this.firstName);
        }
        
        iAmInner();
    }
}

cap.sayHi();