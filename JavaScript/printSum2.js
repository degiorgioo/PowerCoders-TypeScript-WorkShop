function printSum2(summand1,summand2) {
    if (typeof summand1 == 'number'  && typeof summand2 == 'number') {
        var result = summand1 + summand2;
        console.log(result);
    }else {
        console.log("Invalid Type");
    }
}

printSum2(1,2); // Result: 3
printSum2("1", 2); // Result: "Invalid Type"
printSum2("a", "b"); // Result: "Invalid Type"

