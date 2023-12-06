const promise = fs.promises.readFile("./f1.txt");


/**
 * then is  an event listener over promise  -> fn when promise is resolved (task is done)
 * **/
promise.then(function (data) {
    console.log("then data" + data)
})

/***
 * catch -> is also an event listener on promises -> fn when promise is rejected(You get an erro)
 * */
promise.catch(function (err) {
    console.log("catch data", err)
})


async function fn() {
    try {
        const data = await promise;
        console.log("data",data);
    } catch (err) {
        console.log(err);
    }
}
fn();


/***
 * async await -> replace then 
 * try and catch -> replace your catch method
 * */ 