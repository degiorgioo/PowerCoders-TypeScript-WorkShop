/**
 * printSum4 method
 * In this method was tried to convert both the values in numbers and then to check if the 
 * type of the return was not NaN.
 * If values for summand1 and summand2 are both numbers, the result can be calculated.
 * One or both of the given values could be another type than a number. When this occurs
 * an Error message ("Invalid Type") is displayed. 
 * 
 * @param {number} summand1 - Number one for the calculation
 * @param {number} summand2 - Number two for the calculation
 * @returns {number} - Retruns the sum of the two numbers
 */
function printSum4(summand1,summand2) {
    var result = Number(summand1) + Number(summand2);
    if(!isNaN(result)) {
        console.log(result);
    } else {
        console.log("Invalid Type");
    }
}

/**
 * 1) Valid call.
 * 2) Valid call, see description of printSum3.
 * 3) Invalid call, see description of printSum3.
 */
printSum4(1,2); // Result: 3
printSum4("1", 2); // Result: 3
printSum4("a", "b"); // Result: Invalid Type
