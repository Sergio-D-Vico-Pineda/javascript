import * as gt from "./gestionTasks.js";

function paintTask(elementId, task)
{
    document.getElementById(elementId).appendChild(task);
}

function showTask(elementId, task)
{
    const taskTemplate = document.getElementById("taskTemplate").content.cloneNode(true);
    const newtask = taskTemplate.querySelector("#taskExample");
    newtask.querySelector("#titleTask").textContent = task.name;
    newtask.querySelector("#dateTask").textContent = gt.fromLocalISOString(new Date(task.date));
    // newtask.querySelector("#dateTask").textContent = new Date(task.date).toLocaleString();
    newtask.querySelector("#checkTask").value = task.active;
    newtask.querySelector("#taskTag").textContent = task.tags.join(", ");

    paintTask(elementId, newtask);
}

export
{
    paintTask,
    showTask
}