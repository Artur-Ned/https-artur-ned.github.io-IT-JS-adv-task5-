

let divTextAll = document.querySelectorAll(".div-text");
let btn = document.querySelector(".div-text-btn");

// console.log(divTextAll);

for (let div of divTextAll) {
    div.addEventListener("click", foo);
    function foo(e) {
        if (e.target.nodeName === "BUTTON") {
            div.remove();
        }
    }
}


