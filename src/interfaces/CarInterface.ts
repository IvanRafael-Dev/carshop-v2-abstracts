import { z } from 'zod';
import CarSchema from '../validations/CarValidation';

export type Car = z.infer<typeof CarSchema>;
