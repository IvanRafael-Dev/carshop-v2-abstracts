import { Types } from 'mongoose';

export const motorcyclesListMock = [
  {
    _id: new Types.ObjectId(),
    model: 'Honda CG 125',
    year: 2010,
    color: 'red',
    status: true,
    buyValue: 5000,
    category: 'Street',
    engineCapacity: 125
  },
  {
    _id: new Types.ObjectId(),
    model: 'Honda Twister',
    year: 2012,
    color: 'yellow',
    status: true,
    buyValue: 10000,
    category: 'Street',
    engineCapacity: 250
  }
];
