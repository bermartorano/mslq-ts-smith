import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET;

const createToken = (user: { id: number, username: string }) => {
  const token = jwt.sign(user, secretKey as string);
  return token;
};

const decodeToken = (token: string): { username: string, id: number, iat: number } => {
  const decodedToken = jwt.decode(token);
  return decodedToken as { username: string, id: number, iat: number };
};

const verifyToken = (token:string) => {
  const isTokenValid = jwt.verify(token, secretKey as string);
  return isTokenValid;
};

export default {
  createToken,
  decodeToken,
  verifyToken,
};