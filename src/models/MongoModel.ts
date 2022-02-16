import { Model as M, Document } from 'mongoose';
import { Model } from '../interfaces/ModelInterface';
import { Vehicle } from '../interfaces/VehicleInteface';

class MongoModel implements Model<Vehicle> {
  constructor(protected model: M<Vehicle & Document>) {}

  create = async (obj: Vehicle):
  Promise<Vehicle> => this.model.create({ ...obj });

  read = async (): Promise<Vehicle[]> => this.model.find();

  async readOne(id_: string): Promise<Vehicle | null> {
    return this.model.findOne({ _id: id_ });
  }

  async update(id_: string, obj: Vehicle): Promise<Vehicle | null> {
    return this.model.findOneAndUpdate({ _id: id_ }, { ...obj });
  }

  async delete(id_: string): Promise<Vehicle | null> {
    return this.model.findOneAndDelete({ _id: id_ });
  }
}

export default MongoModel;
