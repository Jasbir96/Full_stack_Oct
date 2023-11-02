// -> 500ms
    let future = Date.now() + 5000;

        while (future > Date.now()) {
            console.log("Hello world!");
    }
