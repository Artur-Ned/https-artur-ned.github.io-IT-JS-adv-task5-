let yacor = document.querySelector("#yacor");
let divText = document.querySelector(".div-text");
let btn = document.querySelector(".btn");
console.log(btn);

    
yacor.addEventListener("click", togle);

function togle(e) {
    e.preventDefault();
    divText.classList.toggle("hidden");
    
}

btn.addEventListener("click", dellete);

function dellete(e) {
    yacor.removeEventListener("click", togle);  
    
}