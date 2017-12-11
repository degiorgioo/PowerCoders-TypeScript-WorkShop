function printSum3(summand1,summand2) {
    var result = Number(summand1) + Number(summand2);
    console.log(result);
}

printSum3(1,2); // Result: 3
printSum3("1", 2); // Result: 3
printSum3("a", "b"); // Result: NaN

