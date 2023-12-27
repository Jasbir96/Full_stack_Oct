function calculateFibonacci(number) {
    // console.log("number", number);
    if (number <= 1) { return number };

    return calculateFibonacci(number - 1) + calculateFibonacci(number - 2);
}


onmessage = function (event) {
    const result = calculateFibonacci(event.data);
    postMessage(result);
}