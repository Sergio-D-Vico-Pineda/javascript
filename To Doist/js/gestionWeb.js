import * as gt from "./gestionTasks.js";

// Se pinta la tarea
function paintTask(elementId, task)
{
    document.getElementById(elementId).appendChild(task);
}

// Se pone la tarea en el DOM
function showTask(task)
{
    const taskTemplate = document.getElementById("taskTemplate").content.cloneNode(true);
    const newtask = taskTemplate.querySelector("article");

    newtask.querySelector("#titleTask").textContent = task.name;
    newtask.querySelector("#dateTask").textContent = gt.fromLocalISOString(new Date(task.date));
    let btnDeleteTask = newtask.querySelector("#btnDeleteTask");
    let btnEditTask = newtask.querySelector("#btnEditTask");
    newtask.id = task.id;

    /* let delHandle = new DeleteTaskHandle(task);
    btnDeleteTask.addEventListener("click", delHandle); */

    let delFunct = () => DelTask(task.id);
    btnDeleteTask.addEventListener("click", delFunct);

    let editFunct = () => EditTask(task.id);
    btnEditTask.addEventListener("click", editFunct);

    if (task.active)
    {
        newtask.querySelector("#checkTask").checked = true;
    }

    newtask.querySelector("#taskTag").textContent = task.tags.join(", ");

    paintTask("toDoList", newtask);
}

function repaint()
{
    document.getElementById("toDoList").innerHTML = "";

    for (let task of gt.taskList())
    {
        showTask(task);
    }

    document.getElementById("taskCounter").textContent = gt.countTasks();
}

let btnnewForm = document.getElementById("btnnewForm");
let taskForm = document.getElementById("taskForm");

function showFormNewTask()
{
    btnnewForm.style.display = "none";
    taskForm.style.display = "block";
    taskForm.date.value = toLocalISOString(new Date());
}

// Submit
taskForm.addEventListener("submit", (e) =>
{
    e.preventDefault();

    let tags = taskForm.tags.value.split(",");

    // alert(`Title: ${taskForm.title.value}\nDate: ${taskForm.date.value}\nTags: ${tags.join(", ")}\nActive: ${taskForm.active.checked}`);
    gt.addTask(new gt.NewTask(taskForm.title.value, taskForm.active.checked, taskForm.date.value, tags.map(tag => tag.trim())));

    taskForm.reset();

    repaint();
})

// Cancel
taskForm.addEventListener("reset", (e) =>
{
    e.preventDefault();
    taskForm.title.value = "";
    taskForm.date.value = "";
    taskForm.tags.value = "";
    taskForm.active.checked = false;

    taskForm.style.display = "none";
    btnnewForm.style.display = "block";
})


function toLocalISOString(date)
{
    const localDate = new Date(date - date.getTimezoneOffset() * 60000); //offset in milliseconds. Credit https://stackoverflow.com/questions/10830357/javascript-toisostring-ignores-timezone-offset
    localDate.setSeconds(null);
    localDate.setMilliseconds(null);
    return localDate.toISOString().slice(0, -1);
}

btnnewForm.addEventListener("click", showFormNewTask);

/* function DeleteTaskHandle(task)
{
    this.task = task;
    this.handleEvent = function(event)
    {

        gt.deleteTask(this.task.id);
        repaint();
    }
} */

function DelTask(id)
{
    gt.deleteTask(id);
    repaint();
}

function EditTask(id)
{
    const taskTemplate = document.getElementById("taskEditTemplate").content.cloneNode(true);
    const form = taskTemplate.querySelector("#taskEditForm");
    const task = document.getElementById(id);

    form.title.value = task.querySelector("#titleTask").textContent;
    form.tags.value = task.querySelector("#taskTag").textContent;
    // form.date.value = task.querySelector("#dateTask").value; TODO
    form.active.checked = task.querySelector("#checkTask").checked;
    task.querySelector("#btnEditTask").disabled = true;

    form.addEventListener("submit", (e) =>
    {
        e.preventDefault();
        let task = gt.getTask(id);
        task.updateName(form.title.value);
        task.querySelector("#btnEditTask").disabled = false;
        repaint();
    });

    form.addEventListener("reset", (e) =>
    {
        e.preventDefault();
        task.removeChild(form);
        task.querySelector("#btnEditTask").disabled = false;
    });


    task.appendChild(form);
}

export
{
    paintTask,
    showTask,
    repaint
}