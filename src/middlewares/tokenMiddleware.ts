import { Request, Response, NextFunction } from 'express';
import auth from '../utils/auth';

const tokenValidation = (req: Request, res: Response, next: NextFunction) => {
  const { headers: { authorization: token } } = req;
  if (!token) return res.status(401).json({ message: 'Token not found' });
  try {
    auth.verifyToken(token);
  } catch (error) {
    return res.status(401).json({ message: 'Invalid Token' });
  }
  next();
};

export default {
  tokenValidation,
};