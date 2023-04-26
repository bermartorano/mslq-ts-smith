import { Router } from 'express';
import loginController from '../controllers/login.controller';
import md from '../middlewares/loginMiddlewares';

const loginRouter = Router();
loginRouter.post('/login', md.usernameAndPasswordFields, loginController.userLogin);

export default loginRouter;