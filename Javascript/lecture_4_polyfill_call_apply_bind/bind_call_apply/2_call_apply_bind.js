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



/****************************
 * bind -> 
 * used to create copy of a method that has a 
 *          * always has a particular this
*           * default params 
 * 
 * 
 * *******************************************/

// const boundSayhiIronMan = cap.sayHi.bind(ironMan, "natasha", "loki");

// boundSayhiIronMan("peter", "bruce");
// console.log("```````````````````````````");
// boundSayhiIronMan("Steve", "Winter soldier");







/********call method -> method borrowing**/

// cap.sayHi.call(ironMan,"peter","bruce");


/********apply method -> method borrowing, when you want to pass n-number
 * parameter
 * **/
// let arr=["peter", "bruce", "Tichalla"];
// cap.sayHi.apply(ironMan, arr);


