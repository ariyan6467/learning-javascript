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
