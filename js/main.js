const checkbox = document.getElementById("checkbox")

checkbox.addEventListener("change", () => {
    changeTheme();
})

function changeTheme(){
    document.body.classList.toggle("dark");
    document.querySelector(".todo")?.classList.toggle("dark-todo");
}

function addTask(taskName){
    const template = document.getElementById("task");
    const taskToAdd = template.content.cloneNode(true);
    const taskLi = taskToAdd.querySelector("li");

    taskLi.innerText= taskName;

    const taskList = document.querySelector(".todo-list");
    taskList.appendChild(taskToAdd);
}

const addTaskButton = document.querySelector(".todo-btn");

addTaskButton.addEventListener("click", (e) => {
    e.preventDefault();
    const textInput = document.querySelector("form input");
    addTask(textInput.value);
})