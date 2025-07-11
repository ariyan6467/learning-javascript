//strings


// String declaration
let str = "Hello, World!";
console.log("Original String:", str);
console.log("String Length:", str.length);
console.log( str[0]);
console.log( str[8]);

//template literals(special types of strings which is created using backticks ` `)
let user = `John`;
let userage=`${user} is ${3+4+5+6} years old.`;
console.log(userage);

// String concatenation
let firstName = "John";
let lastName = "Doe";
let fullName =`full name is ${firstName} ${lastName}`;
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Full Name:", fullName);

//escaping characters(/n, /t, /b, /r, /f, /v)
///n==> new line
///t==> tab space
///b==> backspace
///r==> carriage return
///f==> form feed
///v==> vertical tab
console.log("This is a new line:\nSecond line");
console.log("This is a tab:\tTabbed text");
console.log("This is a backspace: ABC\bD");
console.log("This is a carriage return: Hello\rWorld");
console.log("This is a form feed: First\fSecond");
console.log("This is a vertical tab: Line1\vLine2");


// String methods
// toUpperCase() and toLowerCase()
let string = "JavaScript";
console.log( string.toUpperCase());
console.log( string.toLowerCase());
console.log("Original String:", string);//both can't change the original string, they return a new string.coz,strings are not changeable in js


let hagu ="      nusavar fekana hoy nah     ";
console.log( hagu.trim()); // removes whitespace from both ends of a string
console.log( hagu.trimStart()); // removes whitespace from the beginning of a string
console.log( hagu.trimEnd()); // removes whitespace from the end of a string 


let numphy = "012345";
console.log( numphy.slice(3,5)); //return part of the string from index 3 to 5.5th index is not included
let numphy2 = "magir fua";
console.log( numphy2.slice(0,4)); //return part of the string from index 0 to 4.4th index is not included
console.log( numphy2.slice(-3)); //return last 3 characters of the string


let str1 = "Nahian";
let str2 = "Jawad";
console.log(str1.concat(" ", str2)); //concatenates str1 with str2  with a space in between
console.log(str1.concat(str2)); //concatenates str1 with str2 without a space in between
console.log(str1 + " " + str2); //another way to concatenate strings


let str3 = "Anu";
console.log(str3.replace("A","T")); //replaces first word from A to T
console.log(numphy2.replace("magir","sudanir")); //replaces first word from magir to sudanir



let str4 = "NAHIAN JAWAD ARIYAN";
console.log(str4.charAt(0));//N
console.log(str4.charAt(1));//A
console.log(str4.charAt(2));//H
console.log(str4.charAt(3));//I
console.log(str4.charAt(4));//A
console.log(str4.charAt(5));//N
console.log(str4.charAt(6));//J
console.log(str4.charAt(7));//A
console.log(str4.charAt(8));//W
console.log(str4.charAt(9));//A
console.log(str4.charAt(10));//D
console.log(str4.charAt(11));//A
console.log(str4.charAt(12));//R
console.log(str4.charAt(13));//I
console.log(str4.charAt(14));//Y
console.log(str4.charAt(15));//A
console.log(str4.charAt(16));//N
console.log(str4[10]); 
