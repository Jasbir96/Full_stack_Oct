/****
 * callback hell : 
 * 1. nesting of cb  -> pryamid of doom
 * 2. Inversion of control -> the async function have access to my cbs and they can call however they event -> trust issue
 * ****/


// console.log("before");
// fs.readFile("./f1.txt", "utf-8", function (err, content1) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(content1);
//         fs.readFile("./f2.txt", "utf-8", function (err, content2) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(content2);
//                 fs.readFile("./f3.txt", "utf-8", function (err, content3) {
//                     if (err) {
//                         console.log(err)
//                     } else {
//                         console.log("TOtal content of all three files ", content1 + " " + content2 + " " + content3)
//                     }
//                 })
//             }
//         })
//     }
// })
// console.log("After");


/****improving nesting*/
let concatedContent = ""
console.log("before");
fs.readFile("./f1.txt", "utf-8", f1cb)
function f1cb(err, content1) {
    if (err) {
        console.log(err)
    } else {
        console.log(content1);
        concatedContent = concatedContent + content1;
        fs.readFile("./f2.txt", "utf-8", f2cb);

    }
}
function f2cb(err, content2) {
    if (err) {
        console.log(err);
    } else {
        console.log(content2);
        concatedContent = concatedContent + content2;

        fs.readFile("./f3.txt", "utf-8", f3cb);
    }
}
function f3cb(err, content3) {
    if (err) {
        console.log(err)
    } else {
        concatedContent = concatedContent + content3;

        console.log("TOtal content of all three files ", content3)
    }
}
console.log("After");
