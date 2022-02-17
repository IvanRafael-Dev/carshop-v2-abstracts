import { z } from 'zod';

const TypeEnum = z.enum(['Car', 'Motorcycle', 'Truck']);

const VehicleSchema = z.object({
  model: z.string().min(3, {
    message: 'model must be longer than 3 characters',
  }).nonempty({ message: 'model is required' }),
  year: z.number(),
  color: z.string().min(3, {
    message: 'color must be longer than 3 characters',
  }).nonempty({ message: 'color is required' }),
  status: z.boolean(),
  buyDate: z.date(),
  buyValue: z.number(),
  type: z.string(TypeEnum).nonempty({
    message: 'type precisa ter os valores "Car", "Motorcycle" ou "Truck"',
  }),
});

export default VehicleSchema;
