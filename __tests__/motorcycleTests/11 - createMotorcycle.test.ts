import mongoose from 'mongoose';
import request from 'supertest';
import { clearDatabase, closeDatabase } from '../utils/db';

import * as motorcycleMock from '../utils/MotorcyclesMock';

import server from '../../src/server';

const databaseName = 'CarShop';

const MONGO_URI = process.env.MONGO_URI
  || `mongodb://localhost:27017/${databaseName}`;

describe('11 - Crie uma moto através de uma requisição POST para a rota /motorcycles', () => {
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
      .post('/motorcycles')
      .send({});
    expect(res.statusCode).toEqual(400);
  });

  it('Retorna erro 400 ao tentar criar uma moto com category diferente de "Street", "Custom" ou "Trail"', async () => {
    const res = await request(server.getApp())
      .post('/motorcycles')
      .send(motorcycleMock.MotorcycleWrongCategory);
    expect(res.statusCode).toEqual(400);
  });

  it('Retorna erro 400 ao tentar criar uma moto com category diferente de "string"', async () => {
    const res = await request(server.getApp())
      .post('/motorcycles')
      .send(motorcycleMock.MotorcycleCategoryNotString);
    expect(res.statusCode).toEqual(400);
  });

  it('Retorna erro 400 ao tentar criar uma moto com engineCapacity menor ou igual a zero', async () => {
    const res = await request(server.getApp())
      .post('/motorcycles')
      .send(motorcycleMock.MotorcycleEngineLteZero);
    expect(res.statusCode).toEqual(400);
  });

  it('Retorna erro 400 ao tentar criar uma moto com engineCapacity maior que 2500', async () => {
    const res = await request(server.getApp())
      .post('/motorcycles')
      .send(motorcycleMock.MotorcycleEngineGt2500);
    expect(res.statusCode).toEqual(400);
  });

  it('Retorna erro 400 ao tentar criar um moto sem "model", "year", "color" e "buyValue"', async () => {
    let res = await request(server.getApp())
      .post('/motorcycles')
      .send(motorcycleMock.noModelMotorcycle);
    expect(res.statusCode).toEqual(400);
    res = await request(server.getApp())
      .post('/motorcycles')
      .send(motorcycleMock.noYearMotorcycle);
    expect(res.statusCode).toEqual(400);
    res = await request(server.getApp())
      .post('/motorcycles')
      .send(motorcycleMock.noColorMotorcycle);
    expect(res.statusCode).toEqual(400);
    res = await request(server.getApp())
      .post('/motorcycles')
      .send(motorcycleMock.noBuyValueMotorcycle);
    expect(res.statusCode).toEqual(400);
  });

  it('Retorna erro 400 ao tentar criar um moto sem "category" e "engineCapacity"', async () => {
    let res = await request(server.getApp())
      .post('/motorcycles')
      .send(motorcycleMock.noCategoryMotorcycle);
    expect(res.statusCode).toEqual(400);
    res = await request(server.getApp())
      .post('/motorcycles')
      .send(motorcycleMock.noEngineCapacityMotorcycle);
    expect(res.statusCode).toEqual(400);
  });

  it('Não é possível criar um moto se os atributos estiverem com tipos errados', async () => {
    await request(server.getApp())
      .post('/motorcycles')
      .send(motorcycleMock.validMotorcycle);
    expect(typeof motorcycleMock.validMotorcycle.model).toBe('string');
    expect(typeof motorcycleMock.validMotorcycle.year).toBe('number');
    expect(typeof motorcycleMock.validMotorcycle.color).toBe('string');
    expect(typeof motorcycleMock.validMotorcycle.buyValue).toBe('number');
    expect(typeof motorcycleMock.validMotorcycle.category).toBe('string');
    expect(typeof motorcycleMock.validMotorcycle.engineCapacity).toBe('number');
  });

  it('É possível criar um moto se todos os parametros forem passados corretamente', async () => {
    const res = await request(server.getApp())
      .post('/motorcycles')
      .send(motorcycleMock.validMotorcycle);
    expect(res.statusCode).toEqual(201);
  });
});