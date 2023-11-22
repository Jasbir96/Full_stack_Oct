
/*****closure question-1***/ 
/****
 * closure:  your inner fucntion will always have access to outer functions
 * variable even if the outer fn is removed from the stack 
 * closure is created when Execution context  is created for the outer fn * 
 * */ 
// function outerFunction() {
//     let count = 2;

//     function innerFunction() {
//         count++;
//         return count
//     }
//     return innerFunction;
// }
// const innerFunc = outerFunction();
// console.log(innerFunc());
// console.log(innerFunc());


/***************closure question-2***********/ 

function createCounter(init, delta) {
    function countFn() {
        init = init + delta;
        return init;
    }
    return countFn
}
let c1 = createCounter(10, 5);
let c2 = createCounter(5, 2);
console.log(c1()) ;
console.log(c2());
console.log(c1());
console.log(c2()) ;





