// input
let obj = {
    newObj: {
        obj2: {
            obj5: {
                one: 1,
            },
        },
    },
    obj3: {
        obj4: { two: 2 },
    },
};


// {
//     obj2: {
//         obj5: {
//             one: 1,
//             },
//     }


// {
//             one: 1,
//             }
// {newobj.obj2:1, newobj.obj3:10,another:10}

// let output = { 'newObj.obj2.obj5.one': 1, 'obj3.obj4.two': 2 };

function flattenObjFN(obj) {
    let flatten = {};
    // loop through my object
    for (let key in obj) {
        if (typeof obj[key] != "object") {
            flatten[key] = obj[key];
        } else {
            let innerObj = obj[key];
            flattenInnerObj = flattenObjFN(innerObj);
            for (let innerKey in flattenInnerObj) {
                flatten[key + "." + innerKey] = flattenInnerObj[innerKey];
            }
        }
    }
    return flatten;
}
let res = flattenObjFN(obj);
console.log("res", res);






