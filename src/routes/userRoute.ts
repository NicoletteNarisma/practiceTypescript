import { Router } from 'express';
import { UserController } from '../controllers/userController';

const route = Router();
const user = new UserController();

route.get('/user', user.browse);
// route.get('/:id', user.read);
// route.patch('/:id', user.edit);
// route.post('/', user.add);
// route.delete('/:id', user.delete);

export { route as user };
