import { z } from 'zod';
import VehicleSchema from './VehicleValidation';

const TruckSchema = VehicleSchema.extend({
  axisQty: z.number(),
  category: z.string(),
});

export default TruckSchema;
