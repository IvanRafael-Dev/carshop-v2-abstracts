import CustomRouter from './routes/Router';
import App from './server';

import VehicleController from './controllers/VehicleController';
import CarController from './controllers/CarController';
import MotorcycleController from './controllers/MotorcycleController';
import TruckController from './controllers/TruckController';

import { Vehicle } from './interfaces/VehicleInteface';
import { Car } from './interfaces/CarInterface';
import { Motorcycle } from './interfaces/MotorcycleInterface';
import { Truck } from './interfaces/TruckInterface';

const server = new App();

const vehicleController = new VehicleController();
const carController = new CarController();
const motorcycleController = new MotorcycleController();
const truckController = new TruckController();

const vehicleRouter = new CustomRouter<Vehicle>();
vehicleRouter.addRoute(vehicleController);

const carRouter = new CustomRouter<Car>();
carRouter.addRoute(carController);

const motorcycleRouter = new CustomRouter<Motorcycle>();
motorcycleRouter.addRoute(motorcycleController);

const truckRouter = new CustomRouter<Truck>();
truckRouter.addRoute(truckController);

server.addRouter(vehicleRouter.router);
server.addRouter(carRouter.router);
server.addRouter(motorcycleRouter.router);
server.addRouter(truckRouter.router);

server.startServer();