const URL_TODO = 'https://jsonplaceholder.typicode.com/todos/';
const URL_USER = 'https://jsonplaceholder.typicode.com/users/';
const idTodo = 1;
const idUser = 1;

class TodoService {
  constructor(url) {
    this.url = url;
  }

  async getTodo(id) {
    const response = await fetch(this.url + id);
    if (!response.ok) {
      throw new Error('Response fail');
    }
    return await response.json();
  }
}

class UserService {
  constructor(url) {
    this.url = url;
  }

  async getUser(id) {
    const response = await fetch(this.url + id);
    if (!response.ok) {
      throw new Error('Response fail');
    }
    return await response.json();
  }
}

(async () => {
  try {
    await Promise.all([new TodoService(URL_TODO)
      .getTodo(idTodo), new UserService(URL_USER).getUser(idUser)])
      .then((data) => console.log(data));
  } catch (error) {
    console.error('Error:', error);
  }
})();

(async () => {
  try {
    await Promise.race([new TodoService(URL_TODO)
      .getTodo(idTodo), new UserService(URL_USER).getUser(idUser)])
      .then((data) => console.log(data));
  } catch (error) {
    console.error('Error:', error);
  }
})();
