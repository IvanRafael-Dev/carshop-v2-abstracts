import Service from './index';
import { Vehicle } from '../interfaces/VehicleInteface';
import VehicleModel from '../models/VehicleModel';

const yearValidation = (year: number): boolean => {
  if (year > 1950 && year < 2022) return true;
  return false;
};

const objIsValid = (obj: Vehicle): boolean => {
  if (obj) return true;
  return false;
};

const typeValidation = (type: string): boolean => {
  if (type === 'car' || type === 'truck' || type === 'motorcyle') return true;
  return false;
};

class VehicleService extends Service<Vehicle> {
  constructor(model = new VehicleModel()) {
    super(model);
  }

  public async create(obj: Vehicle): Promise<Vehicle | null> {
    if (!objIsValid) return null;
    if (!yearValidation) return null;
    if (!typeValidation) return null;
    return this.model.create(obj);
    // if (
    //   obj
    //   && (
    //     obj.type === 'car' || obj.type === 'motorcycle' || obj.type === 'truck'
    //   )
    // ) {
    //   return this.model.create(obj);
    // }
    // return null;
  }
}

export default VehicleService;