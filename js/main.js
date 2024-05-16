const checkbox = document.getElementById("checkbox")

checkbox.addEventListener("change", () => {
    changeTheme();
})

function changeTheme(){
    document.body.classList.toggle("dark");
    document.querySelector(".todo")?.classList.toggle("dark-todo");
}

