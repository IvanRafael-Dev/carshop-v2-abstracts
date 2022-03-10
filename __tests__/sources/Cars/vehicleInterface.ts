import { Car } from '../../../src/interfaces/CarInterface';
import { Vehicle } from '../../../src/interfaces/VehicleInteface';

const testVehicleInterface = (obj: Vehicle): boolean => true;

const testCar: Car = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  status: true,
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2
};

testVehicleInterface(testCar);
