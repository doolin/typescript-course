import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(response => {
  const todo = response.data;

  const ID = todo.Id;
  const title = todo.Title;
  const finished = todo.finished;

  console.log(`
    The TODO with ID: ${ID}
    Has a title of ${title}
    Is it finished? ${finished}
  `);
});
