import Service from './index';
import { Motorcycle } from '../interfaces/MotorcycleInterface';
import MotorcycleModel from '../models/MotorcycleModel';

class MotorcycleService extends Service<Motorcycle> {
  constructor(model = new MotorcycleModel()) {
    super(model);
  }

  public async create(obj: Motorcycle): Promise<Motorcycle | null> {
    if (obj) {
      return this.model.create(obj);
    }
    return null;
  }
}

export default MotorcycleService;