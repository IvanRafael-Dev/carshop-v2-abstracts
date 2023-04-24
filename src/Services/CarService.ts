import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import AbstractService from './AbstractService';

export default class CarService extends AbstractService<ICar, typeof Car> {
  constructor(model: CarODM) {
    super(model, Car, 'Car');
  }
}
