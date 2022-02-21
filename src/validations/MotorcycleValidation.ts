import { z } from 'zod';
import VehicleSchema from './VehicleValidation';

const MotorcycleSchema = VehicleSchema.extend({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().gt(0, {
    message: 'Engine capacity cannot be less than or equal to zero',
  }).lte(2500, {
    message: 'Engine capacity cannot be bigger than 2500',
  }),
});

export default MotorcycleSchema;
