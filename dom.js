//DOM==>process of accessing HTML through JAVASCRIPT.
//this is usually used to change any property dynamically according to users input
console.dir(document.body);
//IF I WANNA CHANGE BACKGROUND color of body
document.body.style.background = "pink"


//DOM manupulation(access tag/class/ID)

/*1.selecting with ID
  document.getElementById("myId")*/
  console.dir(document.getElementById("list"))//ulList
 
  //   2.selecting with CLASS
//   document.getElementByClassName("myclass")
     console.dir(document.getElementsByClassName("heading"))//HTMLcollection

//   3.selecting with tag
//   document.getElementByTagName("h1")

//   4.selecting with query selector
//   document.queryselector("myid/.myclass/#tag") 
     console.dir(document.querySelector("button"))     
    //==>return only first element
//   document.queryselectorAll("myid/myclass/tag")
     console.dir(document.querySelectorAll("button"))   
     //==>return a nodelist 
     
     
// properties(check/change/update)
//    1.tagName:returns types of tag
     let ami=document.getElementById("list");
     console.dir(ami.tagName)

/*    2.innertext:returns the "text content" of   the    element and its children.*/
    let manchu=document.getElementById("list");
    console.dir(manchu.innerText)

    // 3.innerHTML:returns HTML elements
    console.dir(ami.innerHTML)

    // 4.textContent:change elements including children
    let head=document.querySelector(".heading")
    console.dir(head.textContent="bakchod")



    //Attributes 
   
    // .getAttribute("attribute")
    // ==>return attribute value
    let patlu=document.querySelector("ul");
    console.log(patlu);
    console.log(patlu.getAttribute("id"))
    console.log(patlu.getAttribute("style"))

    // .setAttribute(attribute,value)
    // ==>change attribute value
    let motu = document.querySelector("button");
    console.log(motu);
    console.log(motu.setAttribute("id","buttoni"));//check 63
    console.log(patlu.setAttribute("id","package"))//check 53

    //.node.style
    //==>change style attribute value
    motu.style.background="red"
    motu.style.width="200px"
    motu.style.height="100px"
    motu.innerText="I Love Blood"
    motu.style.border="5px solid green"
    motu.style.color="blue"






// ADD ELEMENTS
              
//creat element-->let montu=document.createElement("tag")
//add element at screen-->
//  ->  .node.append(element)// tmi j node r sesh a add hbe, sei node r  satei add kore

let ghasita = document.createElement("button");
ghasita.innerText="motu patlu ki jodi"
console.log(ghasita);
let john=document.querySelector(".jhatka");
john.append(ghasita);






    
    
   
      