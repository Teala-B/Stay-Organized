let todoService;
let userService;


document.addEventListener("DOMContentLoaded", () => {
    todoService = new ToDoService();
    userService = new UserService();

    //loadTodos();
    populateUserName();

    let selectUser = document.getElementById("userName");
    selectUser.onchange = filterTodos;

    
})

// function loadTodos() {
//     todoService.getAllTodos()
//                 .then(todos => {
//                     filterTodos(todos)
//                 })
// }



async function populateUserName(){
    usersSelect = document.getElementById("userName");

    let users = await userService.getAllUsers();

    users.forEach(user => {
        let option = new Option(user.name, user.id);

        usersSelect.appendChild(option);
    })
}


async function filterTodos() {
    usersSelect = document.getElementById("userName");

    let selectedUserId = usersSelect.value;
    console.log(selectedUserId)

    let allTodos = await todoService.getTodosByUserId(selectedUserId);
    
        console.log(allTodos)
        allTodos.forEach(displayTodos)
    

}


function displayTodos(todo) {
    
    // clone template html instead of building the card by hand
    const card = todosTemplate.content.cloneNode(true)
  
    // set all values
    card.getElementById("category-value").innerText = todo.category
    card.getElementById("description-value").innerText = todo.description
    card.getElementById("deadline-value").innerText = todo.deadline
    card.getElementById("priority-value").innerText = todo.priority
    card.getElementById("completed-value").innerText = todo.completed.toString()

    todoContainer.appendChild(card)
}

function addNewClick() {
    location.href = "/new-todo.html"
}