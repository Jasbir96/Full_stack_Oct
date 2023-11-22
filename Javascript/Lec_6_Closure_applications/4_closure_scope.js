/**************clsoure a function*******************/

// closure question-1
// closure -> fn level
// what will be the output
// function outer() {
//    var arrFn = [];
//     for (var i = 0 ;i < 3; i++) {
//         function fn() {
//             i++;
//             console.log(i);
//         }
//         arrFn.push(fn)
//     }
//     return arrFn;
// }
// let arrFn = outer();
// arrFn[0]();
// arrFn[1]();
// arrFn[2]();

// question -2
// closure -> fn level 

// function outer() {
//     let arrFn = [];
//     for (var i = 0; i < 3; i++) {

//         function fn() {
//             i++;
//             console.log(i);
//         }
//         arrFn.push(fn)
//     }
//     return arrFn;
// }
// let arrFn = outer();
// arrFn[0]();
// arrFn[1]();
// arrFn[2]();

function outer() {
    let arrFn = [];
    for (let i = 0; i < 3; i++) {
        // new seperate version  of i -> 0,1,2 
        function fn() {
            i++;
            console.log(i);
        }
        arrFn.push(fn)
    }
    return arrFn;
}
let arrFn = outer();
arrFn[0](); //0
arrFn[1]();//1
arrFn[2]();//2