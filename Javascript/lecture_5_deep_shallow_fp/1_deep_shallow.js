
// // primitive types : variable refer to actual data
// let a=10;
// // non-primitives : the varibale refers to the address

// let arr=[1,2,3,4,5]

/****
 * Ways to copy the data
 * 0. Assignment
 * 1. Shallow copy
 * 2. Deep Copy
 * */

/***************0. Assignment************/
/*****primitives -> there values are copied */
// let a = 10;
// let b = a;
// b = 30;
// console.log(a);
/******non primitives -> there address are copied ***/
// let arr = [10, 20, 30, 40];
// let arr2 = arr;
// arr2[2] = 100;
// console.log("arr", arr);



/***************************Shallow copy ***********************/


let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    },
};
// deep copy ->
// creating a copy such that both of the types are now independent -> they don't share any memory space
// shallow copy ->creating a copy such that both of the types are not independent -> whole/ part of it shared the memory 


/************************shallow copy
 * 1. spread
 * 2. Object.assign
 *
 *  ***********************************************/

/*****spread**/
// let copiedobj = { ...person };

// console.log("person", person);
// copiedobj.firstName="Loki";
// copiedobj.address.street = "south avenue 12"
// console.log("`````````````````");
// console.log("person", person);



/**********Object.assign****/
// let copiedobj = Object.assign({}, person);

// console.log("person", person);
// copiedobj.firstName = "Loki";
// copiedobj.address.street = "south avenue 12"
// console.log("`````````````````");
// console.log("person", person);


/*******
 * deep copy -> JSON.stringify and JSON.parse
 * Problem : 
 * * JSON.stringify is slow
 * *  also does not support function 
 * **/

// let strObj = JSON.stringify(person);
// console.log("`````````````````");
// let copiedobj = JSON.parse(strObj);
// console.log("person", person);
// copiedobj.firstName="Loki";
// copiedobj.address.street = "south avenue 12"
// console.log("`````````````````");
// console.log("person", person);



