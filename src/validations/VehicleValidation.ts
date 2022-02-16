import { z } from 'zod';

const VehicleSchema = z.object({
  model: z.string(),
  year: z.number(),
  color: z.string(),
  status: z.boolean(),
  buyDate: z.date(),
  buyValue: z.number(),
  type: z.string(),
});

export default VehicleSchema;
