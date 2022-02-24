import { testVehicleInterface } from './utils/vehicleImplementation';

import { Truck } from '../src/interfaces/TruckInterface';

describe('Crie a Interface Truck a partir da Interface Vehicle', () => {
  const testTruck: Truck = {
    model: 'Hyundai HR',
    year: 2022,
    color: 'White',
    status: true,
    buyValue: 135000,
    category: 'Urbano',
    axlesQty: 2,
  };

  it('A interface Truck estende a Interface Vehicle', () => {
    expect(testVehicleInterface(testTruck)).toBe(true);
  });

  it('A interface possui as propriedades category e axlesQty', () => {
    expect(testTruck.category).toBeDefined();
    expect(testTruck.axlesQty).toBeDefined();
  });
});
