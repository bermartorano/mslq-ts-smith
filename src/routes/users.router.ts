import { Router } from 'express';
import usersController from '../controllers/users.controller';
import md from '../middlewares/usersMiddlewares';

const usersRouter = Router();
usersRouter.post(
  '/users',
  md.requiredFieldsValidation,
  md.fieldsTypeValidation,
  md.fieldsSizeValidation,
  usersController.postUser,
);

export default usersRouter;