import { ErrorRequestHandler } from 'express';

const errorMiddleware: ErrorRequestHandler = (err, req, res, _next) => {
  const { message, cause } = err;
  return res.status(cause.statusCode).json({ message });
};

export default errorMiddleware;