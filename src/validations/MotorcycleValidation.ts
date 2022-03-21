import { z } from 'zod';
import VehicleSchema from './VehicleValidation';

const validCategories = ['Street', 'Custom', 'Trail'];

const MotorcycleSchema = VehicleSchema.extend({
  // .refine found here => https://github.com/colinhacks/zod#refine
  category: z.string().refine((value) => validCategories.includes(value), {
    message: 'Category must be "Street", "Custom" or "Trail"',
  }),
  engineCapacity: z.number().gt(0, {
    message: 'Engine capacity cannot be less than or equal to zero',
  }).lte(2500, {
    message: 'Engine capacity cannot be bigger than 2500',
  }),
});

export default MotorcycleSchema;
