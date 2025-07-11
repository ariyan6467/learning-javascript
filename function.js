//function(a piece of code that performs a specific task. is a block of code designed to perform a particular task. It is executed when "called" or "invoked". Functions can take inputs, called parameters, and can return outputs.)

// function have 2 parts
// 1. function declaration
//function functionName(parameters) {
    // code to be executed
//}
//example:function declaration
 function mylove(){
    console.log("I LOVE MY COUNTRY");
    console.log("I LOVE MY FAMILY");
    console.log("I LOVE MYSELF");
 }
// 2. function call
//functionName(arguments);
//example: function call
mylove();
mylove();


//function with parameters
function mygoal(name, age){
    console.log("My name is " + name);
    console.log("My age is " + age);
}
//function call with arguments
mygoal("John Doe", 25);

//function with parameters
function myachivement(age25,age30,age40,age50){
    console.log("At age 25, I achieved: " + age25);
    console.log("At age 30, I achieved: " + age30);
    console.log("At age 40, I achieved: " + age40);
    console.log("At age 50, I achieved: " + age50);
}
//function call with arguments
myachivement("Graduated from college", "Started my own business", "Traveled the world", "Retired and enjoying life");

//function with parameters
function myequation(a, b, c) {
    let result = a + b * c;
    console.log("The result of the equation is: " + result);
}

//function call with arguments
myequation(5, 10, 2);
