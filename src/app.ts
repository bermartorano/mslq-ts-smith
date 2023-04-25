import express from 'express';
import productsRouter from './routes/products.router';
import usersRouter from './routes/users.router';

const app = express();

app.use(express.json());
app.use(productsRouter);
app.use(usersRouter);

export default app;
