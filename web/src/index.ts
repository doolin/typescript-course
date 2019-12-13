import { User } from './models/User';

const user = new User({ id: 1 })

// user.fetch();

// setTimeout(() => {
//  console.log(user);
// }, 4000)

user.set({ name: 'New Name', age: 43 });
user.save();

const user2 = new User({ name: "foobar", age: 0 })
user2.save();

user2.events.on('change', () => {
  console.log('changed');
});

user2.events.trigger('change');