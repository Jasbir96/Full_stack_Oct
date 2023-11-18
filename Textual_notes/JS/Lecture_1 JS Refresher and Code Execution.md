# Full Stack LLD: JS-1: JS Refresher and Code Execution
---
## Agenda
Topics to be covered in the class are as follows:
* JS refresher
* TypeOf Operator
* Objects and JSON
* JS Code Execution - Hoisting and Execution Context
* Hoisting
* Execution Context
* let, var, and const:
* Shadowing: legal and illegal

---


## Datatype and typeof Operator in Javascript

**When you think of JavaScript, what comes to your mind?**
JavaScript is a 
* dynamically typed,
* high-level programming language
* Syntax is similar to Java

### Dynmaically/Statically typed language 
You only tell a is a variable 
```javascript
var a;
```

You tell a is a variable that can only take integer type of values 
```java
int a;
```





**Fact 1**
 * Default of JS : Javascript always returns undefined 
     * default value of a variable 
     * when you don't return anything a fn return undefined
     * when you can't find a property in object you get undefined
for e.g 

```javascript
var myVar;
console.log("Value of",myVar)
```
**Output:** `Undefined`

### Datatypes in JS
Two types of datatypes in JS are:

**Primitive Data Types:**
1. Number
2. String
3. Null
4. Undefined
5. Boolean

**New Primitive Types:**
1. BigInt
2. Symbol

**Non-Primitive Types (Reference Types):**
1. Object
2. Functions
3. Arrays

**New Non-Primitive Types:**
1. Map
2. Set
3. WeakMap
4. WeakSet

Lets understand these one by one:

1. **Numbers:** similar to mathematical numbers it is represented using  64 bit floating values

**Asking question?**
What will be the output of this:
```javascript
   console.log("ans", 5 / 2); // 
   ```
**Output:** 
```plaintext
ans 2.5
```


**Asking Question ?**
Do you have the strings and characters both in the javascript?
**Ans:** We have only strings in JS

2. **Strings:**
There are three ways of creating the string:

**Way-1 & 2**
```javascript
let age = 25;
let str1 = 'I am ' + age + " years old ";
console.log(str1); 
```

**Explanation:**
* there is no difference between the single quotes and double quotes
* Problem is Js '' and "" doesn't support the multiple line strings so the next way solves that 

**Output:** 
```plaintext
I am 25 years old
```

**Way 2:**
```javascript
let templateString = `I am 
${age} years old`;
console.log(templateString); 
```

**Output:** 
```plaintext
I am 25 years old
```

3. **Null and Undefined:**
    - In JS the empty is shown using the undefined.
    - In JS the null is used to show empty value  which are user defined

4. **typeof Operator:**
**Asking question:**

What will be the output of the below code:
   ```javascript
   var a = 10;
   console.log("55",typeof a); 
   a = "string";
   console.log("57",typeof a); 
   a = { "name": "Jasbir" };
   console.log("59",typeof a); 
   ```
**Explanation:**
* The typeof() function is used to get the data type of 'a' which can be number, stringm or a object.

**Output:**
```plaintext
55 number
57 string
59 object
```

**Fact 2:** *JS was build just in 10 days by netscape.*

5. **typeof null**
```javascript
   console.log(typeof null); 
```
**Explanation:**
* It is a bug not a feature that the type of NULL is object
* Intially in the 32 bit systems null was represented as 000x in hexadecimal.
![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/052/043/original/upload_2e4626eba2003b97d63fe9c6ffbe2779.png?1696313521)
* So the typeof(null) is tagged with 000 and also the type tag of 000 is object so that is why it is giving output as object.
 `Reference` : [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null)

**Output:** 
```plaintext
object
```

6. **Array Check:**
```javascript
console.log(typeof([1, 2, 3, 4])); 
```
**Explanation:**
- typeof() gives you an object because in JS we emulate behaviour of array using objects this we will learn later on 

**Output:** 
```plaintext
object
```

* Correct way to check wheather you are recieving array or object

```javascript
let arr = [1,2,3,4];
console.log(Array.isArray(arr));
```
**Explanation:**
- typeof() is used to check the data type of given array named as arr

**Output:**
```plaintext
true
```

---


## Non Primitive Function

```javascript
// Function Definition
function fn(param1) {
    console.log("Hello world!", param1);
}
// Function Call
let rVal = fn();
console.log("Return val", rVal);
```
**Question Explanation:** 
* As already said that if you do not pass any parameter then you do not get any error and then it will output as undefined.

**Output:**
```plaintext
Hello world! undefined
return val undefined
```

If we make change in the above code what will be the output now? 

```javascript
// Function Definition

function fn(param1) {
    console.log("Hello world!", param1);
    return 
    
            "Returned value";
}

// Function Call
let rVal = fn();
console.log("Return val", rVal);
```

**Question Explanation:**
Again you will get the same output as in JS the semicolon is automatically gets inserted after the word *return*.

**Output:**
```plaintext
Hello world! undefined
return val undefined
```

---


## Objects and JSON

**Asking Question:**
What is an object in JS?
**Ans:** It is collection of key-value pairs, where key can be number, string, and value can be any valid JS.

Here's the code snippet related to JS objects :

```javascript
// Object Definition
let cap = {
    name: "Steve",
    'last Name': "Rogers",
    isAvenger: true,
    address:{
        city:manhattan,
        state:"Newyer"
    },
    sayHi:function(){
        console.log("Cap say's HI");
    },
    movies:["Avenger", "civile War"];
}

// There are two ways accesing the value from the object
// dot operator
console.log("name is",cap.name)
//  using the [] square bracket
console.log("last name is",cap['last Name']);

cap.sayHi();
```

**Question Explanation:**
There are two ways accessing the value from the object
* dot operator
* using the [] square bracket

**Output:**
```plaintext
name is Steve
last name is Rogers
```

**Asking Question:**
What do you think that will be printed?
```javascript
let cap = {
    name:"Steve",
    age: 34,
    isAvenger: true,
    }
for(let key in cap){
    console.log(key, " ", cap[key], " ", cap.key);
}
```
**Question Explanation:**
* **JSON:**(Javascript object Notation) It is format to store the data which is inspired by syntax of JS objects.
* Using the for loop to access the kwy and values from the biject cap using both . and [] operators
* As (**.**) operator is a literal operator so it tries literally to match the key  with all the keys in object. 
* [] ->search for the values of the variable inside it.

**Output:**
```plaintext
name Steve undefined
age 34 undefined
isAvenger true undefined
```

---


## JS Code Execution

**High level view of your code execution**

```javascript
let a = 10;

function fn() {
    console.log("I am fn");

    function inner() {
        console.log("I am inner");
    }

    inner();
}

fn();
```
**Question Explanation:**
* As the function fn gets called first it will print output "I am fn"
* then the function inner() gets called then it will print "I am inner"

**Output:**
```plaintext
I am fn
I am inner
```

**Some Facts about JS:**
* The every JS code executes in a stack which is called as **Call Stack.** 
* Code that is not inside in any function is said to be in **Glabal Area.**
* Every code in JS is executed in **Execution Context.**
* Every code in global area is executed in **Global Execution Context.**

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/052/045/original/upload_6a92fb5d7d58ba98c293ed33a5e3cb3b.png?1696313743)

* As shown in the above image that intial the global code is defined , then the fn gets in the call stack , then the inner gets in the call stack.

After inserting the break points at various steps we can check the call stack as follows: 

As after inserting the breakpoint at various points which can be clearly visible in the call stack as shown below in the images:

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/052/046/original/upload_5bb5a1a8735bf81d632e9b9749a2683d.png?1696313770)

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/052/047/original/upload_60ce77bf4a6cc05605c2c28090981477.png?1696313802)

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/052/048/original/upload_993e1259e3d0a5e53eb92e9100c31e79.png?1696313840)

---



## Question

Consider the following JavaScript code:

```javascript
function real() {
    console.log("I am real. Always run me");
}
function real() {
    console.log("No I am real one ");
}
real();
function real() {
    console.log("You both are wasted");
}
```

**What will be the output when the code is executed?**

- [ ] "No I am real one"  
- [x] "You both are wasted"  
- [ ] Error  

**Question Explanation:**

**Code Execution:**
   * EC creation
        * Hoisting -> memory allocation
            * variables -> undefined
            * function -> get it's memory allocated 
        * global -> browser -> window/nodejs -> global object
        * outer scope -> outer variable
        * this-> always calculated
   * Code execution
1. The first two function declarations are overwritten by the last one.
2. The real() function is called, and the last version of the function's body is executed, which logs "You both are wasted" to the console.

**At the end of memory allocation:**
* var a = undefined
* real -> 3rd function

**Output:**
```plaintext
You both are wasted
Live reload enabled
```

What will be the output of the below line: 
```javascript
console.log(window)
```
**Output:**


![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/052/049/original/upload_88d8e4f70b047d3877baafd267a2e262.png?1696313959)

**Asking Question**
Why do we have the global object?
**Ans:** Because even the console.log is a window object. Basically these objects provides all the features to make a request, print, settimeout, document etc. 

---

## Let, Var and Const

**Asking Question:**
What will be the output of the below code ?

```javascript
var a = 10;
console.log("line number 2", a);

function fn() {
    var a = 20;
    console.log("line number 4", a);
    a++;
    console.log("line number 7", a);
    if (a) {
        var a = 30;
        a++;
        console.log("line number 11", a);
    }
    console.log("line number 13", a);
}
fn();
console.log("line number 16", a);
```
**Question Explanation:**
* First step will be creation of the execution context. The a will undefined and fn will have its memory allocated in the heap.
* Now when a=10, then it will console value of a as 10 and the execution context of fn will be done.
* During hoisting a will be undefined, then it will underfined, then it will be 21 , then it will be 31,then  again it will have 31, and then at last 10.
**Let's see the dry run :**

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/052/050/original/upload_37271458c6d87709fb7c96bdbc851afe.png?1696314015)

**Output:**
```plaintext
Line number 2 10
Line number 4 undefined
Line number 7 21
Line number 11 31
Line number 13 31
Line number 16 10
```

**Asking Question**
What will happen if we will replace every var with let?
```javascript
let a = 10;
console.log("line number 2", a);

function fn() {
    let a = 20;
    console.log("line number 4", a);
    a++;
    console.log("line number 7", a);
    if (a) {
        let a = 30;
        a++;
        console.log("line number 11", a);
    }
    console.log("line number 13", a);
}
fn();
console.log("line number 16", a);
```

Let's first discuss some basic difference between the **var** and **let**:

```javascript
*************var*************
// reassign
var a = 10;
a = 20;
//redeclared->yes
var a = 20;

console.log(a); // gives: undefined
var a = 10;
console.log(a); // gives: 10
```

**Explanation:**

For var we have: 
* reassign
* redeclared->yes

**Output:**

```plaintext
undefined
10
```

```javascript
*************let*************
// reassign
let a = 10;
a = 20;
//redeclared->Not Possible(hoisting works here) 
var a = 20;

let a;
console.log(a); // gives: undefined
a = 10;
console.log(a); // gives: 10

// But if we put as below then it will give the error 
console.log(a); 
let a;
```

**Explanation:**

For let we have:
* reassign
* redeclared->Not Possible(hoisting works here) 
* Let Hoisting ->undefined
* Before declaration let and const variables cannot be accessed->temporal dead zone
* let is always in script scope and var is in global scope. 

**Output:**
```plaintext
undefined
10
error
```

**![](https://lh7-us.googleusercontent.com/QEl90b_oln3uct4RVgqL8w4FtGtJ08Ct-nUTNj2NswBVtndH0eiwHBYlkWFDQ4hmZLFoVF93AI-e7FldYR2a7U83e9YRh_xeh11FTwRuWqTODGmxM8HaRB6XNqBa3FmsvlPg-g645FMmX8vJyZKHbis)

## Shadowing

**Asking Question:**
What will be the output of the code?


```javascript
let fruits = "apple";
console.log(fruits);
{
    console.log(fruits);
    let fruits; 
    console.log(fruits); 
    fruits = "orange";
    {
        console.log(fruits);
    }
    console.log(fruits);
}
console.log(fruits); 
```



**Expected Output:**
```plaintext
apple
//Hoisting will be done inside {}
ReferenceError: Cannot access 'fruits' before initialization (TDZ)
```

**Asking Question:**

What will be the output if remove that one line from the above code?

```javascript
let fruits = "apple";
console.log("21", fruits); 

{ 
    let fruits;
    console.log("25", fruits); 
    fruits = "orange";
    {
        console.log("28", fruits); 
    }
    console.log(fruits); 
}
console.log(fruits); 
```

**Expected Output:**
```plaintext
21 apple
25 undefined
28 orange
orange
apple
```


Now lets make one more change as follows:

```javascript
let fruits = "apple";
console.log("21", fruits); 

{ 
    let fruits;
    console.log("25", fruits); 
    fruits = "orange";
    {
        let fruits;
        console.log("28", fruits); 
    }
    console.log(fruits); 
}
console.log(fruits); 
```

*With the shodowing means to say that whenever in a current scope if you have a variable then it will shadow the outer variable.*

Now lets make some more changes in place of let if we have var: 

```javascript
var fruits = "apple";
console.log("21", fruits); 

{ 
    let fruits;
    fruits = "orange";
    console.log("25", fruits); 
    {
        let fruits;
        console.log("28", fruits); 
    }
    console.log(fruits); 
}
console.log(fruits); 
```

**Explanation**

1. You declare a global variable `fruits` with the value "apple" using `var`.
2. You log the value of `fruits` to the console, which outputs "21 apple."
Inside the block:
3. You declare a local variable `fruits` using `var` within the block. This declaration is hoisted to the top of the block, effectively overwriting the global `fruits` variable.
4. You assign the value "orange" to the local `fruits` variable.
5. You log the value of the local `fruits` variable within the block, which outputs "25 orange."
Inside the inner block:
6. You declare another local variable `fruits` using `var` within the inner block. This declaration is also hoisted to the top of the inner block, overwriting the previous local `fruits` variable.
7. You log the value of the inner local `fruits` variable, which also outputs "28 orange."
8. You log the value of the local `fruits` variable within the outer block, which is still "orange" because it's the same variable declared in step 3.

9. Finally, you log the value of the global `fruits` variable outside all the blocks, which is also "orange" because it has been modified within the inner block scope.

**Output:**
```plaintext
21 apple
25 orange
28 undefined
orange
apple
```

**What you cannot do?**
**Ans:** **Illegal Shadowing**

```javascript
let fruits = "apple";
console.log("21", fruits); 

{ 
    let fruits;
    fruits = "orange";
    console.log("25", fruits); 
    {
        var fruits;
        console.log("28", fruits); 
    }
    console.log(fruits); 
}
console.log(fruits); 
```


*If you are having the var inside and let outside, var scope is the function scope and let scope is block scope.* 