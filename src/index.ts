import VehicleController from './controllers/VehicleController';
import { Vehicle } from './interfaces/VehicleInteface';
import CustomRouter from './routes/Router';
import App from './server';

const server = new App();

const vehicleController = new VehicleController();

const vehicleRouter = new CustomRouter<Vehicle>();
vehicleRouter.addRoute(vehicleController);

server.addRouter(vehicleRouter.router);

server.startServer();