const URL_TODO = 'https://jsonplaceholder.typicode.com/todos/'
const URL_USER = 'https://jsonplaceholder.typicode.com/users/'
const idTodo = 1
const idUser = 1

function getTodo(url, idTodo) {
    return fetch(url + idTodo)
        .then(response => {
        if (!response.ok) {
            throw new Error("Response fail")
        }
        return response.json()
    })
}


function getUsers(url, idUser) {
    return fetch(url + idUser)
        .then(response => {
        if (!response.ok) {
            throw new Error('Response fail')
        }
        return response.json()
    })
}

const promise1 = getTodo(URL_TODO, idTodo)
const promise2 = getUsers(URL_USER, idUser)

Promise.all([promise1, promise2])
    .then(json => console.log(json))
    .catch(error => console.error('Error:', error))

Promise.race([promise1, promise2])
    .then(jsons => console.log(jsons))
    .catch(error => console.error('Error:', error))

