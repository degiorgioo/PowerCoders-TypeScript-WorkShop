class Programmer {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    sayHello() : void {
        console.log("I’m coding, please don’t disturb ;)");
    }
}

var hadi = new Programmer("Hadi");
hadi.sayHello();