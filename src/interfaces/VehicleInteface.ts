import { z } from 'zod';
import VehicleSchema from '../validations/VehicleValidation';

export type Vehicle = z.infer<typeof VehicleSchema>;
