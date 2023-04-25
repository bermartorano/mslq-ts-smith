import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET;

const createToken = (user: { id: number, username: string }) => {
  const token = jwt.sign(user, secretKey as string);
  return token;
};

export default {
  createToken,
};