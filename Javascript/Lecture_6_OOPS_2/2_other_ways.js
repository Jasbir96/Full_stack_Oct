// function constructor

function Person(name, age) {

    this.name = name;
    this.age = age;

    this.sayHi = function () {
        console.log(`I am ${this.name} and ${this.age} years old`);
    }
}

const person1 =  new Person("Jasbir","Singh");
const person2 =  new Person("Varun","Singh");
// console.log(person1);
// console.log(person2);

/**************classes/********/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHI() {
        console.log(`I am ${this.name} and ${this.age} years old`);
    }
}

class SuperHuman extends Person {
    constructor(name, age) {
        // it call's constructor of the parent 
        super(name, age)
    }
    sayHI() {
        console.log(`I am super Human and ${this.name} years old`);
    }
}

const superOne = new SuperHuman("Jasbir",25);
console.log(superOne);
superOne.sayHI();


/****
 * Function constructor -> is used to create object ,it is called with new in front of it 
 * 
 * Normal function when you don't have new in front of a function call then it behaves like a normal fn -> in that case
 * if you don't return anything you get undefined
 * 
 * **/ 
