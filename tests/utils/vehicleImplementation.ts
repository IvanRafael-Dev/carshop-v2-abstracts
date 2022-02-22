import { Vehicle } from '../../src/interfaces/VehicleInteface';

export const testVehicleInterface = (obj: Vehicle): boolean =>
  typeof obj.model === 'string';

export default { testVehicleInterface };
