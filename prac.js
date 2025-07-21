marks=[85, 97, 44, 37, 60];
let sum=0;
for(let i=0; i<marks.length; i++){
   sum=sum + marks[i];
}
console.log("Sum of marks: " + sum);
let avg = sum / marks.length;
console.log("Average of marks: " + avg);

//for a given array of prices, calculate the discounted price (10% discount) for each item
// using both for loop and for of loop
let prices = [250, 645, 300, 900, 50];
for(let ila of prices){
   console.log("regular price: " + ila);
   console.log("discounted price: " + ila * 0.9); // 10% discount
}

for(let ima = 0; ima < prices.length; ima++){
   console.log("regular price: " + prices[ima]);
   console.log("discounted price: " + prices[ima] * 0.9); // 10% discount
}

let edtech=["bloomberg", "microsoft", "uber", "googole", "IBM", "amazon"];
edtech.shift(); 
console.log(edtech);
edtech.splice(2, 1, "ola"); //remove 1 item at index 2 and add "ola"
console.log(edtech);
edtech.shift();
console.log(edtech);
edtech.push("microsoft");
console.log(edtech);


function findvowel(z) {
   for (let idx of z.toLowerCase()) { // make it lowercase to handle A, E, I, O, U
      if (idx === "a" || idx === "e" || idx === "i" || idx === "o" || idx === "u") {
         console.log(idx + " is vowel");
      }
   }
}

findvowel("Masud");  // Output: a is vowel, u is vowel

let pappu=document.querySelector("h2");






//  let divs=document.querySelectorAll(".box");
//  console.dir(divs[0])
//  divs[0].innerText="collage";
//  divs[1].innerText="versity";
//  divs[2].innerText="phd";
 
//  let numty = 1;
//  for(div of divs){
//    div.innerText = "div - " + numty;
//    numty++;
//  }

 let ronaldo=document.createElement("button");
 ronaldo.innerText="HOME";

 let geni = document.querySelector("body");
 geni.prepend(ronaldo);
 ronaldo.style.backgroundColor="red";
ronaldo.style.color="blue";
geni.style.background="pink"

let para = document.querySelector(".bhotka");
console.log(para);
para.classList.add("daru")
// para.setAttribute("class","daru");
let par = document.querySelector(".daru");
console.log(par);
para.classList.remove("daru")


//You are creating a website for your collage..Create a class User with 2 properties: name and age.it also has a method called viewData() that allow the user to view their data.

class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    viewData() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

let user1 = new user("Nahian Jawad", 21);
user1.viewData(); // Output: Name: Nahian Jawad, Age: 21
let user2 = new user("Muntasir Islam", 20);
user2.viewData(); // Output: Name: Muntasir Islam, Age: 20


//create a new class called Admin which inherits from user.Add a new method called editData to admin that allows it to edit web site data

class Admin extends user {
    constructor(name, age) {
        super(name, age); // Call the parent class constructor
    }

    editData(newName, newAge) {
        this.name = newName;
        this.age = newAge;
        console.log(`Data updated: Name - ${this.name}, Age - ${this.age}`);
    }
}
let admin1 = new Admin("Sazzadul Islam", 24);
admin1.viewData(); // Output: Name: Sazzadul Islam, Age: 24       
admin1.editData("Sazzadul Islam Mahim", 25);

