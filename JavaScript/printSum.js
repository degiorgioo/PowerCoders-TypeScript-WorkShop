/**
 * printSum method
 * If values for summand1 and summand2 are both numbers, the result can be calculated.
 * 
 * @param {number} summand1 - Number one for the calculation
 * @param {number} summand2 - Number two for the calculation
 * @returns {number} - Retruns the sum of the two numbers
 */
function printSum(summand1,summand2) {
    var result = summand1 + summand2; 
    console.log(result);
}

/**
 * The main problem of this method is, that it can be called with every type of Object.
 * Below you see an example for this situation.
 */

printSum(1,2); // Result: 3
printSum("1", 2); // Result: 12
