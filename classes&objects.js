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

class love{
    start() {
        console.log("Love is a beautiful feeling");
    }
    end() {
        console.log("Love can also be painful");
    }
}
console.log(love);
//create a object of class love
//let myobj = new MyClass();
let phylosophy = new love();
console.log(phylosophy);
console.log(typeof phylosophy); // "object"
console.log(typeof love); // "function"
phylosophy.start(); // "Love is a beautiful feeling"
phylosophy.end(); // "Love can also be painful"
