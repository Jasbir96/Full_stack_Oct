// let fruits = "apple";
// console.log(fruits); 

// {
//     console.log(fruits);  
//     let fruits; 
//     console.log(fruits);
//     fruits = "orange";
//     {
//         console.log(fruits)
//     }
//     console.log(fruits);
// }

// console.log(fruits);


// let fruits = "apple";
// console.log("21", fruits);  //21 apple
// {
//     console.log("25", fruits); //25  apple
//     fruits = "orange";
//     {
//         console.log("fruits name ", fruits)
//     }
//     console.log(fruits);// 29  orange
// }
// console.log(fruits); // orange


// shadowing : in the current if you have a vriable then that variable will shadow the outer variable
// in that scope if the names are same 
//  legal shadowing  -> 
// let fruits = "apple";
// console.log("21", fruits);  //21 apple
// {
//     let fruits;
//     console.log("25", fruits); //25  apple
//     fruits = "orange";
//     {
//         let fruits
//         console.log("fruits name ", fruits)
//     }
//     console.log(fruits);// 29  orange
// }
// console.log(fruits); // orange




// var fruits = "apple";
// console.log("21", fruits);  //21 apple
// {
//     var  fruits;
//     console.log("25", fruits); //25  apple
//     fruits = "orange";
//     {
//         var fruits
//         console.log("fruits name ", fruits)
//     }
//     console.log(fruits);// 29  orange
// }
// console.log(fruits); // orange


// var a = 10;
// console.log("a 67",a);
// function fn() {
//     var a
//     console.log("69", a);
//     function fn2() {
//         var a=40;
//         console.log("a", a);
//     }
//     fn2();
//     console.log("74", a);
// }
// fn();
// console.log("a 79",a);




//  illegal shadowing -> wrt to var that living through whole GEC -> tring to wrap it inside a block scope

let fruits = "apple";
console.log("21",fruits); // apple
{ 
    let fruits;
    fruits = "orange";
    console.log("25",fruits);
    {
        var fruits;
        console.log("28",fruits);
    }
    console.log(fruits);
}
console.log(fruits);