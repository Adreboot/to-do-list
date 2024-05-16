const checkbox = document.getElementById("checkbox")

checkbox.addEventListener("change", () => {
    changeTheme();
})

const addTaskButton = document.querySelector(".todo-btn");

addTaskButton.addEventListener("click", (e) => {
    e.preventDefault();
    const textInput = document.querySelector("form input");
    addTask(textInput.value);
})

const todoList = document.querySelector(".todo-list");

todoList.addEventListener('click', (e) => removeOrCheckTask(e));

function changeTheme(){
    document.body.classList.toggle("dark");
    document.querySelectorAll(".todo")?.forEach(element => element.classList.toggle("dark-todo"));
}

function addTask(taskName){
    const template = document.getElementById("task");
    const taskToAdd = template.content.cloneNode(true);
    const taskLi = taskToAdd.querySelector("li");

    taskLi.innerText= taskName;

    const taskDiv = taskToAdd.querySelector("div");

    if(document.body.classList.contains("dark")){
        taskDiv.classList.add("dark-todo");
    }

    const taskList = document.querySelector(".todo-list");
    taskList.appendChild(taskToAdd);
}

function removeOrCheckTask(event){
    const item = event.target;

    if(item.classList[0] === ("delete-btn")){
        item.parentElement.remove();

    }else if (item.classList[0] === ("check-btn")){
        item.parentElement.classList.toggle("completed");
    }
}