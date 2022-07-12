import { UserList } from './views/UserList';
import { User, UserProps } from './models/User';
import { Collection } from './models/Collection';

const rootEl = document.getElementById('root');

if (rootEl) {
  const users = new Collection(
    'http://localhost:3000/users',
    (json: UserProps) => {
      return User.buildUser(json);
    }
  );
  users.fetch();
  users.on('change', () => {
    new UserList(rootEl, users).render();
  });
} else {
  throw new Error('Root element not found');
}
