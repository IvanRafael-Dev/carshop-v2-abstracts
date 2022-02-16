import { z } from 'zod';
import VehicleSchema from './VehicleValidation';

const CarSchema = VehicleSchema.extend({
  seatsQty: z.number(),
  doorsQty: z.number(),
});

export default CarSchema;
