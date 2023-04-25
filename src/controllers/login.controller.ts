import { Response, Request } from 'express';
import loginService from '../services/login.service';

const userLogin = async (req: Request, res: Response) => {
  const { body } = req;
  const { statusCode, info } = await loginService.userLogin(body);
  return res.status(statusCode).json(info);
};

export default {
  userLogin,
};
