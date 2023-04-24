import ICar from '../../src/Interfaces/ICar';

export const validCarMock: ICar = {
  model: 'Uno da Escada',
  year: 1960,
  color: 'Red',
  buyValue: 1500,
  doorsQty: 2,
  seatsQty: 2,
};

export const validCarMockWithId: ICar = {
  id: 'any_id',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

export const validCarsMockWithId: ICar [] = [
  {
    id: 'any_id',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: 'any_id_2',
    model: 'Kadett',
    year: 1993,
    color: 'Black',
    status: true,
    buyValue: 10.990,
    doorsQty: 4,
    seatsQty: 5,
  },
];