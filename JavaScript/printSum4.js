function printSum4(summand1,summand2) {
    var result = Number(summand1) + Number(summand2);
    if(!isNaN(result)) {
        console.log(result);
    } else {
        console.log("Invalid Type");
    }
}

printSum4(1,2); // Result: 3
printSum4("1", 2); // Result: 3
printSum4("a", "b"); // Result: Invalid Type
