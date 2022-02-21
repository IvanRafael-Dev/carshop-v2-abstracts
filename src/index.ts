import VehicleController from './controllers/VehicleController';
import CarController from './controllers/CarController';
import { Vehicle } from './interfaces/VehicleInteface';
import { Car } from './interfaces/CarInterface';
import CustomRouter from './routes/Router';
import App from './server';

const server = new App();

const vehicleController = new VehicleController();
const carController = new CarController();

const vehicleRouter = new CustomRouter<Vehicle>();
vehicleRouter.addRoute(vehicleController);

const carRouter = new CustomRouter<Car>();
carRouter.addRoute(carController);

server.addRouter(vehicleRouter.router);
server.addRouter(carRouter.router);

server.startServer();