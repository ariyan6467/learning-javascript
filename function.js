//function(a piece of code that performs a specific task. is a block of code designed to perform a particular task. It is executed when "called" or "invoked". Functions can take inputs, called parameters, and can return outputs.)

// function have 2 parts
// 1. function declaration
//function functionName(parameters) {
    // code to be executed
//}
//note:parameters are local scope.it means variable of parameters work under curli brases.
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

//==>function can also return the value
function anu(a,b,c){
    result=a+b/c;
    
    return result;
}
let cons=anu(6,4,2);
console.log(cons);


//arrow function
//const functionName=(parameters)=>{
      //code to run   
//}
const delulu=(fu,c,k)=>{
    let avr=fu+c+k;
    console.log(avr/3)
}
delulu(5,5,5);

//foreach loop in array
//foreach is higher order function.that use other function as a parameter.
//array.foreach(function(item,index,array){
    //code to run
//})
//it change the original array
let fruits = ["apple", "banana", "cherry", "date"];
   fruits.forEach(function(item,index,array){
    console.log(item,index,array);
    
    
   });

   //map over the array
   //array.map(function(item,index,array){
    //code to run
   //})
   //it does not change the original array.it return a new array.
   let country = ["india", "pakistan", "china", "japan", "korea"];  
   
   country.map(function(item,index,array){
    console.log(item.toUpperCase(),index,array);
   });
   console.log(country);


   //filter** over the array
   //according to the condition it return a new array.
   //array.filter(function(item,index,array){
    //code to run
   //})
   let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   let evenNumbers = numbers.filter(function(item,index,array){
    return item % 2 === 0;
   });
   console.log(evenNumbers);


   //reduce over the array
   //perform the operation on the array and return a single value.
   //array.reduce(function(total,item,index,array){
    //code to run
   //},initial value)
  let nums=[1,2,3,4];
 let sum=nums.reduce(function(ini,sec){
   return ini + sec
    
 }
      
)
console.log(sum);

/*ini=1,sec=2-->ini+sec & restore in ini-->now,ini=3,sec=3-->ini+sec & restore in ini-->now,ini=6,sec=4-->ini+sec & restore in ini them return to sum.*/
//if you wanna find maximam value from array then "return ini>sec? ini : sec
 
   



