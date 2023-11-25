/********************use case of bind ,call ,apply****************************/
let cap = {
    name: "Steve",
    sayHi: function (avenger1, avenger2, ...restofTheAveneger) {
        console.log(" Hey", avenger1, avenger2, ...restofTheAveneger);
        console.log("Hi from ", this.name);
    }
}

let ironMan = {
    name: "Tony"
}

/***
 * Rest -> when you are collecting the parameters,is used as function parameter 
 * Spread -> when you are spreading an array/obj in indiviual elements , when you use it inside a fn 
 * **/



// cap.sayHi("Peter", "Bruce");
/*****method -> call : borrow a method*/
cap.sayHi.call(ironMan, "Black Panther", "Antman");

/*****method -> apply : borrow a method , you can pass n number of parameters**/
// cap.sayHi.apply(ironMan, ["peter", "bruce", "Natasha", "Thor"])


/**********************************method -> bind , it is used bind a function to this*****************************************/

let boundtoIronManfn = cap.sayHi.bind(ironMan);
boundtoIronManfn("peter", "bruce", "Natasha", "Thor");