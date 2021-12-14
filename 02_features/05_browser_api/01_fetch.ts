// Using fetch()

const todo = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .catch(error => console.error(error.message));

console.log('TODO from jsonplaceholder', todo);
