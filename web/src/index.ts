// console.log("Hi there!");
import { User } from './models/User';

const user = new User({ name: 'foo', age: 20 });

user.set({ name: 'foobarski' });
user.set({ age: 21 });

console.log(user.get('name'));
console.log(user.get('age'));

user.on('change', () => {
  console.log("change #1");
});
user.on('change', () => {
  console.log("change #2");
});
user.on('no-change', () => {
  console.log("no change");
});

console.log(user);
user.trigger('change');