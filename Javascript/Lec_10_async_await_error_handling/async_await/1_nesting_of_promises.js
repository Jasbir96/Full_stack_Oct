const fs = require("fs");
// nesting of cbs
fs.readFile("./f1.txt", "utf-8", function (err, content1) {
    if (err) {
        console.log(err)
    } else {
        console.log(content1);
        fs.readFile("./f2.txt", "utf-8", function (err, content2) {
            if (err) {
                console.log(err);
            } else {
                console.log(content2);
                fs.readFile("./f3.txt", "utf-8", function (err, content3) {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log("TOtal content of all three files ", content1 + " " + content2 + " " + content3)
                    }
                })
            }
        })
    }
})



/*******nesting of Promises***/
const f1Promises = fs.promises
    .readFile("./f1.txt", "utf-8");
f1Promises.
then(
    (data1) => {
        console.log(data1);
        const f2promise = fs.promises.readFile("./f2.txt", "utf-8");
        f2promise.then((data2) => {
            console.log(data2);
            const f3promise = fs.promises.readFile("./f3.txt", "utf-8");
            f3promise.then(function (data3) {
                console.log(data3);
            })
        })
    }
)
f1Promises.catch(err);

