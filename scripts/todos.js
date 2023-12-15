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
        allTodos.forEach(displayRows)
    

}


function displayRows(todos) {
    
}