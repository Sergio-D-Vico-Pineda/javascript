let count;
function buttonClicked() {
    count++;
    console.log("Button clicked:" + count);
    document.getElementById("count").textContent = count;
}


count = document.getElementById("count").textContent;
console.log("DOM fully loaded and parsed");


let btn = document.getElementById("btn");
/* btn.addEventListener("click", buttonClicked); */
btn.onclick = buttonClicked;

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", buttonClicked);

let Ps = document.getElementsByClassName("scarpy");
for (const p1 of Ps) {
    console.log(p1.textContent);
    /* p1.style.color = "red"; */
}
Ps[2].classList.add("negrita");
Ps[3].classList.remove("sergio");

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function () {
    /* Ps[0].style.color == "blue" ? Ps[0].style.color = "red" :
        Ps[0].style.color = "blue"; */
    Ps[0].classList.toggle("text-blue");
});


let a = function () {
    console.log("DOM fully loaded and parsed");
}
