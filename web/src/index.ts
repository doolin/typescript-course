// console.log("Hi there!");
import { User } from './models/User';

const user = new User({ name: 'foo', age: 20 });

console.log(user.get('name'));
console.log(user.get('age'));