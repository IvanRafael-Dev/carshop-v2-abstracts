import { z } from 'zod';
import VehicleSchema from './VehicleValidation';

const MotorcycleSchema = VehicleSchema.extend({
  category: z.string(),
  engineCapacity: z.number(),
});

export default MotorcycleSchema;
