//objects in JavaScript
//Objects are collections of key-value pairs

const person = {
    name: "John",
    age: 30,
    greet() {
        console.log("Hello, my name is " + this.name);//this refers to the person object
    }
};

person.greet();
//every object in js there is a automatically created property called prototype
//which is used to inherit properties and methods
console.log(person.__proto__); // carried many properties and methods of this object
let country = ["USA", "Canada", "Mexico"];
//Array is also an object in JavaScript
console.log(country.__proto__); // Array.prototype
country.push("UK"); // Array method
console.log(country); // ["USA", "Canada", "Mexico", "UK"]


//if we wanna use methods/properties of an object in another object
const taxCalculator = {
    calctax() {
        console.log("Tax rate is 20%");
    }
};

const employee = {
    name: "Alice",
    position: "Software Engineer",
  
};

employee.__proto__ = taxCalculator; //inherit properties and methods from taxCalculator
employee.calctax(); // "Tax rate is 20%"
employee.__proto__= person; // now employee has access to person properties
console.log(employee.name); // "Alice".Important:object always use own properties first not inherited prototype properties





//Classes in JavaScript
//Class is a program-code template for creating objects
//Those objects will have properties and methods defined in the class
//class MyClass {
//    constructor() {
//        this.property = "value"; // Initialize properties
//    }
//    myMethod() {
//        console.log("Hello from MyClass!");
//    }
// }

//Constructor is a special method for creating and initializing an object created with a class
//constructor in class is invoked(execute) when an object is created from the class
class love{
    constructor(theo, prac) {
        console.log("Creating an instance of love class");
        this.theo = theo; // Initialize properties
        this.prac = prac; // Initialize properties
    }
    start() {
        console.log("love is a beautiful feeling"); // "love is a beautiful feeling"
    }
    end() {
        console.log("love can also be painful");
    }
}
console.log(love);
//create a object of class love
//let myobj = new MyClass();
let phylosophy = new love("Suspatious", "Tromatize");//print "constructor";check 61
console.log(phylosophy); 
let lifelesson = new love("Dreamy", "Painful");//print "constructor";check 61
console.log(lifelesson); 

phylosophy.start(); // "love is a beautiful feeling"
phylosophy.end(); // "love can also be painful"
lifelesson.start(); // "love is a beautiful feeling"
lifelesson.end(); // "love can also be painful"




//Inheritance in classes
//passing properties and methods from one class to another class
//let class toyota's methods and properties be inherited by lexus class
//class toyota{                 
//    }

//class lexus extends toyota {
// }
class Toyota {

    constructor(type) {
        console.log(`this is a ${type} car`);
        this.type = type; // Initialize properties

    }

    car() {
        console.log('This is a Toyota car');
        return 'This is a Toyota car';
    }
    milage() {
        console.log('This car has a mileage of 15 km/l');
        return 'This car has a mileage of 15 km/l';
    }
    color() {
        console.log('This car is red');
        return 'This car is red';
    }
}

class Lexus extends Toyota {
//    engine() {
//         console.log('This is a Lexus engine');
//     }
        car() {
            console.log('This is a Lexus car');
            return 'This is a Lexus car';
        }
}

let myLexus = new Lexus("four-wheeler");//check 99
let myToyota = new Toyota("three-wheeler");//check 99
console.log(myLexus.car()); // "This is a Lexus car"
console.log(myLexus.milage()); // "This car has a mileage of 15 km/l"
console.log(myLexus.color()); // "This car is red"
// console.log(myLexus.engine()); // "This is a Lexus engine"




//Super keyword
//used to call the constructor of the parent class to access the parents properties and methods

class RCB {
    constructor(playerName) {
        console.log("Creating an instance of RCB class");
        this.playerName = playerName; // Initialize properties
    }
    trophy() {
        console.log("RCB has won 3 IPL trophies");
    }
    cheer() {
        console.log("Go RCB!");
    }
}

class MI extends RCB {
    constructor(playerName) {
        super(playerName); // Call the parent class constructor
     
    }
    trophi() {
        super.trophy(); // Call the parent class method
        console.log("MI has won 5 IPL trophies");
    }
}

    let MIian = new MI("Rohit Sharma");
    let RCBian = new RCB("Virat Kohli");