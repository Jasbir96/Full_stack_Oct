/**
 * if a promise is resolved and a catch is chained to that promise-> then that catch will be ignored
 * if a promise is rejected and a then is chained to that promise-> then that then  will be ignored
 * 
 * ***/
// 1.
// Promise.resolve(100)
// .catch((err) => {
//     console.log("err", err)
// }).
// then((data)=>{
//     console.log("data", data);
// })

// 2.
// Promise.reject(100)
// .then(()=>{
//     return Promise.reject("from then");
// }).catch((err)=>{
//     console.log("err",err)
// })

/**
 * Usecase : 
 * **/
// Promise.resolve(100)
// .catch((err) => {
//     console.log("err", err)
// }).
// then((data)=>{
//     console.log("data",data);
//     console.log(" I am here");
//   throw new Promise("I am an error and no one can stop me ")
// })


