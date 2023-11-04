// var a = 10;
// console.log("line number 2", a);
// function fn() {
//     var a = 20;
//     console.log("line number 5", a);
//     a++;
//     console.log("line number 7", a);
//     if (a) {
//         var a = 30;
//         a++;
//         console.log("line number 11", a);
//     }
//     console.log("line number 13", a);
// }
// fn();
// console.log("line number 16", a);


/*****
 * Type 1 : fn hositing -> function get the memory
 * Type 2 : variable -> like var -> they undefined , can also be accessed before declaration
 * Types 3:  Variable -> like let and const -> they are undefined , can't access it before declaration
 * */
/**
 * var  
 * -> scope : var is fn scope
 *  -> redeclared is allowed in current scope
 * -> in the case var you can access it before declaration 
 * **/

/***
 * let 
 * -> it is a block scope
 *  -> re-declaration is not allowed in current scope
 * -> hositing happens but with temproral dead zone
 * ->   cannot acces the value before declaration 
 * 
 * **/
// let a=10;
// let a=20;

// Block -> space b/w two {}



// let a = 10;
// console.log("line number 2", a);
// function fn() {
//    let a = 20;
//     console.log("line number 5", a);
//     a++;
//     console.log("line number 7", a);
//     if (a) {
//         let a = 30;
//         a++;
//         console.log("line number 11", a);
//         if(a){
//             let a=40;
//             console.log("xyz",a);
//         }
//     }
//     console.log("line number 13", a);
// }
// fn();
// console.log("line number 16", a);




// console.log("63",a);
// var a = 10;
// console.log("65",a);


// console.log("val in a", a);
// /***
//  * Temporal Dead Zone : before declaration let varaibales are not accessible 
//  * */
// let a;
// // a++;
// console.log("val in a", a);
// a = 10;
// console.log("val in a", a);



/*****third case ***/ 
let a = 10;
console.log("line number 2", a);
function fn() {
    console.log("line number 5", a);
    let a = 20;
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







