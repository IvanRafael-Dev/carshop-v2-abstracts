import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import carRoutes from './Routes/carRouter';
import motorcycleRoutes from './Routes/motorcycleRouter';

const app = express();
app.use(express.json());
app.use(carRoutes);
app.use(motorcycleRoutes);
app.use(ErrorHandler.execute);

export default app;
