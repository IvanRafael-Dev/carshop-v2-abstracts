import { Model as M, Document } from 'mongoose';
import { Model } from '../interfaces/ModelInterface';
// import { Vehicle } from '../interfaces/VehicleInteface';

class MongoModel<T> implements Model<T> {
  constructor(protected model: M<T & Document>) {}

  create = async (obj: T):
  Promise<T> => this.model.create({ ...obj });

  read = async (): Promise<T[]> => this.model.find();

  async readOne(id_: string): Promise<T | null> {
    return this.model.findOne({ _id: id_ });
  }

  async update(id_: string, obj: T): Promise<T | null> {
    return this.model.findOneAndUpdate({ _id: id_ }, { ...obj });
  }

  async delete(id_: string): Promise<T | null> {
    return this.model.findOneAndDelete({ _id: id_ });
  }
}

export default MongoModel;
