import { z } from 'zod';

const VehicleSchema = z.object({
  model: z.string().min(3, {
    message: 'model must be longer than 3 characters',
  }).nonempty({ message: 'model is required' }),
  year: z.number().gte(1900).lte(2022),
  color: z.string().min(3, {
    message: 'color must be longer than 3 characters',
  }).nonempty({ message: 'color is required' }),
  status: z.boolean(),
  buyDate: z.string().transform((val) => new Date(val)),
  buyValue: z.number(),
  type: z.enum(['Car', 'Motorcycle', 'Truck']),
});

export default VehicleSchema;
