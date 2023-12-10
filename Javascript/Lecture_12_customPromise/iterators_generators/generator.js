/*
* -> generators -> is a pausable function 
Working of it 
1. two steps to execute
    a. when you call the fn -> you get an itr
    b. whenver you call itr.next -> 
        you generator fn will execute till next yield
**/

function* fn() {
    console.log("1");
    console.log("2");
    yield 4;
    console.log("3");
    console.log("4");
}

console.log("Before");
// it does not starting excuting 
const itr = fn();
console.log("itr", itr);
console.log(itr.next());
console.log("b/w")
console.log(itr.next());

console.log("After");