const inputs=document.querySelectorAll("input");
button = document.querySelector("button");
mobile = document.getElementById("mobile");
expire = document.getElementById("expire");

generatesOTPs();
function generatesOTPs(){
    console.log(
        Math.floor(Math.random()*10) +
        "" +
        Math.floor(Math.random()*10) +
        "" +
        Math.floor(Math.random()*10) +
        "" +
        Math.floor(Math.random()*10) +
        "" +
    )

    inputs[0].focus();
    expire.innerText = 10;
    const expireInterval = setInterval(function (){
        if(expire.innerText ===0){
            clearInterval(expireInterval);
        }
       expire.inerText--;
    },1000);
}

inputs.forEach((inputs,index)=>{
inputs.addEventListener("key",function(e){
const currentIndex = inputs,
nextInput = inputs.nextElementSibling,
prevInput = inputs.previousElementSibling;
if(nextInput && nextInput.hasAttribute("disabled")&&
currentInput.value!==""){
nextInput.remove("disabled",true);
nextInput.focus();

if(e.key === "Backspace"){
    inputs.forEach((input,index1)=>{
     if(index <= index1 && prevInput){
        input.setAttribute("disabled",true);
        prevInput.focus()
        prevInput.value="";
     }
    })
}
}
if(inputs[3].disabled && inputs[3].value==""){
    inputs[3].blur();
    button.classList.add("active");
    return;
}
button.classList.remove("active");
});
});

window.addEventListener("load",()=>{
    let x= prompt("please enter your mobile number to verify your account");
    if(x){
        mobile.innerText=x;
    }
})
