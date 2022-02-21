import Service from './index';
import { Truck } from '../interfaces/TruckInterface';
import TruckModel from '../models/TruckModel';

class TruckService extends Service<Truck> {
  constructor(model = new TruckModel()) {
    super(model);
  }

  public async create(obj: Truck): Promise<Truck | null> {
    if (obj) {
      return this.model.create(obj);
    }
    return null;
  }
}

export default TruckService;