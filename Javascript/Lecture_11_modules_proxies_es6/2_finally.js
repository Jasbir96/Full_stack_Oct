/************************** Rules of finally*************************************/
/**
 * 1. finally does not take any parameter -> reject or resolve doesn't matter
 * ***/
// Promise.resolve(1).
// finally((data) => {
//     console.log("1", data);     //-> 1, undefined 
// })

/**
 * 2. if finally returns(reject/throw error/ promise that will be rejected ) then
 *  finally returns the error and parent's reject/rseolve is ignored
 * */
// Promise.reject(1).
//     finally((data) => {
//         console.log(data); // undefined
//         throw new Error("I am an error")
//     }).catch((err) => {
//         console.log(err.message); // I am an error
//         return "from catch"
//     })
/**
 *
 * 3. finally returns a value / promise that will be resolved  -> then it's  return  value is ignored &
 *  parent's resolved promise/value will be forwarded
 * ***/
// Promise.resolve("rval from parent")
// .finally((data) => {
//     console.log("1", data); // 1 undefined
//     return Promise.resolve(100);
// }).then((data) => {
//     console.log("2", data); // 2 rval
// })

/**
* 4. finally recives a reject/ throw new Error it executes itself 
and if it not itself returning (any error or rejected promise)
then it forwards the error to the chain
* */
// Promise.reject("some error").
//     finally((data) => {
//         console.log(data); // undefined
//         return "something";
//     }).catch((err) => {
//         console.log("2", err);  // 2 some error
//     })
// *********************************************************************

Promise.resolve(123)
    .then(d => {
        //123
        throw new Error('Some error'); //rejected promise
    })
    .catch((err) => {
        //some Error
        console.log(err);
        throw new Error(err.message);
    }).finally((d) => {
        console.log("came to finally");
        // d -> undefined
        return d;
    })
