import { z } from 'zod';

const VehicleSchema = z.object({
  model: z.string().min(3, {
    message: 'model must be longer than 3 characters',
  }).nonempty('model is required'),
  year: z.number(),
  color: z.string().min(3, {
    message: 'color must be longer than 3 characters',
  }).nonempty('color is required'),
  status: z.boolean(),
  buyDate: z.date(),
  buyValue: z.number(),
  type: z.string(),
});

export default VehicleSchema;
