class ToDoService {
    baseUrl = "http://localhost:8083/api/todos"

    async getAllTodos() {
        let response = await fetch(this.baseUrl)
        let todos = await response.json()
        return todos
    }
}