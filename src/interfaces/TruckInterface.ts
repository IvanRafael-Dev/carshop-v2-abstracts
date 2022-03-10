import { z } from 'zod';
import TruckSchema from '../validations/TruckValidation';

export type Truck = z.infer<typeof TruckSchema>;
