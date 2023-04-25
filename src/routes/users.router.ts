import { Router } from 'express';
import usersController from '../controllers/users.controller';

const usersRouter = Router();
usersRouter.post('/users', usersController.postUser);

export default usersRouter;