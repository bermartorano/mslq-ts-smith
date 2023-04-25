import loginModel from '../models/login.model';
import { UserToLogin } from '../types';
import auth from '../utils/auth';

const userLogin = async (user: UserToLogin) => {
  const [userSearch] = await loginModel.userLogin(user);
  if (!userSearch) return { statusCode: 401, info: { message: 'Username or password invalid' } };
  const token = auth.createToken({ username: user.username, id: userSearch.id });
  return { statusCode: 200, info: { token } };
};

export default {
  userLogin,
};