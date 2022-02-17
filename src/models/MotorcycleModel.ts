import { Schema, model as createModel, Document } from 'mongoose';

import { Motorcycle } from '../interfaces/MotorcycleInterface';

import MongoModel from './MongoModel';

interface MotorcycleDocument extends Motorcycle, Document {}
const motorcycleSchema = new Schema<MotorcycleDocument>({
  category: String,
  engineCapacity: Number,
});

class MotorcycleModel extends MongoModel<Motorcycle> {
  constructor(model = createModel('vehicle', motorcycleSchema)) {
    super(model);
  }
}

export default MotorcycleModel;
