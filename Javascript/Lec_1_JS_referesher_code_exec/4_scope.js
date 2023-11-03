/***
 * EC : 
 * creation 
 *  1.    global code
 *              -> access to it's own variable and function 
 *                  -> Hositing 
 *                          var -> undefined 
 *                          function -> memory 
 *      function code 
 *                  -> access to it's own variable and function 
 *                  -> Hositing 
 *                          var -> undefined 
 *                          function -> memory 
 * 
 * 2. If there is no variable  present  that i want access in the current function scope then outer scope 
 * */ 



console.log("19", a);
var a = 10;
console.log("21", a);
function fn() {
    console.log("23", a);
    a++;
    function inner(){
        console.log("26",a);
        var a=40;
        console.log(a);
    } 
    inner();
}
console.log("30", a);
fn();
console.log("70", a);