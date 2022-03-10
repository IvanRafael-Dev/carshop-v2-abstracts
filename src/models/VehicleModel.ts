import { Schema, model as createModel, Document } from 'mongoose';

import { Vehicle } from '../interfaces/VehicleInteface';

import MongoModel from './MongoModel';

interface VehicleDocument extends Vehicle, Document {}
export const vehicleSchema = new Schema<VehicleDocument>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
}, { versionKey: false });

class VehicleModel extends MongoModel<Vehicle> {
  constructor(model = createModel('vehicle', vehicleSchema)) {
    super(model);
  }
}

export default VehicleModel;
