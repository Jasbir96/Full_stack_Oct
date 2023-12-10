/***
 * Relation b/w -> then and catch
 * 1. then -> can have two cbs -> 
 *  1st -> scb (which executes on promise resolution), 
 *  2nd ->  is fcb (that's optional and which executes on promise rejection )
    2. catch -> is special case of then 
        catch -> promise.then(undefined,fcb)
 * 
*/
        /*******************1.************/ 
// a.)
//  let fs = require("fs");
//  let promise = fs.promises.readFile("f1.txt");

// function scb(data){
//     console.log("Hi the data " + data);
// }
// function fcb(err) {
//     console.log("err is 1" + err);
// }
// promise.then(scb,fcb)




// b.)
    let fs = require("fs");
    let promise = fs.promises.readFile("f11.txt");

    function scb() {
        console.log("Hi the data is 15 " + data);
    }
    function fcb(err) {
        console.log("err is 1" + err);
        }

        promise.then(scb, fcb)
