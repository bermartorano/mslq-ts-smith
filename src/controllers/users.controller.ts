import { Request, Response } from 'express';
import usersService from '../services/users.service';

const postUser = async (req: Request, res: Response) => {
  const { body: newUser } = req;
  const token = await usersService.postUser(newUser);
  return res.status(201).json({ token });
};

export default {
  postUser,
};