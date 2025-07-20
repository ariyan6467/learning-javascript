//operatorator:(arithmetic, comparison, logical, bitwise, assignment, ternary, unary)
// This file is part of the Operatorator project.

//arithmetic operations(+,-,*,/,%)
let a = 10;
let b = 5;
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;
console.log("Sum:", sum); // 15
console.log("Difference:", difference); // 5
console.log("Product:", product); // 50
console.log("Quotient:", quotient); // 2
console.log("Remainder:", remainder); // 0


//comparison operations(==, ===, !=, !==, >, <, >=, <=)
//==(check value), ===(check value and type), !=(check value), !==(check value and type), >(greater than), <(less than), >=(greater than or equal to), <=(less than or equal to)
let x = 10;
let y = "10";
console.log(x == y); // true (value is equal)
console.log(x === y); // false ( type are not equal)
console.log(x != y); // false (value is equal)
console.log(x !== y); // true (type are not equal)
console.log(x > y); // false
console.log(x < y); // false
console.log(x >= y); // true
console.log(x <= y); // true

//assignment operations(=, +=, -=, *=, /=, %=)
let z = 5;
z += 3; // equivalent to z = z + 3
console.log(z); // 8
z -= 2; // equivalent to z = z - 2
console.log(z); // 6
z *= 2; // equivalent to z = z * 2
console.log(z); // 12
z /= 3; // equivalent to z = z / 3
console.log(z); // 4
z %= 2; // equivalent to z = z % 2
console.log(z); // 0 (remainder of 4 divided by 2)

//logical operations(&&, ||, !)
//&&(true if both operands are true), ||(true if at least one operand is true), !(negation, true if the operand is false)
let nahi= true;
let nahi2 = false;
let nahi3 = true;
console.log(nahi && nahi2); // false
console.log(nahi && nahi3); // true
console.log(nahi || nahi2); // true
console.log(!nahi); // false
console.log(!nahi2); // true





//unary operations(++, --, +, -)
let a2 = 5;
a2++; // increment
console.log(a2); // 6
a2--; // decrement
console.log(a2);



//ternary operations(condition ? true : false)
let tahi = 20;
let status = (tahi >= 18) ? "Adult" : "Not Adult";
console.log(status); // "Adult"

let mode = "light" ;
let theme=(mode === "light") ? "bright" : "dark";
console.log(theme);
