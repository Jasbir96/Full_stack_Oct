/***
 * EC : your get variables +outer scope+this +GE
 * Outer-scope : when the variable inside your current scope is
 * not present inside the current scope then you go to outer scope
 * 
 * **/

// var varName = 10;
// function fn() {
//     // var varName = 20;
//     console.log("I am varName", varName);
// }
// fn();


/****
 * outer scope -> will be determined by your function definition  -> lexically scoped
 * 
 * **/

var varName = 10;
// fn definition
function fn() {
    var varName = 20;
    function b() {
        console.log("26", varName);
    }
    // fn call
    b();
    console.log("30",varName);
}
fn();

//b =10
// fn -> varName=20;
// GEC -> varName=10;

