import { Schema, Document } from 'mongoose';
import { Vehicle } from '../interfaces/VehicleInteface';

interface VehicleDocument extends Vehicle, Document {}

const vehicleSchema = new Schema<VehicleDocument>({
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
}, { versionKey: false });

export default vehicleSchema;
