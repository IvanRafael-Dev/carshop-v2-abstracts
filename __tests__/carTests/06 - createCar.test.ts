import mongoose from 'mongoose';
import request from 'supertest';
import { clearDatabase, closeDatabase } from '../utils/db';

import * as carMock from '../utils/CarsMock';

import server from '../../src/server';

const databaseName = 'CarShop';

const MONGO_URI = process.env.MONGO_URI
  || `mongodb://localhost:27017/${databaseName}`;

describe('6 - Crie um carro através de uma requisição POST para a rota /cars', () => {
  beforeAll(async () => {
    await mongoose.connect(MONGO_URI);
  });

  beforeEach(async () => {
    await clearDatabase();
  });

  afterAll(async () => {
    await closeDatabase();
  });

  it('Retorna erro 400 caso a requisição receba um objeto vazio', async () => {
    const res = await request(server.getApp())
      .post('/cars')
      .send({});
    expect(res.statusCode).toEqual(400);
  });

  it('Retorna erro 400 ao tentar criar um carro com quantidade de assentos inferior a 2', async () => {
    const res = await request(server.getApp())
      .post('/cars')
      .send(carMock.carSeatsLtTwo);
    expect(res.statusCode).toEqual(400);
  });

  it('Retorna erro 400 ao tentar criar um carro com quantidade de portas inferior a 2', async () => {
    const res = await request(server.getApp())
      .post('/cars')
      .send(carMock.carDoorsLtTwo);
    expect(res.statusCode).toEqual(400);
  });

  it('Retorna erro 400 ao tentar criar um carro sem "model", "year", "color", "status" e "buyValue"', async () => {
    let res = await request(server.getApp())
      .post('/cars')
      .send(carMock.noModelCar);
    expect(res.statusCode).toEqual(400);
    res = await request(server.getApp())
      .post('/cars')
      .send(carMock.noYearCar);
    expect(res.statusCode).toEqual(400);
    res = await request(server.getApp())
      .post('/cars')
      .send(carMock.noColorCar);
    expect(res.statusCode).toEqual(400);
    res = await request(server.getApp())
      .post('/cars')
      .send(carMock.noBuyValueCar);
    expect(res.statusCode).toEqual(400);
  });

  it('Retorna erro 400 ao tentar criar um carro sem "doorsQty" e "seatsQty"', async () => {
    let res = await request(server.getApp())
      .post('/cars')
      .send(carMock.noDoorsCar);
    expect(res.statusCode).toEqual(400);
    res = await request(server.getApp())
      .post('/cars')
      .send(carMock.noSeatsCar);
    expect(res.statusCode).toEqual(400);
  });

  it('Não é possível criar um carro se os atributos estiverem com tipos errados', async () => {
    await request(server.getApp())
      .post('/cars')
      .send(carMock.validCar);
    expect(typeof carMock.validCar.model).toBe('string');
    expect(typeof carMock.validCar.year).toBe('number');
    expect(typeof carMock.validCar.color).toBe('string');
    expect(typeof carMock.validCar.buyValue).toBe('number');
    expect(typeof carMock.validCar.doorsQty).toBe('number');
    expect(typeof carMock.validCar.seatsQty).toBe('number');
  });

  it('É possível criar um carro se todos os parametros forem passados corretamente', async () => {
    const res = await request(server.getApp())
      .post('/cars')
      .send(carMock.validCar);
    expect(res.statusCode).toEqual(201);
  });
});