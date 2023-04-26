import { Response, Request, NextFunction } from 'express';

const requiredFieldsValidation = async (req: Request, res: Response, next: NextFunction) => {
  const { body: { username, vocation, level, password } } = req;
  if (!username) return res.status(400).json({ message: '"username" is required' });
  if (!vocation) return res.status(400).json({ message: '"vocation" is required' });
  if (!password) return res.status(400).json({ message: '"password" is required' });
  if (level === undefined) return res.status(400).json({ message: '"level" is required' });
  next();
};

const fieldsTypeValidation = async (req: Request, res: Response, next: NextFunction) => {
  const { body: { username, vocation, level, password } } = req;
  if (typeof username !== 'string') {
    return res.status(422).json({ message: '"username" must be a string' });
  }
  if (typeof vocation !== 'string') {
    return res.status(422).json({ message: '"vocation" must be a string' });
  }
  if (typeof level !== 'number') {
    return res.status(422).json({ message: '"level" must be a number' });
  }
  if (typeof password !== 'string') {
    return res.status(422).json({ message: '"password" must be a string' });
  }
  next();
};

const fieldsSizeValidation = async (req: Request, res: Response, next: NextFunction) => {
  const { body: { username, vocation, level, password } } = req;
  if (username.length < 3) {
    return res.status(422).json({ 
      message: '"username" length must be at least 3 characters long' });
  }
  if (vocation.length < 3) {
    return res.status(422).json({
      message: '"vocation" length must be at least 3 characters long' });
  }
  if (level < 1) {
    return res.status(422).json({
      message: '"level" must be greater than or equal to 1' });
  }
  if (password.length < 8) {
    return res.status(422).json({
      message: '"password" length must be at least 8 characters long' });
  }
  next();
};

export default {
  requiredFieldsValidation,
  fieldsTypeValidation,
  fieldsSizeValidation,
};
