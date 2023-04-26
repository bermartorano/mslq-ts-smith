import { Request, Response, NextFunction } from 'express';

const usernameAndPasswordFields = async (req: Request, res: Response, next: NextFunction) => {
  const { body: { username, password } } = req;
  if (!password) return res.status(400).json({ message: '"password" is required' });
  if (!username) return res.status(400).json({ message: '"username" is required' });
  next();
};

export default {
  usernameAndPasswordFields,
};
