function buttonClicked() {
    console.log("Button clicked");
}

function onload() {
    console.log("DOM fully loaded and parsed");

    let btn = document.getElementById("btn");
    /* btn.addEventListener("click", buttonClicked); */
    btn.onclick = buttonClicked;

    let btn1 = document.getElementById("btn1");
    btn.addEventListener("click", buttonClicked);
}

document.addEventListener("DOMContentLoaded", onload);

let a = function () {
    console.log("DOM fully loaded and parsed");
}
