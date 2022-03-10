import mongoose, { Schema, model as createModel, Document } from 'mongoose';

import { Motorcycle } from '../interfaces/MotorcycleInterface';
import { vehicleSchema } from './VehicleModel';

import MongoModel from './MongoModel';

interface MotorcycleDocument extends Motorcycle, Document {}

const motorcycleSchema = new Schema<MotorcycleDocument>({
  ...vehicleSchema.obj,
  category: String,
  engineCapacity: Number,
}, { versionKey: false });

class MotorcycleModel extends MongoModel<Motorcycle> {
  constructor(model = createModel('motorcycles', motorcycleSchema)) {
    super(model);
  }
}

export const Motorcycles = mongoose.model('motorcycles', motorcycleSchema);

export default MotorcycleModel;
