// console.log("Hi there!");
import { User } from './models/User';

const user = new User({ name: 'foo', age: 20 });

user.set({ name: 'foobarski' });
user.set({ age: 21 });

console.log(user.get('name'));
console.log(user.get('age'));
