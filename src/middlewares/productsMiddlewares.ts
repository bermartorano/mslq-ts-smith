import { Response, Request, NextFunction } from 'express';

const nameAndAmountFields = async (req: Request, res: Response, next: NextFunction) => {
  const { body: { name, amount } } = req;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  if (!amount) return res.status(400).json({ message: '"amount" is required' });
  next();
};

const nameAndAmountString = async (req: Request, res: Response, next: NextFunction) => {
  const { body: { name, amount } } = req;
  if (typeof name !== 'string') return res.status(422).json({ message: '"name" must be a string' });
  if (typeof amount !== 'string') {
    return res.status(422).json({ message: '"amount" must be a string' });
  }
  next();
};

const nameAndAmountSize = async (req: Request, res: Response, next: NextFunction) => {
  const { body: { name, amount } } = req;
  if (name.length < 3) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }
  if (amount.length < 3) {
    return res.status(422).json({ message: '"amount" length must be at least 3 characters long' });
  }
  next();
};

export default {
  nameAndAmountFields,
  nameAndAmountString,
  nameAndAmountSize,
};
