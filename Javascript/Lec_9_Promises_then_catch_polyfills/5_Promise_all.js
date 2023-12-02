
/******* all of these will be resolved*****/
const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 100);
});



/****
 * case-2 some of these are rejected;
 * ****/
const p4 = 42;
const p3 = Promise.reject(3);
const p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 100);
});
/***************
 * Promise.all
    * Input :
    *      it takes an array of promise
    * Output : it returns a single promise
    * Behaviour:
    *     1.  if all of the input promises get resolved then ->promise returned by Promise.all
    *             state also get resolved ->you get array of resolved values of all the resp promises.
    *     2. if any of the input promise get's rejcted -?  promise returned by Promise.all
    *               state also get rejected -> you get that rejected promise
    * **********/
Promise.myAll = function (arrayOFPromises) {
    // 1.  if all of the input promises get resolved then -> promise returned by Promise.all
    //     * state also get resolved -> you get array of resolved values of all the resp promises.
    // * 2. if any of the input promise get's rejcted -?  promise returned by Promise.all
    //     * state also get rejected -> you get that rejected promise
    return new Promise(function (resolve, reject) {
        const resolvedPromisesValueArr = [];
        let pendingCount = arrayOFPromises.length;
        // when array is empty
        if (pendingCount == 0) {
            resolve(pendingCount);
            return;
        }
        // it have to loop through each of the promise -> resolved that and push that into an array
        // if either of them get's reejected 
        arrayOFPromises.forEach(async (promise) => {
            try {
                const value = await promise;
                resolvedPromisesValueArr.push(value);
                pendingCount--;
                if (pendingCount == 0) {
                    resolve(resolvedPromisesValueArr);
                }
            } catch (err) {
                reject(err);
            }

        })


    })
}
//case-1 
// Promise.myAll([p0, p1, p2])
//     .then(function (arrayofResolvedPromises) {
//         console.log("Inside my then");
//         console.log("32", arrayofResolvedPromises)
//     })

// /case-2
Promise.myAll([p4, p3, p5])
    .then(function (arrayofResolvedPromises) {
        console.log("Inside my then");
        console.log("32", arrayofResolvedPromises)
    }).catch(function (err) {
        console.log("err", err);
    })