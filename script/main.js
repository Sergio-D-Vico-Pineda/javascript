let count;
function buttonClicked() {
    count++;
    console.log("Button clicked:" + count);
    document.getElementById("count").textContent = count;
}

function onload() {
    count = document.getElementById("count").textContent;
    console.log("DOM fully loaded and parsed");
    

    let btn = document.getElementById("btn");
    /* btn.addEventListener("click", buttonClicked); */
    btn.onclick = buttonClicked;

    let btn1 = document.getElementById("btn1");
    btn1.addEventListener("click", buttonClicked);
}

document.addEventListener("DOMContentLoaded", onload);

let a = function () {
    console.log("DOM fully loaded and parsed");
}
