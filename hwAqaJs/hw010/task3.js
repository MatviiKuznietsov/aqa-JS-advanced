const URL_TODO = 'https://jsonplaceholder.typicode.com/todos/'
const URL_USER = 'https://jsonplaceholder.typicode.com/users/'
const idTodo = 1
const idUser = 1


async function getTodos(url, idTodo) {
    try {
        const response = await fetch(url + idTodo)
        if (!response.ok) {
            throw new Error("Response fail")
        }
        const todo = await response.json()
        return todo
    } catch (error) {
        throw error
    }
}

async function getUsers(url, idUser) {
    try {
        const response = await fetch(url + idUser)
        if (!response.ok) {
            throw new Error("Response fail")
        }
        const user = await response.json()
        return user
    } catch (error) {
        throw error
    }
}

(async () => {
    try {
        await Promise
            .all([getTodos(URL_TODO, idTodo), getUsers(URL_USER, idUser)])
            .then(data => console.log(data))
    } catch (error) {
        console.error('Error:', error)
    }
})();

(async () => {
    try {
        await Promise
            .race([getTodos(URL_TODO, idTodo), getUsers(URL_USER, idUser)])
            .then(data => console.log(data))
    } catch (error) {
        console.error('Error:', error)
    }
})()


