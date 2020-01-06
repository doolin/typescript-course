import { User } from './models/User';

const user = new User({ name: 'new record', age: 0 })

// console.log(user.get('name'));

// Reminder on how 'this' works in Javascript

const colors {
  color: 'red',
  printColor () {
    console.log(this.color);
  }
};

colors.printColor();