const nav = document.querySelector(".elements");
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