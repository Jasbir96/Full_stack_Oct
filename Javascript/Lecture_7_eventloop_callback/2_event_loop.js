let a = true;
console.log("Before");

setTimeout(() => {
    a = false;
    console.log("I broke the while loop");
}, 1000);

console.log("After");

// a delay of 5 sec 
let timeInfuture = Date.now() + 5000;

while (Date.now() < timeInfuture) {

}



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
 * 
 *   
 * ***/



console.log("Before");
const cb2 = () => {
    console.log("In cb2");
    while (true) {
    }
}
const cb1 = () => console.log("hello");
setTimeout(cb2, 1000)

setTimeout(cb1, 2000)

console.log("After");