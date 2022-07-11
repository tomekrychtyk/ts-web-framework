import { UserForm } from './views/UserForm';
import { User } from './models/User';

const rootEl = document.getElementById('root');

if (rootEl) {
  const userForm = new UserForm(rootEl, User.buildUser({ name: 'Tomek', age: 20 }));
  userForm.render();
} else {
  throw new Error('Root element not found');
}