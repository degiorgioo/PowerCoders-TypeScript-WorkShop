/**
 * printSum3 method
 * In this method was tried to convert both the values in numbers.
 * If values for summand1 and summand2 are both numbers, the result can be calculated.
 * 
 * @param {number} summand1 - Number one for the calculation
 * @param {number} summand2 - Number two for the calculation
 * @returns {number} - Retruns the sum of the two numbers
 */
function printSum3(summand1,summand2) {
    var result = Number(summand1) + Number(summand2);
    console.log(result);
}

/**
 * 1) Valid call.
 * 2) Valid call, because "1" will be converted to a number.
 * 3) Invalid call, because the Number-method can't convert the given values.
 * --> If Number can't convert the values, the method return 'NaN'.
 * Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#Description 
 */
printSum3(1,2); // Result: 3
printSum3("1", 2); // Result: 3
printSum3("a", "b"); // Result: NaN

