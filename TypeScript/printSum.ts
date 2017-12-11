/**
 * TypeScript checks at compiletime the types of the given value. This means that when the compiler
 * checks the code, an error occurs when the type of the value is not correct.
 *  
 * @param summand1 - Number one.
 * @param summand2 - Number two. 
 */
function printSumTypeScript(summand1: number, summand2: number) : void {
    let res: number = summand1 + summand2;
    console.log(res);
}

/**
 * 
 * 1) Valid call.
 * 2) Invalid call. Error: [ts] Argument of type '"1"' is not assignable to parameter of type 'number'.
 * 3) Invalid call. [ts] Argument of type '"2"' is not assignable to parameter of type 'number'.
 */
printSumTypeScript(1 ,2);
printSumTypeScript("1" ,2);
printSumTypeScript(1 ,"2");