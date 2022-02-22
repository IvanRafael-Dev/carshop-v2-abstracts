/* eslint-disable mocha/no-mocha-arrows */
import { testVehicleInterface } from './utils/vehicleImplementation';

import { Motorcycle } from '../src/interfaces/MotorcycleInterface';

describe('Crie a Interface Motorcycle a partir da Interface Vehicle', () => {
  const testMotorcycle: Motorcycle = {
    model: 'Yamaha NEO',
    year: 2022,
    color: 'Blue',
    status: true,
    buyValue: 9000,
    category: 'Street',
    engineCapacity: 125,
  };

  it('A interface Motorcycle estende a Interface Vehicle', () => {
    expect(testVehicleInterface(testMotorcycle)).toBe(true);
  });

  it('A interface possui as propriedades category e engineCapacity', () => {
    expect(testMotorcycle.category).toBeDefined();
    expect(testMotorcycle.engineCapacity).toBeDefined();
  });
});
