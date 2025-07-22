//CALLBACK

function add(a, b) {
    return a + b;
}

function average(a,b,addCallback) {
    let sumation = addCallback(a, b);
    let avg = sumation / 2;
    console.log("Average:", avg);
    return avg;
}

console.log(average(10, 20, add));


//if we wanna use callback after 4 seconds delai for each student
//we can use setTimeout
function babaschool(stu1, stu2) {
    setTimeout(() => {
        console.log("Roll1:", stu1);
        if (stu2) {
            stu2();
        }
    }, 2000);
}
//callback hell(pyramid of doom & not recommended)
//this type of coding becomes hard to understand and maintain
// babaschool("Jannatul Mawa Nusaiva",() => {
//     babaschool("Nahian Jawad Ariyan",() => {
//         babaschool("Samar Jafri",() => {
//             babaschool("Safa Jafri",() => {
//                 babaschool("Abdullah Jafri");
//             });
//         });
//     });
// });


//PROMISES >>>>>> Callback hell
//Promises are used to avoid callback hell
//let promise = new Promise((resolve, reject) => { }); 
//promise has three states
//1. pending(after order from daraz ,their promise is pending till it is delivered)
//2. fulfilled(resolved)(after order is delivered,the promise is fulfilled)
//3. rejected(when there is an error in the order,the promise is rejected)

 let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
     resolve("I am fulfilled");
 });



//practical example of promise
function xavierschool(student1,student2){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("Roll1:", student1);
        resolve("Student 1 is enrolled successfully");
        }, 2000);

        setTimeout(() => {
            console.log("Roll2:", student2);
            resolve("Student 2 is enrolled successfully");
        }, 4000);
});
}
xavierschool("anu","tanu")


//Usage of promises
//if we wanna do something after the promise is fulfilled

//we can use .then() method
//promise.then((result) => {.......})
//if we wanna do something after the promise is rejected
let promise1 = new Promise((resolve, reject) => {
    console.log("I am a promise");
     resolve("I am fulfilled");
 });
 promise1.then((result) => {
    console.log("Result:", result);
 });



//we can use .catch() method
////promise.catch((error) => {.......})

let promise2 = new Promise((resolve, reject) => {
    console.log("I am a promise");
    reject("I am rejected");//type promise2 to see the error
});

promise2.catch((error) => {
    console.log("Error:", error);
})










//Promise chaining
//if we wanna fetch data from multiple sources 
//we can use promise chaining
function country1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Cow is Yummy");
            resolve("Pakistani");
        }, 4000);
    });
}

function country2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Cow is Mummy");
            resolve("Indian");
        }, 5000);
    });
}


function country3(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Cow Onk Dammi");
            resolve("Bangladeshi");
        }, 5000);
    });
}


//now, they are fetching 4 seconds each later



//type-1
// country1().then((result1) => {
   
//     console.log("Pov:", result1);//this will print after 4 seconds
//     country2().then((result2) => {
       
//         console.log("Pov:", result2);//this will print after 4+5=9s seconds
//         country3().then((result3) =>{
//            console.log("pov:", result3);
        
//         })
//     });
// })


type-2
country1()
.then((result1) => {
    
    return country2();
})
.then((result2) => {
   
    return country3();
})
.then((result3) => {
    
})
.catch((error) => {
    console.error("Error occurred:", error);
});







//Async-Await
//asyns always return a promise
//await pauses the execution of its sorrounding async function until the promise is sattled
//asyns function myfunc(){.....}












