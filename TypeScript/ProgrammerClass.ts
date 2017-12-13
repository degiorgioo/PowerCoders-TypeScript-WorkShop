/**
 * This is a simple class named Programmer. The constructor needs
 * the name of the programmer, which is a string.
 * 
 * It's very interesting how the TypeScript code is transformed into
 * JavaScript code. Please check it.
 */
class Programmer {
    // properties for the class
    name: string;
    favouriteProgrammingLanguage: string;
    experienceInYears: number;

    // constructor to create instance
    constructor(name: string) {
        this.name = name;
    }

    // methods for the objects of this class
    sayHello() : void {
        console.log("I’m coding, please don’t disturb ;)");
    }
}

/**
 * Based on the Object oriented programming, we see here that it's possible
 * to call methods or variables on the 'Object-Instance'.
 * 
 */
var hadi = new Programmer("Hadi");
hadi.sayHello();