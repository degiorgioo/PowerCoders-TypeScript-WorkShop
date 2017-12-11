/**
 * printSum2 method
 * In this method was tried to check the type of the given values.
 * If values for summand1 and summand2 are both numbers, the result can be calculated.
 * 
 * @param {number} summand1 - Number one for the calculation
 * @param {number} summand2 - Number two for the calculation
 * @returns {number} - Retruns the sum of the two numbers
 */
function printSum2(summand1,summand2) {
    if (typeof summand1 == 'number'  && typeof summand2 == 'number') {
        var result = summand1 + summand2;
        console.log(result);
    }else {
        console.log("Invalid Type");
    }
}

/**
 * 1) This method-call is valid, because all values are numbers.
 * 2) The first value is not a number, thus the method prints the error-message.
 * 3) Both values are invalid.
 */
printSum2(1,2); // Result: 3
printSum2("1", 2); // Result: "Invalid Type"
printSum2("a", "b"); // Result: "Invalid Type"

