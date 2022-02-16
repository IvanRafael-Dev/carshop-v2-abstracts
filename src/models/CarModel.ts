import { Schema, model as createModel, Document } from 'mongoose';

import { Car } from '../interfaces/CarInterface';

import MongoModel from './MongoModel';

interface CarDocument extends Car, Document {}
const carSchema = new Schema<CarDocument>({
  seatsQty: Number,
  doorsQty: Number,
});

class CarModel extends MongoModel<Car> {
  constructor(model = createModel('veiculos', carSchema)) {
    super(model);
  }
}

export default CarModel;
