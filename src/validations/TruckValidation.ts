import { z } from 'zod';
import VehicleSchema from './VehicleValidation';

const TruckSchema = VehicleSchema.extend({
  axlesQty: z.number().gte(2, {
    message: 'Truck cannot have less than 2 axles',
  }).lte(5, {
    message: 'Truck cannot have more than 5 axles',
  }),
  category: z.enum(['Urbano', 'Semi-Pesado', 'Pesado']),
});

export default TruckSchema;
