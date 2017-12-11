/**
 * printSum method
 * @param {number} summand1 - Number one for the calculation
 * @param {number} summand2 - Number two for the calculation
 * @returns {number} - Retruns the sum of the two numbers
 */
function printSum(summand1,summand2) {
    var result = summand1 + summand2; 
    console.log(result);
}

/**
 * the main problem of this method is, that it can be called with all every Object.
 * The method tries to run the operator with every passed parameter. 
 * Below you see an example for this situation.
 */

printSum(1,2); // Result: 3
printSum("1", 2); // Result: 12
