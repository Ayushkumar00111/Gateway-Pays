
const h3 = document.querySelector(".h3loa");
const nav = document.querySelector(".elements");
const dots = document.querySelector(".loding");
const dots2 = document.querySelector(".loa");
const addmore = document.querySelector(".add_more");
let lastScrollY = Window.scrollY;

window.addEventListener("scroll",()=>{
if(lastScrollY < window.scrollY){
   
   nav.classList.remove("nav-hideen")
 
    console.log("we are down");
}
else
{
   
    
    nav.classList.add("nav-hideen")
 
    console.log("we are up");
}
lastScrollY = window.scrollY;

});

addmore.addEventListener("click" , ()=>{
   addmore.style.display="none";
   dots2.style.display="flex";
   h3.style.display="flex";
   
});
// window.addEventListener("scroll",()=>{
// if(lastScrollY < window.scrollY){
    
//    nav.classList.remove("nav-hideen")
//     console.log("we are down");
// }
// else
// {
   
//     nav.classList.add("nav-hideen")
//     console.log("we are up");
// }
// lastScrollY = window.scrollY;

// });

