function getFirstName(firstName) {
    console.log("I have got your first Name"); 

    return function getLastName(lastName="Singh") {
        console.log("I have got Your last Name");
        return function greeter() {
            console.log(`Hi I am ${firstName} ${lastName}`);
        }
    }
}


// getFirstName("Jasbir")("Singh")();

// const getLastNameFn = getFirstName("Jasbir");
// const greeterFn = getLastNameFn("Singh");
// greeterFn();
