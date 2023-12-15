class ToDoService {
    baseUrl = "http://localhost:8083/api/todos"

    async getAllTodos() {
        let response = await fetch(this.baseUrl)
        let todos = await response.json()
        return todos
    }

    async userIdData() {
        let response = await fetch(this.baseUrl);
        let userId = await response.json()

        return userId;
    }

    async getTodosByUserId(userid) {
        let response = await fetch(this.baseUrl + "/byuser/" + userid)
        let todos = await response.json()
        return todos
    }
}