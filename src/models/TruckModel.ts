import { Schema, model as createModel, Document } from 'mongoose';

import { Truck } from '../interfaces/TruckInterface';
import { vehicleSchema } from './VehicleModel';

import MongoModel from './MongoModel';

interface TruckDocument extends Truck, Document {}
const truckSchema = new Schema<TruckDocument>({
  ...vehicleSchema.obj,
  axlesQty: Number,
  category: String,
}, { versionKey: false });

class TruckModel extends MongoModel<Truck> {
  constructor(model = createModel('truck', truckSchema)) {
    super(model);
  }
}

export default TruckModel;
