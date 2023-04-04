let yacor = document.querySelector("#yacor");
let divText = document.querySelector(".div-text");
let btn = document.querySelector(".btn");
// console.log(btn);


yacor.addEventListener("click", togle);
yacor.onclick = function (e) { e.preventDefault() }
function togle(e) {
       divText.classList.toggle("hidden");    
}
// yacor.onclick.preventDefault();

btn.addEventListener("click", dellete);
function dellete(e) {
    yacor.removeEventListener("click", togle);    
}


