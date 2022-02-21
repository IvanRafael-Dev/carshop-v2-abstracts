import { Schema, model as createModel, Document } from 'mongoose';

import { Car } from '../interfaces/CarInterface';
import { vehicleSchema } from './VehicleModel';

import MongoModel from './MongoModel';

interface CarDocument extends Car, Document {}

const carSchema = new Schema<CarDocument>({
  ...vehicleSchema.obj,
  seatsQty: Number,
  doorsQty: Number,  
}, { versionKey: false });
class CarModel extends MongoModel<Car> {
  constructor(model = createModel('car', carSchema)) {
    super(model);
  }
}

export default CarModel;
