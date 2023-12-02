const fs = require("fs");

const util = require("util");
const promisify = util.promisify;

// fs.readFile()-> async cb based fn

const promisifiedReadfile = promisify(fs.readFile);

// promisifiedReadfile("./f1.txt").then((data)=>{
//     console.log("then"+data)
// }).catch(err=>{console.log(err)})
