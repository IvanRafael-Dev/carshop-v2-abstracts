import { z } from 'zod';
import VehicleSchema from './VehicleValidation';

const validCategories = ['Street', 'Custom', 'Trail'] as const;

const MotorcycleSchema = VehicleSchema.extend({
  category: z.enum(validCategories),
  // .refine found here => https://github.com/colinhacks/zod#refine
  // category: z.string().refine(
  //   (value) => validCategories.includes(value),
  //   (category) => ({
  //     message: `${category} must be "Street", "Custom" or "Trail"`,
  //   }),
  // ),
  engineCapacity: z.number().gt(0, {
    message: 'Engine capacity cannot be less than or equal to zero',
  }).lte(2500, {
    message: 'Engine capacity cannot be bigger than 2500',
  }),
});

export default MotorcycleSchema;
