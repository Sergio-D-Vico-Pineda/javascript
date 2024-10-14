let clear = document.querySelector(".clear");
let txtdisplay = document.querySelector("#text");
let equal = document.querySelector(".equal");
let actionBtns = document.querySelectorAll(".btn");

function printScreen(val)
{
    txtdisplay.textContent += val;
}

actionBtns.forEach((number) =>
{
    number.addEventListener("click", (e) =>
    {
        printScreen(e.target.id);
    });
})

equal.addEventListener("click", () =>
{
    txtdisplay.textContent = eval(txtdisplay.textContent);
})

clear.addEventListener("click", () =>
{
    txtdisplay.textContent = "";
})