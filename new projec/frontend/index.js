let button = document.querySelector(".readbutton");

let button2 = document.querySelector(".close");
let hiden1 = document.querySelector(".hiden");
let removebutoon = document.querySelector(".snow1");
// let frame = document.querySelector(".firstbg2");
let frame = document.querySelector(".firstbg");

console.log(hiden1);
button.addEventListener("click" , ()=>{
  // document.querySelector(".body1 div").classList.remove(".firstbg");
  // document.querySelector(".body1 div").classList.add("firstbg2");
  // document.querySelector(".container1 div").classList.remove(".hiden");
  // document.querySelector(".container1 div").classList.add(".hiden2");
  // document.querySelector(".body1").classList.remove(".snow1");
  // document.querySelector(".body1").classList.add(".snow11");
    
   button.style.display="none";
   hiden1.style.display ="list-item";
  
     removebutoon.style.bottom="-28rem";
    // button.innerText="";
   
      
   
    frame.style.height="1100px";
   
     

     
     
     
   
    
     
     
});
button2.addEventListener("click" , ()=>{
  // document.querySelector(".body1 div").classList.remove(".firstbg2");
  // document.querySelector(".body1 div").classList.add(".firstbg");
  // document.querySelector(".container1 div").classList.remove(".hiden");
  // document.querySelector(".container1 div").classList.add(".hiden2");
  // document.querySelector(".body1").classList.remove(".snow1");
  // document.querySelector(".body1").classList.add(".snow11");
  // button2.style.display="none";
   button.style.display="list-item";
   hiden1.style.display ="none";
  
     removebutoon.style.bottom="0";
    // button.innerText="";
    frame.style.height="650px";
      
   
   // hiden1.style.background="red";
   
     

     
     
     
   
    
     
     
});


