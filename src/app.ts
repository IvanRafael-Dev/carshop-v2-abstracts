import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';

const app = express();
app.use(express.json());
app.use(ErrorHandler.execute);

export default app;
