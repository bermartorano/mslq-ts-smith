import { Request, Response, NextFunction } from 'express';

const productsIdValidation = (req: Request, res: Response, next: NextFunction) => {
  const { body: { productsIds } } = req;
  if (!productsIds) return res.status(400).json({ message: '"productsIds" is required' });
  if (!Array.isArray(productsIds)) {
    return res.status(422).json({ message: '"productsIds" must be an array' });
  }
  if (!productsIds.every((id) => typeof id === 'number')) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }
  if (productsIds.length === 0) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }
  next();
};

export default {
  productsIdValidation,
};
