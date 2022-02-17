import { Vehicle } from '../interfaces/VehicleInteface';
import  from '';

class LensService extends Vehicle<Lens> {
  constructor(model = new LensModel()) {
    super(model);
  }

  public async create(obj: Lens): Promise<Lens | null> {
    if (obj) {
      return this.model.create(obj);
    }
    return null;
  }
}

export default LensService;