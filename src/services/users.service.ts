import usersModel from '../models/users.model';
import { User } from '../types';
import auth from '../utils/auth';

const postUser = async (user: User) => {
  const { insertId } = await usersModel.postUser(user);
  const newToken = auth.createToken(JSON.stringify(insertId));
  return newToken;
};

export default {
  postUser,
};
