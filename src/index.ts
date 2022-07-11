import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const rootEl = document.getElementById('root');

if (rootEl) {
  const userEdit = new UserEdit(
    rootEl,
    User.buildUser({ name: 'Tomek', age: 20 })
  );
  userEdit.render();
  console.log(userEdit);
} else {
  throw new Error('Root element not found');
}
