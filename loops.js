// Loops and 
// This section covers the use of loops with string manipulation in JavaScript.
// loops (execute a piece of code multiple times)--=>(for, while, do while)

//for loop
// for (let starting,condition, increment) {
//     // code to be executed
// }
// starting --> check condition --> print code --> increment --> check condition --> print code --> increment --> check condition --> print code --> increment --> check condition --> print code --> increment --> check condition --> print code

for (let i = 0; i <= 5; i++) {
    console.log("nusava fekana kore ", i , " bar");
}

//calculate the sum of first 100 numbers
let sum = 0;
let j = 100;
for (let i = 1; i <= j; i++) {
    sum = sum + i;
}
console.log("1 theke", j, "porjonto shonkhar jogfol holo: ", sum);

//while loop
/*let starting;
 while (condition) {
   code to be executed
     increment
}*/
let hagu = 0;
while (hagu <= 5) {
    console.log("hagu korchi ", hagu, " bar");
    hagu++;
}


//do while loop
/*let starting;
 do {
   code to be executed
     increment
 } while (condition);*/
let k = 0;
do {
    console.log(k,"bar khaise",k,"fekana korchi ");
    k++;
} while (k <= 5);


//for of loop(count the number of characters in a string)
// for(let index of string) {
//     code to be executed
// }
let str = "I am a student of CSE";
let count;
for (let count of str) {
    console.log("Total characters in the string: ", count);
}

