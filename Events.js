//Events in JS (interesting changes after user input)

let btn1= document.querySelector("#btn1");
console.log(btn1);

btn1.onclick = () => {
    console.log("nusava fekana kore nah" )

}

//event object(this is a special object that has details about the events)
//->all event handlers have acces  to the event object's property

//==>node.event = (var) =>{
//     handle here    
//}


  btn1.ondblclick = (anu) =>{
    console.log(anu);
  }

   
  //==>it show's all event property of declared node like btn1



  //Events in JS through Events Listeners(another way to add/remove event with node)
  //1.node.addEventListener(event,function to execute after event )
   let btn2= document.querySelector("#btn2");
   console.log(btn2);
    btn2.addEventListener("click",() => {
        console.log("mamma miya");
    });

    //2.node.removeEventListener(event,function to remove )
   
    btn2.addEventListener("click",() => {
        console.log("mamma miya 1");
    });

     btn2.addEventListener("click",() => {
        console.log("mamma miya 2");
    });

     btn2.addEventListener("click",() => {
        console.log("mamma miya 3");
    });

     btn2.addEventListener("click",() => {
        console.log("mamma miya 4");
    });

     //if i want mamma miya 3 
       const handler3 = () => {
        console.log("mamma miya 3");
    }
    btn2.removeEventListener("click",handler3);
    


    let btnmode = document.querySelector(".mode"); 
console.log(btnmode);

let crntmode = "dark";

btnmode.addEventListener("click", () => {
  if (crntmode === "light") {
    crntmode = "dark";
    document.querySelector("body").classList.add("dark");
    document.querySelector("body").classList.remove("light");

  } else if (crntmode === "dark") {
     crntmode = "light";
     document.querySelector("body").classList.add("light");
      document.querySelector("body").classList.remove("dark");

  }
  console.log(crntmode);
});

