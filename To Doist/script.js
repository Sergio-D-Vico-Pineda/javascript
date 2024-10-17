"use strict"

import * as gt from "./js/gestionTasks.js";
import * as gw from "./js/gestionWeb.js";

// Prevent confirm from resend
window.history.replaceState(null, null, window.location.href);

gt.addTask(new gt.NewTask("Test", true, "2021-12-31 05:10", ["tag1", "tag2", "tag3"]));

for (let task of gt.taskList())
{
    gw.showTask("toDoList", task);
}

/* function toLocalISOString(date)
{
    const localDate = new Date(date - date.getTimezoneOffset() * 60000); //offset in milliseconds. Credit https://stackoverflow.com/questions/10830357/javascript-toisostring-ignores-timezone-offset
    localDate.setSeconds(null);
    localDate.setMilliseconds(null);
    return localDate.toISOString().slice(0, -1);
}

document.getElementById("date").value = toLocalISOString(new Date());

document.getElementById("tForm").addEventListener("submit", function(e)
{
    e.preventDefault(); // Prevents default form submission
}) */