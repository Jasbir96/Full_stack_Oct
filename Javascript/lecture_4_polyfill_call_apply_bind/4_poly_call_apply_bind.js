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