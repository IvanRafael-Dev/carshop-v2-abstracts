import { Schema, model as createModel, Document } from 'mongoose';

import { Truck } from '../interfaces/TruckInterface';

import MongoModel from './MongoModel';

interface TruckDocument extends Truck, Document {}
const truckSchema = new Schema<TruckDocument>({
  axisQty: Number,
  category: String,
});

class TruckModel extends MongoModel<Truck> {
  constructor(model = createModel('vehicle', truckSchema)) {
    super(model);
  }
}

export default TruckModel;
