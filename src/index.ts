import { User } from './models/User';

const user = new User({ id: 1, name: 'Grzesiek' });
user.set({ age: 33 })
user.on('save', () => {
  console.log(user);
});

user.save();