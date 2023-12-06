/*

Inbuilt errors in JS : 
    1. Syntax error : when grammaer is wrong , try and catch will not work  plus whole code will not execute
    2. Runtime error : code will exceute untill you get a runtime errors
      a. Reference Error
      b. Range Error
      c. Type Error
**/



/*** 1. Syntax error : 
 * a. code does not execute at all
 * b. when grammaer is wrong
 * c. try and catch will not work in this case  
 * 
*/
// 1.  Unexpected identifier
// console.log("Hello");
// le a;

// 2.  Illegal Shadowing : Identifier 'a' has already been declared
// console.log("Hello");
// console.log("a");
// let a =10
// {
//    var a=20;
//  console.log("Hello",a );  
// }



/*********
 * Runtime errors : 
 * 1. are the errors that occur during code execution 
 * 2. It will exceute the code untill it encounter a reference err
 * **********************************************************************/ 


/*** * 
 *  Reference Error -> when a variable or a function is not present
 * 
 * 
*/
 // 1. TDZ -> temporal Dead Zone ReferenceError: Cannot access 'a' before initialization
// console.log(a);
// let a;
// console.log("Before");


// 2. ReferenceError: fn is not defined
// console.log("Hello");
// fn();

// 3. ReferenceError: a is not defined (in strict mode if a variable is not defined)
// "use strict";
// console.log("Hello");
// a=10

//  * 4. when you accessing a prop for which object does not exist
// console.log(obj.a);

/***********
 *
 * Range error
 * *****/
// 1. RangeError: Maximum call stack size exceeded stackoverflow  
// infinite recursion
// function foo() {
//     foo();
// }
// foo();

// 2. array size RangeError: Invalid array length
// let a = [];

// a.length = 100 ** 100
// console.log(a.length);



/*****
 * 
 * 
 * Type error:  if your parent does not have the function
 * *****/

// 1. TypeError: num.toUpperCase is not a function
// let num = 10;
// console.log(num.toUpperCase());