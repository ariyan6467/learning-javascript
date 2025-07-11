// Arrays(type of data structure)
//collection of "items" 
//can be of any type
//can be of different types
//can be of any length
let heros = ["Ironman", "Spiderman", "Thor", 1, true];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["Ironman", 1, true, null, undefined];
console.log(heros);
console.log(numbers.length); //length of array
console.log(typeof heros); //object


//array indices
console.log(heros[0]); //Ironman
console.log(heros[1]); //Spiderman
console.log(heros[2]); //Thor      
console.log(heros[3]); //1
console.log(heros[4]); //true
console.log(heros[3]= "Hulk"); //change value at index 3
console.log(heros[4]="sheik hasina"); //change value at index 4
console.log(heros); //["Ironman", "Spiderman", "Thor", "Hulk", "sheik hasina"]

//looping over arrays
//for loop
/* for(let index = 0; index < arrays.length; index++){
    console.log(arrays[index]);
} */
 for(let idx=0; idx < heros.length; idx++){
    console.log(heros[idx]);
}

//for of loop
/*for(let value of array){
    console.log(value);
}*/
for(let hero of heros){
    console.log(hero);
   
}


//arrays methods
//1.1 push() - add an item to the end of the array
heros.push("Black Widow");
console.log(heros); //["Ironman", "Spiderman", "Thor", "Hulk", "sheik hasina", "Black Widow"]

//1.2 unshift() - add an item to the beginning of the array
heros.unshift("Captain America");
console.log(heros); //["Captain America", "Ironman", "Spiderman", "Thor", "Hulk", "sheik hasina", "Black Widow"]



//2.1 pop() - remove the last item from the array
heros.pop();
console.log(heros); //["Captain America", "Ironman", "Spiderman", "Thor", "Hulk", "sheik hasina"]

//2.2 shift() - remove the first item from the array
heros.shift();
console.log(heros); //["Ironman", "Spiderman", "Thor", "Hulk", "sheik hasina"]



//3. toString() - convert the array to a string
let herosString = heros.toString();
console.log(herosString); // "Ironman,Spiderman,Thor,Hulk,sheik hasina".not changing the original array
console.log(typeof herosString); //string   
console.log(heros); //["Ironman", "Spiderman", "Thor", "Hulk", "sheik hasina"]


//4. concat() - join multiple arrays
let moreHeros = ["Captain America", "Black Widow"];
let bdHeros = ["sheik mujibur rahman", "jiaur rahman"];
let allHeros = heros.concat(moreHeros, bdHeros);
console.log(allHeros); //["Ironman", "Spiderman", "Thor", "Hulk", "sheik hasina", "Captain America", "Black Widow", "sheik mujibur rahman", "jiaur rahman"]



//5. slice() - returns a piece of the array
let slicedHeros = allHeros.slice(2, 5); //from index 2 to index 5 (not including 5)
console.log(slicedHeros); //["Thor", "Hulk", "sheik hasina"]



//6. splice() - add/remove/replace items from the original array
//splice(starting index, number of items to remove, items to add, ...items to add)
let cities = ["Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna", "Barisal", "Rangpur", "Comilla"];
cities.splice(2, 4, "Narayanganj", "Gazipur"); //["Dhaka", "Chittagong", "Narayanganj", "Gazipur", "Khulna", "Barisal", "Rangpur", "Comilla"]
console.log(cities);



