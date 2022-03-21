import mongoose from 'mongoose';
import request from 'supertest';
import { clearDatabase, closeDatabase } from '../utils/db';

import * as carMock from '../utils/CarsMock';

import server from '../../src/server';

const databaseName = 'CarShop';

const MONGO_URI = process.env.MONGO_URI
  || `mongodb://localhost:27017/${databaseName}`;

describe('08 - Crie uma rota para o endpoint /cars onde seja possível listar todos os carros registrados', () => {
  beforeAll(async () => {
    await mongoose.connect(MONGO_URI);
  });

  beforeEach(async () => {
    await clearDatabase();
  });

  afterAll(async () => {
    await closeDatabase();
  });

  it('É possível listar os carros com sucesso', async () => {
    const res = await request(server.getApp())
      .post('/cars')
      .send(carMock.validCar)
    const result = await request(server.getApp())
      .get('/cars');
    expect(result.body).toEqual([res.body]);
    expect(result.statusCode).toEqual(200);
  });

  it('Retorna uma lista vazia se não houver carros', async () => {
    const result = await request(server.getApp())
      .get('/cars');
    expect(result.body).toEqual([]);
    expect(result.statusCode).toEqual(200);
  });
});
