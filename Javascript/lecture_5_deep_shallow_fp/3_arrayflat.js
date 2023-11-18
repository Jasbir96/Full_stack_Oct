//Version-1
// ## Problem statement
// input 
// output -> one-d array 
//  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];


// arr :[1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 11]]];

// solution
Array.prototype.myflat = () => {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        let element = this[i];
        if (Array.isArray(element)) {
            let parentArr = element.myflat();
            newArr = [...newArr, ...parentArr];
        } else {
            newArr.push(element);
        }
    }
    return newArr;
}

let arr = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 11]]];

let flattenArr = arr.myflat();

/*****Version-2****************/
// ## Problem statement
// input 
// arr, n -level : n -> n is integer
// arr :[1, 2, 3, [4, 5], [6, [7, 8], [9, 10, 11]]], n=1
// output -> one-d array 
//  [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11]];


// solution
// Array.prototype.myflat = () => {
//     let newArr = [];
//     return newArr;
// }

// let arr = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 11]]];

// let flattenArr = arr.myflat(1);



