// server -> proxy -> client

// let obj = { eng: "Hello", eng2: "hi" };

// const handler = {
//     get(target, prop) {
//         // console.log("get: ", target, prop)
//         return target[prop].toUpperCase();
//     },
//     set(target, prop, reciver) {
//         // add a check -> freeze the object
//         if (prop in target) {
//             target[prop] = reciver;
//         } else {
//             throw new Error("cannot add new props")
//         }
//         // console.log("set", target, prop)
//     }
// }
// const proxyObj = new Proxy(obj, handler);
// // console.log(proxyObj);

// console.log(proxyObj.eng2);
// proxyObj.eng = "Den";
// console.log(proxyObj);
// proxyObj.pref="Light";
// console.log("````````````");


/***************************
 * pattern to create your proxy objects
 * 
 * *******************/

function fn(inpObj) {
    let handler = {
        get(target, prop) {
            // console.log("10", target, prop, reciever);
            return target[prop].toUpperCase();
        },
        set(target, prop, reciever) {
            if (prop in target) {
                target[prop] = reciever;
                return true;
            } else {
                throw new Error("Cannot add new property");
            }
        }
    }

    let proxyObj = new Proxy(inpObj, handler);
    return proxyObj;
}


// directly pass the object without having any references 
let obj = fn({ eng: "Hello", eng2: "hi" });

console.log("eng1", obj.eng);
obj.eng2 = "Hola";
console.log(obj);


obj.eng4 = "fake";

/***
 * BigINt, symbols, map,set ,weakmap,weakset
 * **/ 