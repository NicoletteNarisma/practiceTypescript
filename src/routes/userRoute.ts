import { Router } from 'express';
import { UserController } from '../controllers/userController';

const route = Router();
const user = new UserController();

route.get('/user',user.browse);
//route.patch('/user',user.edit);
//route.post('/user',user.add);
//route.delete('/user',user.delete);

export { route as user };