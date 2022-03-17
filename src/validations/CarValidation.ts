import { z } from 'zod';
import VehicleSchema from './VehicleValidation';

const CarSchema = VehicleSchema.extend({
  seatsQty: z.number().gte(2, {
    message: 'car must have at leat 2 seats',
  }).lte(7),
  doorsQty: z.number().gte(2, {
    message: 'car must have at leat 2 doors',
  }).lte(4, {
    message: 'car must not have more than 4 doors',
  }),
});

export default CarSchema;
