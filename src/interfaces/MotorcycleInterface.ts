import { z } from 'zod';
import MotorcycleSchema from '../validations/MotorcycleValidation';

export type Motorcycle = z.infer<typeof MotorcycleSchema>;
