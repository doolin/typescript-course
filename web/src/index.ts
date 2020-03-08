import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const user = User.buildUser({
  name: 'Name',
  age: 20
});

const root = document.getElementById('root');
if (root) {
  console.log(root);
  const userEdit = new UserEdit(root, user);
  console.log(userEdit);
  userEdit.render();

  console.log(userEdit);
} else {
  throw new Error('Root element not found');
}

