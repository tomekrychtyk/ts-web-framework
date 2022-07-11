import { User } from './models/User';

const user = new User({ name: 'Rafal', age: 48 });
user.on('change', () => console.log('user changed 2'))
user.set({ name: 'New name' })