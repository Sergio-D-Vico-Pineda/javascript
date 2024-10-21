import * as f from "./utils/functions.js";

window.history.replaceState(null, null, window.location.href);

const taskForm = document.getElementById("taskForm");
const btnnewForm = document.getElementById("btnnewForm");

f.newTask("Test", true, "2021-12-31 05:10", ["test ", " tag1", "tag2"]);

btnnewForm.addEventListener("click", () =>
{
    taskForm.style.display = "block";
    btnnewForm.style.display = "none";
    taskForm.date.value = f.toLocalISOString(new Date());
})

taskForm.addEventListener("reset", (e) =>
{
    taskForm.style.display = "none";
    btnnewForm.style.display = "block";
})

taskForm.addEventListener("submit", (e) =>
{
    e.preventDefault();
    taskForm.style.display = "none";
    btnnewForm.style.display = "block";

    f.newTask(taskForm.title.value, taskForm.active.checked, taskForm.date.value, taskForm.tags.value.split(","));

    taskForm.reset();
})

let modaldiv = document.querySelector(".modal");

modaldiv.addEventListener("click", (e) =>
{
    if (e.target == modaldiv || e.target.closest("button"))
        modal();

    const sp = document.querySelector("#cookies");
    sp.textContent = e.target.closest("button")?.textContent == "Decline" ? "Decline" : "Accept" + " Cookies"
})

function modal()
{
    modaldiv.style.display == "" ? modaldiv.style.display = "grid" : modaldiv.style.display = "";
}

setTimeout(modal, 1500)