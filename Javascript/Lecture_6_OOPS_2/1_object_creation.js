/**
 * Ways to create an object in JS
 * * Object literal
 * * Object.create
 * **/

/*********************1-object literal
 * You get 
 * a.) properties and method 
 * b.) you get your parent -> Prototype
 * ********************/

// console.log("obj", obj);
// console.log(obj.name);
// obj.sayHi();


/*******Inheritance for inbuilt types 
 * A.) Non-primitives 
 * * arr : Array,
 * * function : Function 
 * * object: Object 
 * B.) primitives ;
 *  1. that are created directly don't have any parent
 *  2. if a primitive type is created using a call-> Number , Boolean,String
 *  3. Then How string literal able to acces the the methods that are available to the classes:
 * Autoboxing :  whenever you want to access any method or property
 *      then that  primitive is typecased as a 
 *      children of there respective parent class and 
 *      then that method is applied on that  primitive 
 *      you are returned the answer. -> autoboxing
 * **/
// Arrays

// let arr = [10, 20, 30];
// console.log("arr", arr);
// arr.push(100);
// console.log("arr", arr);

//  function 
// function fn() {
//     console.log("Hi i am a fn ");
// }
// console.log(fn.prototype)
// fn();

// console.log(obj);
/********************Primitives *****************/

// let str = "hello";
// console.log(str);


// let res = str.charAt(0);
// // console.log(res);
// // want to search for it's parent -> it isn't there

// const strObj = new String("Hello");
// console.log("str", strObj);
// console.log(strObj.__proto__);


/*****
 * Non-primitives
 * * Array
 * * Object
 * * Function 
 * Primtives 
 * * Number
 * * String
 * * Boolean 
 * * 
 * Hirerachy -> InbuiltCLass -> OBject->null 
 * 
 * ***/



// let arr=[10,20,30];

// console.log(arr);

// // arr ->Array->Object->null
// console.log(arr.__proto__.__proto__.__proto__);



/*******************************
 * 2n way of creating object.create
 * ****************************/
/*************
 * when create object like this your object will not inherit any Property from OBject
 * 
 * ****/

let newObj = Object.create(null);
newObj.newProp = "Hello";
console.log(newObj);
/*******
 * 
 * creating an object from another object
 * ***/

let obj2 = Object.create(newObj);
obj2.name = "cap";
// console.log("obj2", obj2);


let obj3 = Object.create(obj2);

obj3.name = "Loki";
obj3.lastName = "Hemsworth";

// console.log("126 name", obj3.name);
// console.log("127 lastName", obj3.lastName);
// console.log("128 newProp", obj3.newProp)
// console.log("129 lastName", newObj.lastName);

// loop an object carefully 
// for (let key in obj3) {
//     let res = Object.prototype.hasOwnProperty.call(obj3, key);
//     if (res) {
//         console.log(key + " : " + obj3[key]);
//     }
// }
















