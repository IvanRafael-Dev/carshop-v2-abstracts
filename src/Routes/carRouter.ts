import { Router } from 'express';
import CarController from '../Controllers/CarController';
import CarODM from '../Models/CarODM';
import CarService from '../Services/CarService';

const carModel = new CarODM();
const carService = new CarService(carModel);
const carController = new CarController(carService);

const router = Router();

router
  .get('/cars', (req, res, next) => carController.getAll(req, res, next))
  .get('/cars/:id', (req, res, next) => carController.getById(req, res, next))
  .put('/cars/:id', (req, res, next) => carController.update(req, res, next))
  .post('/cars', (req, res, next) => carController.create(req, res, next));
export default router;