import { Model } from '../interfaces/ModelInterface';

abstract class Service<Vehicle> {
  constructor(protected model: Model<Vehicle>) { }

  public async create(obj: Vehicle): Promise<Vehicle | null> {
    return this.model.create(obj);
  }

  public async read() {
    return this.model.read();
  }

  public async readOne(id: string) {
    return this.model.readOne(id);
  }

  public async update(id: string, obj: Vehicle): Promise<Vehicle | null> {
    return this.model.update(id, obj);
  }

  public async delete(id: string) {
    return this.model.delete(id);
  }
}

export default Service;
