import { User } from './models/User';

const user = new User({ id: 1 })

const on = user.on; // returns reference to `on` from Eventing class

on('change', () => {
  console.log('user changed');
});

user.on('change', () => {
  console.log('directly from user');
});