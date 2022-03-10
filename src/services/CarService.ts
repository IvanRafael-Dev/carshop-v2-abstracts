import Service from './index';
import { Car } from '../interfaces/CarInterface';
import CarModel from '../models/CarModel';

class CarService extends Service<Car> {
  constructor(model = new CarModel()) {
    super(model);
  }

  public async create(obj: Car): Promise<Car | null> {
    if (obj) {
      return this.model.create(obj);
    }
    return null;
  }
}

export default CarService;