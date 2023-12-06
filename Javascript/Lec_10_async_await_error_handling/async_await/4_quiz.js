function resolveAfterNSeconds(delay, x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, delay);
    });
}

/*
output and time required
**/ 
(function () {

    let a = resolveAfterNSeconds(1000, 1) 
    a.then(async function (x) {  
        // x=1, t=1sec
       
        let y = await resolveAfterNSeconds(2000, 2)   //y= 2, t=2sec

        let z = await resolveAfterNSeconds(1000, 3)  // z=3, t =1sec 
    
        let p = resolveAfterNSeconds(2000, 4);
        let q = resolveAfterNSeconds(1000, 5);
        // p = await p; // p =4 , t=2sec
        // q = await q; // q=5   

        console.log(x + y + z + await p + await q);
    })
})()