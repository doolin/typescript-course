import axios from 'axios';

axios.post('http://localhost:3000/users', {
  name: 'name',
  age: '99'
});

axios.post('http://localhost:3000/users/1');