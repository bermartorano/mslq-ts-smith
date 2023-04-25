import express from 'express';
import productsRouter from './routes/products.router';
import usersRouter from './routes/users.router';
import ordersRouter from './routes/orders.router';

const app = express();

app.use(express.json());
app.use(productsRouter);
app.use(usersRouter);
app.use(ordersRouter);

export default app;
