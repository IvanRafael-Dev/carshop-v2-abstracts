import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';
import MotorcycleService from '../Services/MotorcycleService';
import MotorcycleODM from '../Models/MotorcycleODM';

const router = Router();

const motorcycleODM = new MotorcycleODM();
const motorcycleService = new MotorcycleService(motorcycleODM);
const motorcycleController = new MotorcycleController(motorcycleService);

router
  .get('/motorcycles', (req, res, next) => motorcycleController.getAll(req, res, next))
  .get('/motorcycles/:id', (req, res, next) => motorcycleController.getById(req, res, next))
  .put('/motorcycles/:id', (req, res, next) => motorcycleController.update(req, res, next))
  .post('/motorcycles', (req, res, next) => motorcycleController.create(req, res, next));
export default router;