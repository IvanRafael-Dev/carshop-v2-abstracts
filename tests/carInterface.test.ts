import { testVehicleInterface } from './utils/vehicleImplementation';

import { Car } from '../src/interfaces/CarInterface';

describe('Crie a Interface Car a partir da Interface Vehicle', () => {
  const testCar: Car = {
    model: 'Fiat Uno',
    year: 2002,
    color: 'White',
    status: true,
    buyValue: 10000,
    seatsQty: 5,
    doorsQty: 2,
  };

  it('A interface Car estende a Interface Vehicle', () => {
    expect(testVehicleInterface(testCar)).toBe(true);
  });

  it('A interface possui as propriedades doorsQty e seatsQty', () => {
    expect(testCar.doorsQty).toBeDefined();
    expect(testCar.seatsQty).toBeDefined();
  });
});
