import { Router } from 'express';
import loginController from '../controllers/login.controller';
import userMiddlewares from '../middlewares/userMiddlewares';

const loginRouter = Router();
loginRouter.post('/login', userMiddlewares.usernameAndPasswordFields, loginController.userLogin);

export default loginRouter;