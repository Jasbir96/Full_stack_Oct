

/**
 * What we will be implemnting
 * *  promise Class 
 * * then and catch
 * 
 * Out of scope
 * 1. Chaining
 * 2. finally 
 * 3. PromiseAPI fn : all, race....
 * 
 * **/
const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

function CustomPromise(execFn) {
    // properties -> every Promise
    let state = PENDING;
    let value = undefined;
    let scbArr = [];
    let fcbArr = [];

    function resolveFn(data) {
        if (state == RESOLVED) return;
        // 1. change the state -> resolved and value  of the promise
        state = RESOLVED
        // 2. to call all the succes cbs asynchronously 
        value = data;
        scbArr.forEach((cb) => {

            queueMicrotask(() => {
                cb(data)
            })
        })
    }
    function rejectFn(err) {
        if (state == REJECTED) return;
        // 1. change the state -> resolved and value  of the promise
        state = REJECTED
        value = err;
        // 2. to call all the succes cbs asynchronously 
        // console.log("reached rejectFN");
        if (fcbArr.length == 0) {
            throw new Error(err);
        }
        
        fcbArr.forEach((cb) => {
            queueMicrotask(() => {
                cb(err);
            })
        })

    }

    //   few public functions that are avialable on your object 
    this.then = function (cb) {
        // constraint : then don't know when promise will be resolved/
        /*
        1. it check -> 
        if promise is resolved
        else save to success cb 
        ***/

        if (state == RESOLVED) {
            queueMicrotask(() => {
                cb(value);
            })
        } else {
            scbArr.push(cb);
        }
    }

    this.catch = function (cb) {
        if (state == REJECTED) {
            queueMicrotask(() => {
                cb(value);
            })
        } else {
            fcbArr.push(cb);
        }

    }

    execFn(resolveFn, rejectFn);
}

module.exports = CustomPromise;