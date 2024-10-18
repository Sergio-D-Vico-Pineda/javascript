let tasks = [],
    taskId = 0;

// Crear una nueva tarea
function NewTask(name, active, date, ...tags)
{
    this.name = name;
    this.active = active;
    this.date = Date.parse(new Date());
    this.tags = [];

    if (tags.length > 0)
    {
        this.tags = tags
    }

    if (!isNaN(Date.parse(date)))
    {
        this.date = Date.parse(date);
    }

    this.updateName = (newName) => this.name = newName;

    this.updateActive = (newActive) => this.active = newActive;

    // this.updateDate = (newDate) => this.date = Date.parse(newDate);

    this.updateTags = (newTags) => this.tags = newTags;
}

// Devolver el array de tareas
function taskList()
{
    return tasks;
}

function getTask(id)
{
    return tasks.find(task => task.id === id);
}

// Añadir una nueva tarea en el array
function addTask(task)
{
    task.id = taskId++;
    tasks.push(task);
}

// Borrar una tarea del array
function deleteTask(id)
{
    tasks = tasks.filter(task => task.id !== id);
}

// Contar el número de tareas
function countTasks()
{
    return tasks.length;
}

// Convertir una fecha local a UTC
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


//----------------------------------//
export
{
    NewTask,
    taskList,
    addTask,
    deleteTask,
    countTasks,
    toLocalISOString,
    fromLocalISOString,
    getTask
};