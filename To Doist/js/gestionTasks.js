let tasks = [],
    taskId = 0;

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
}

function taskList()
{
    return tasks;
}

function addTask(task)
{
    task.id = taskId++;
    tasks.push(task);
}

function deleteTask(id)
{
    tasks = tasks.filter(task => task.id !== id);
}

function countTasks()
{
    return tasks.length;
}

function toLocalISOString(date)
{
    const localDate = new Date(date - date.getTimezoneOffset() * 60000); //offset in milliseconds. Credit https://stackoverflow.com/questions/10830357/javascript-toisostring-ignores-timezone-offset
    localDate.setSeconds(null);
    localDate.setMilliseconds(null);
    return localDate.toISOString().slice(0, -1);
}


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
    fromLocalISOString
};