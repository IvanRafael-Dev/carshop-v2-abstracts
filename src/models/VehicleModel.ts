import { Schema, model as createModel, Document } from 'mongoose';

import { Vehicle } from '../interfaces/VehicleInteface';

import MongoModel from './MongoModel';

interface VehicleDocument extends Vehicle, Document {}
const vehicleSchema = new Schema<VehicleDocument>({
  type: String,
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyDate: Date,
  buyValue: Number,
});

class VehicleModel extends MongoModel {
  constructor(model = createModel('veiculos', vehicleSchema)) {
    super(model);
  }
}

export default VehicleModel;
