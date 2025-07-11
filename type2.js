//data types (primitive and reference types) in JavaScript:type2

// Primitive data types (string, number, boolean, null, undefined, symbol, bigint)
a= 12; // number
b = "Hello"; // string
c = true; // boolean-->(true or false)
d = null; // null-->(value is intentionally absent but in future it will be assigned.)
e = undefined; // undefined-->(value is not assigned yet.)
f = Symbol("unique"); // symbol
g = BigInt(12345678901234567890); // bigint

let name = "John";
let age = 30;
let isStudent = true;

// Reference data types (array[], object{},function())
let hobbies = ["reading", "gaming", "hiking"];
let address = {
  street: "123 Main St",
  city: "Anytown",
  country: "USA"
};

//symbol
// Symbols are unique and immutable data types
// They are often used to create unique identifiers for object properties
let u1 = Symbol("uid");
let u2 = Symbol("uid");

// To check their values and types
console.log(u1); // Symbol(uid)
console.log(u2); // Symbol(uid)
console.log(u1 === u2); // false, because each Symbol is unique


//javascript is a dynamically typed language, it means you will change the type of a variable at any time.
let ariyanage = 21; // number
console.log(typeof ariyanage); // number
ariyanage = "Twenty-One"; // string
console.log(typeof ariyanage); // string   
ariyanage = true; // boolean
console.log(typeof ariyanage); // boolean

//type coercion (conversion of one type to another)
let anu = 5;
let tanu = "10";
let result = anu + tanu; 
console.log(result);// "510"
//coercion(+ operator converts number(5) to string("5") and concatenates with "10")

//truthy and falsy values
// Falsy values: false, 0, "", null, undefined, NaN
// Truthy values: all other values that are not falsy
let ariyan= 0; // falsy
if (ariyan) {
  console.log("he is a intelligent person");
} else {
  console.log("he is not a intelligent person");
}