function toLocalISOString(date)
{
    const localDate = new Date(date - date.getTimezoneOffset() * 60000); //offset in milliseconds. Credit https://stackoverflow.com/questions/10830357/javascript-toisostring-ignores-timezone-offset
    localDate.setSeconds(null);
    localDate.setMilliseconds(null);
    return localDate.toISOString().slice(0, -1);
}

// Convertir una fecha UTC a local
function fromLocalISOString(dateString)
{
    const date = new Date(dateString);
    const day = `0${date.getDate()}`.slice(-2);
    const month = `0${date.getMonth()+1}`.slice(-2);
    const year = date.getFullYear();
    const hour = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);

    return `${day}/${month}/${year} ${hour}:${minutes}`;
}

function newTask(title, active, date, tags)
{
    // const taskForm = document.getElementById("taskForm");
    // const btnnewForm = document.getElementById("btnnewForm");
    const taskList = document.getElementById("toDoList");

    const newtask = document.getElementById("taskTemplate").content.cloneNode(true).querySelector("article");

    newtask.querySelector("#titleTask").textContent = title.trim();
    newtask.querySelector("#dateTask").textContent = fromLocalISOString(date);
    newtask.querySelector("#taskTag").textContent = tags.map(tag => tag.trim());
    newtask.querySelector("#checkTask").checked = active;

    newtask.querySelector("#btnDeleteTask").addEventListener("click", () =>
    {
        taskList.removeChild(newtask);
        updateCount();
    })

    let btnEditTask = newtask.querySelector("#btnEditTask");

    btnEditTask.addEventListener("click", () =>
    {
        const editTask = document.getElementById("taskEditTemplate").content.cloneNode(true).querySelector("form");

        editTask.title.value = newtask.querySelector("#titleTask").textContent;
        editTask.tags.value = newtask.querySelector("#taskTag").textContent;
        editTask.active.checked = newtask.querySelector("#checkTask").checked;

        newtask.appendChild(editTask);

        btnEditTask.disabled = true;

        editTask.addEventListener("submit", (e) =>
        {
            e.preventDefault();

            newtask.querySelector("#titleTask").textContent = editTask.title.value.trim();
            newtask.querySelector("#taskTag").textContent = editTask.tags.value.split(",").map(tag => tag.trim());
            newtask.querySelector("#checkTask").checked = editTask.active.checked;

            newtask.removeChild(editTask);
            btnEditTask.disabled = false;
        })

        editTask.addEventListener("reset", (e) =>
        {
            e.preventDefault();
            newtask.removeChild(editTask);
            btnEditTask.disabled = false;
        })

        taskForm.style.display = "none";
        btnnewForm.style.display = "block";
    })

    /* newtask.addEventListener("click", () =>
    {
        newtask.querySelector("#checkTask").checked = !newtask.querySelector("#checkTask").checked;
    }) */

   taskList.appendChild(newtask);

   updateCount();
}

function updateCount()
{
    const taskCounter = document.getElementById("taskCounter");
    const taskList = document.getElementById("toDoList").querySelectorAll("article");
    console.log(taskList);
    taskCounter.textContent = taskList.length;
}

export
{
    toLocalISOString,
    fromLocalISOString,
    newTask
}