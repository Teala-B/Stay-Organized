let todoService

document.addEventListener("DOMContentLoaded", () => {
    todoService = new ToDoService();

    loadTodos();
})

function loadTodos() {
    todoService.getAllTodos()
                .then(todos => {
                    displayRows(todos)
                })
}

function displayRows(todos) {
    
}