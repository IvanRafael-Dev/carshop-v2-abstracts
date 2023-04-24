import { Schema } from 'mongoose';
import AbstractODM from './AbstractODM';
import IMotorcycle from '../Interfaces/IMotorcycle';

const motorcycleSchema = new Schema<IMotorcycle>({
  model: { type: String, required: true },
  year: { type: Number, required: true },
  color: { type: String, required: true },
  status: { type: Boolean, required: false },
  buyValue: { type: Number, required: true },
  category: { type: String,
    required: true,
    enum: ['Street', 'Custom', 'Trail'],
  },
  engineCapacity: { type: Number, required: true },
});

export default class MotorcycleODM extends AbstractODM<IMotorcycle> {
  constructor() {
    super('Motorcycle', motorcycleSchema);
  }
}