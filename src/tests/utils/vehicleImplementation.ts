import { Vehicle } from '../../interfaces/VehicleInteface';

export const testVehicleInterface = (obj: Vehicle): boolean =>
  typeof obj.model === 'string';

export default { testVehicleInterface };
