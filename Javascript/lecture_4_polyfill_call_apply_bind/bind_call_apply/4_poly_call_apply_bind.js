let cap = {
    name: "Steve",
    sayHi: function (avenger1, avenger2, ...restofTheAveneger) {
        console.log(" Hey", avenger1, avenger2, ...restofTheAveneger);
        console.log("Hi from ", this.name);
    },
    address: {
        city: "NewYork",
        state: "Manhatten",
        myFn: function () {
            console.log(this);
        }
    }
}
let ironMan = {
    name: "Tony",

}
function fn() {
    console.log(this.name);
}

/********************call method*******************/
Function.prototype.myCall = function (toBeCalledThis, ...args) {
    // the method/fn on which we are calling our mycall
    // console.log(this);
    // console.log( toBeCalledThis);
    toBeCalledThis.tempMethod = this;

    toBeCalledThis.tempMethod(...args);
    // to negate the effect 
    delete toBeCalledThis.tempMethod;
}

// cap.sayHi.myCall(ironMan, "peter", "bruce");
// fn.myCall(ironMan);



// console.log("````````````````````````")
// cap.sayHi.call(ironMan, "peter", "bruce");


/******************apply***********************/
Function.prototype.myApply = function (toBeCalledThis, args) {
    // the method/fn on which we are calling our mycall
    // console.log(this);
    // console.log( toBeCalledThis);
    toBeCalledThis.tempMethod = this;
    toBeCalledThis.tempMethod(...args);
    // to negate the effect 
    delete toBeCalledThis.tempMethod;
}


// cap.sayHi.myApply(ironMan, ["peter", "bruce"]);
// console.log("```````````````````");

// cap.sayHi.apply(ironMan, ["peter", "bruce"]);

/******************************bind************************/

Function.prototype.myBind = function (toBeCalledThis) {
    // you are saving th method
    const myFutureFn = this;
    console.log(this);
    console.log(toBeCalledThis)

    console.log("````````````````")
    return function (...args) {
        // we are adding the fn with which i want to call my object
        toBeCalledThis.tempFn = myFutureFn;
        // you using the object with which you want to call the fn
        toBeCalledThis.tempFn(...args);
        delete toBeCalledThis.tempFn;
    }
    // ironMan.sayHi("peter","Natahsa")
}
// 1st step -> 
// cap.sayHi -> as this
// ironMan : the object with which you want to call you cap.sayHi
const customBoundFn = cap.sayHi.myBind(ironMan);
// args  
customBoundFn("peter", "Natasha");
console.log("```````````````````````````");






// const boundFn = cap.sayHi.bind(ironMan);

// boundFn("peter", "Natasha")





