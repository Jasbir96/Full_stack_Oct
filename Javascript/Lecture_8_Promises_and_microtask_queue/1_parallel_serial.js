/***
 * Parallel tasks -> When there are a number of tasks that are indepdenet so you can do those tasks simulatenously
 * Serial tasks -> When there are a number of tasks that are dependent so you can do those tasks simulatenously
 * 
 * Class was conducted -> 
 * 1. video recording willbe created on zooms server ->
 * 2.  download the video -> 
 * 3.compress the video -> 
 * 4. upload the video
 * ***/



/***
 * Asynchronous and synchronous functions 
 * **/


const fs = require("fs");
/*********************synchronous function*************************/

// console.log("Before");
// const content = fs.readFileSync("./f1.txt","utf-8");
// console.log(content)
// console.log("After ")

/**************************async function**************************************/
// console.log("Before");

// fs.readFile("./f1.txt", "utf-8", function (err, content) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(content)
//     }
// });

// console.log("After ");



/*************
 * serial tasks -> synchronous function 
 *  serial tasks(dependent) -> asynchronous function 
 * 
 * 
 * 
 * 1. usecase for Serial Tasks: 
 *  Usecase : 
 *      * you have to use fs.readFile , 
 *      * read f1,f2,f3 and
 *      * print concatenate the result  in the same order
 * ************/


// console.log("before");

fs.readFile("./f1.txt", "utf-8", function (err, content1) {
    if (err) {
        console.log(err)
    } else {
        console.log(content1);
        fs.readFile("./f2.txt", "utf-8", function (err, content2) {
            if (err) {
                console.log(err);
            } else {
                console.log(content2);
                fs.readFile("./f3.txt", "utf-8", function (err, content3) {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log("TOtal content of all three files ", content1 + " " + content2 + " " + content3)
                    }
                })
            }
        })
    }
})
// console.log("After");

/****
 * Parallel tasks -> async functions
 * 
 * Parallel  Tasks -> sync function -> not possible 
 * 
 *
 * * Usecase : read f1,f2,f3 -> print them in any order 
 * 
 * 
 * ***/

// console.log("Before");

// fs.readFile("./f1.txt", "utf-8", function (err, content) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(content)
//     }
// });
// fs.readFile("./f2.txt", "utf-8", function (err, content) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(content)
//     }
// });
// fs.readFile("./f3.txt", "utf-8", function (err, content) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(content)
//     }
// });

// console.log("After ");



//  Lecture 7: H1 - Two Files in Series-> 
//  Lecture 7 H2: n files in series -> recursive 

// function fn(arr, idx) {
//     if (idx == arr.length) {
//         return
//     }
//     fs.readFile(arr[idx], function () {

//         fn(arr, idx + 1)
//     })
// }




