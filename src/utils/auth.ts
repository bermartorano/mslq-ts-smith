import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET;

const createToken = (userId: string) => {
  const token = jwt.sign(userId, secretKey as string);
  return token;
};

export default {
  createToken,
};