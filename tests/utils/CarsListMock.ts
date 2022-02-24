import { Types } from 'mongoose';

export const carsListMock = [
  {
    _id: new Types.ObjectId(),
    model: 'Uno da Escada',
    year: 1963,
    color: 'red',
    status: true,
    buyValue: 3500,
    seatsQty: 2,
    doorsQty: 2
  },
  {
    _id: new Types.ObjectId(),
    model: 'Ferrari F40',
    year: 1987,
    color: 'yellow',
    status: true,
    buyValue: 700000,
    seatsQty: 2,
    doorsQty: 2
  }
];
