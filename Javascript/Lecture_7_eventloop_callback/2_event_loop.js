// let a = true;
// console.log("Before");

// setTimeout(() => {
//     a = false;
//     console.log("I broke the while loop");
// }, 1000);

// console.log("After");

// // a delay of 5 sec 
// let timeInfuture = Date.now() + 5000;

// while (Date.now() < timeInfuture) {

// }



/***
 * Envornment : Browser
 *      WebAPI: 
 *          console-> I/O
 *          SetTimout, setInterval :
 *          document :  
 *          fetch
 * 
 * Enviornment : Nodejs
 *      NodesAPI
 *              fs:
 *              console: 
 *              http: 
 * Rule of Thumb : 
 *      JS : only gives you logic 
 *      Environment : gives you features 
 * 
 * 
 * Programmar point of view 
 *      C++ -> JAVA [it abstarct away your pointers]
 *      JAVA-> JS[it abstract away your multitherading]
 * 
 * 
 * 
 * 1. Every line of code that you wrote in your js file  -> will only execute in call stack  
 * 2. For a cb coming from WebAPIS to execute -> callstack should be empty
 * 3. callback queue :As soon as task of asynchronous  function is done there cb is immediatley
 * enqueued in that queue
 * 4. event loop : checks the queue and as soon as a cb arrived in the queue it continously 
 * check if callstack is empty or not and pushed that cb in callStack .
 * 
 * 
 * JS -> single threaded , synchronous language
 * Nodejs -> is single threaded 
 * 
 * How it is able to excute async tasks -> asycnhronous architecture -> Event loop , callback Queue,
 * WebAPI  
 *   
 * ***/



// console.log("Before");
// const cb2 = () => {
//     console.log("Set timeout 1");
//     let timeInfuture = Date.now() + 5000;
//     while (Date.now() < timeInfuture) {
//     }
// }
// const cb1 = () => console.log("hello");

// setTimeout(cb2, 1000)
// // 7 sec ->6sec  
// setTimeout(cb1, 2000)
// console.log("After");


// Q1 : How we can understand the code async and sync ?
// Answer : asynchronous function, they defined by env

// Q2: How is Nodejs able to handle multiple tasks at once while is single threaded ?

// nodejs -> libuv 