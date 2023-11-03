// Javascript -> Dynamic typed language, High Level language , interpreted language -> v8 engine-> C++


// 1. Dyamic Typed  ->  JS,
// var a; 
// 2. Static Typed -> Java
// int a;

// Fact -1 : by default JS gives you undefined

// var a;
// console.log("val in a", a);


/*****************2. DataTypes
 * 1. Primitive Datatypes : atomic types
 *      a. old primitives : numbers, string, undefined , boolean , null
 *      b. new Primtives : Symbols, BigInt
 * 2. Non-primitive DataTypes
 *      a. old non-primitives : Object, Arrays, function
 *      b. New non-primitives : Map, Set, WeakMap, weakset
 *
 * *******************/



/*****3. Numbers***/
//  numbers : this datatype behaves like a mathematical number;
//  it is stored as 64bit floating values
// console.log("ans", 5 / 2);

/*****4. Strings******/
/***
 * 1. no characters -> string has all the methods 
 * 2. '' & "" don't have any difference -> do not support multiple line string 
 * 3. template string -> another way of creating string Adv -> multiple line strings
 * */
// var age = 27;
// // 1st ways
// var str = 'I am ' + age + "yrs old";

// // 2nd ways  -> template strings
// var str1 = `I am ${age} yrs old`;



/**********************null , undefined********************/
// 1. undefined -> default value given to you by JS langugage 
// 2. null -> you have to set on your own  

// var val;
// console.log("val is", val);
// val = null;
// console.log("val is", val);

/*************boolen -> true false**********/




/*****************************typeof***********************************/
// var a;
// console.log("63",typeof a); // undefined
// a = 10;
// console.log("65",typeof a);  // number
// a = true;
// console.log("67",typeof a); // boolean
// a = null;
// console.log("69",typeof a); // null
// a = "i am string";
// console.log("71",typeof a); // string
// console.log("val in a",a);

/********
 * typeof null is an object -> It is a bug
* 
 * 
 * *****/

// let arr=[10,20,30];
// //  this is not a bug 
// // console.log("arr type ",typeof arr);
// console.log("I am a ",Array.isArray(arr));










/**
 * Wrong Belives 
 * // client scripting -> no
 *  */
