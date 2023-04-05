window.onload = function () {
    var mainDiv = document.getElementById("main-div");
    let allSpun = document.querySelectorAll("[data-tooltip]");
    // console.log(allSpun);
    for (let spun of allSpun) {
            
        spun.addEventListener("mouseover", foo)
        function foo(e) {
            let spanMiror = document.createElement("span");
            spanMiror.textContent = spun.textContent;
            let coords = spun.getBoundingClientRect();
            console.log(coords);
            spanMiror.style.position = "absolute";
            spanMiror.style.top = coords.bottom + "px";
            spanMiror.style.left = coords.left + "px";
            mainDiv.appendChild(spanMiror);
        }
    }


   
};