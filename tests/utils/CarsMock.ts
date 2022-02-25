import { Types } from 'mongoose';

export const validCar = {
  _id: new Types.ObjectId(),
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  status: true,
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2
};

export const noModelCar = {
  year: 1963,
  color: 'red',
  status: true,
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2
};

export const noYearCar = {
  model: 'Uno da Escada',
  color: 'red',
  status: true,
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2
}

export const noColorCar = {
  model: 'Uno da Escada',
  year: 1963,
  status: true,
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2
}

export const noStatusCar = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2
}

export const noBuyValueCar = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  status: true,
  seatsQty: 2,
  doorsQty: 2
}

export const noSeatsCar = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  status: true,
  buyValue: 3500,
  doorsQty: 2
}

export const noDoorsCar = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  status: true,
  buyValue: 3500,
  seatsQty: 2,
}

export const carSeatsLtTwo = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  status: true,
  buyValue: 3500,
  seatsQty: 1,
  doorsQty: 2
}

export const carDoorsLtTwo = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  status: true,
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 1
}