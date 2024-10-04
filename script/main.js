function buttonClicked(count) {
    count += 1;
    console.log("Button clicked: " + count);
}

function onload() {
    let count = 0;
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
