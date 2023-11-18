let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA',
    },
    sayHi: function () {
        console.log("cap, say's Hi");
    },
    friends: ["peter", "tony"],
    weapons: [
        { toolName: "myolnoer", origin: "Asgard" },
        { name: "shield", origin: "wakanda" }],
    coordinates: [[2, 3], [7, 11]]
};


function deepCopy(source) {
    let deepCopyObject = Array.isArray(source) == true ? [] : {};
    for (let key in source) {
        //  work for arrays
        if (Array.isArray(source[key]) == true) {
            // copy at one level 
            let newArr = [...source[key]];
            // nested array
            for (let i = 0; i < newArr.length; i++) {
                if (typeof newArr[i] == "object") {
                    newArr[i] = deepCopy(newArr[i]);
                }
            }
            deepCopyObject[key] = newArr;
        }
        else if (typeof source[key] == "object") {
            // object 
            // recursion
            let copiedData = deepCopy(source[key]);
            deepCopyObject[key] = copiedData;

        } else {
            // primitives +function 
            deepCopyObject[key] = source[key];
        }
    }
    return deepCopyObject;
}

const weapons = [{ name: "myolnoer", origin: "Asgard" }, { name: "shield", origin: "wakanda" }]
const copiedPerson = deepCopy(person);


console.log(person);
copiedPerson.firstName = "Loki";
copiedPerson.address.state = "Delhi";
console.log("``````````````````````");
console.log(person);