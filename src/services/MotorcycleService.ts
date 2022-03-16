import Service from './index';
import { Motorcycle } from '../interfaces/MotorcycleInterface';
import MotorcycleModel from '../models/MotorcycleModel';

const categoryError = 'Category must be "Street", "Custom" or "Trail"';

class MotorcycleService extends Service<Motorcycle> {
  constructor(model = new MotorcycleModel()) {
    super(model);
  }

  public async create(obj: Motorcycle): Promise<Motorcycle | null> {
    const { category } = obj;
    if (
      category !== 'Street'
      && category !== 'Custom'
      && category !== 'Trail'
    ) {
      throw new Error(categoryError);
    }
    if (obj) {
      return this.model.create(obj);
    }
    return null;
  }
}

export default MotorcycleService;