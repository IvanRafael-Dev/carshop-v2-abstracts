import Service from './index';
import { Vehicle } from '../interfaces/VehicleInteface';
import VehicleModel from '../models/VehicleModel';

class VehicleService extends Service<Vehicle> {
  constructor(model = new VehicleModel()) {
    super(model);
  }

  yearValidation() {
    
  }

  public async create(obj: Vehicle): Promise<Vehicle | null> {
    if (
      obj
      && (
        obj.type === 'car' || obj.type === 'motorcycle' || obj.type === 'truck'
      )
    ) {
      return this.model.create(obj);
    }
    return null;
  }
}

export default VehicleService;