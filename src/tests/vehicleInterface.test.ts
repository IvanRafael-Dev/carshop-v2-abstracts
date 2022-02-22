/* eslint-disable max-lines-per-function */
/* eslint-disable mocha/no-mocha-arrows */
import { Vehicle } from '../interfaces/VehicleInteface';
import { testVehicleInterface } from './utils/vehicleImplementation';

describe('Crie a Interface Vehicle', () => {
  const testVehicle: Vehicle = {
    model: 'Fiat Uno',
    year: 2002,
    color: 'White',
    status: true,
    buyValue: 10000,
  };

  it('Existe a Interface Vehicle', () => {
    expect(testVehicleInterface(testVehicle)).toBe(true);
  });

  it('Todos os atributos podem ser lidos', () => {
    expect(testVehicle.model).toBeTruthy();
    expect(testVehicle.year).toBeTruthy();
    expect(testVehicle.color).toBeTruthy();
    expect(testVehicle.status).toBeTruthy();
    expect(testVehicle.buyValue).toBeTruthy();
  });

  it('Todos os atributos possuem tipagem correta', () => {
    expect(typeof testVehicle.model === 'string').toBe(true);
    expect(typeof testVehicle.year === 'number').toBe(true);
    expect(typeof testVehicle.color === 'string').toBe(true);
    expect(typeof testVehicle.status === 'boolean').toBe(true);
    expect(typeof testVehicle.buyValue === 'number').toBe(true);
  });

  it('A quantidade de atributos é a solicitada', () => {
    expect(Object.keys(testVehicle).length).toBe(5);
  });
});
