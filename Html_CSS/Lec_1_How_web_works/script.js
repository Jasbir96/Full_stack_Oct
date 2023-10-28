let future = Date.now() + 5000;
console.log("Waiting");
while (Date.now() < future) {

}
console.log("done");