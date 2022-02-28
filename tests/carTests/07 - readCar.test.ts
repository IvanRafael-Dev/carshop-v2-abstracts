import mongoose from 'mongoose';
import request from 'supertest';
import { clearDatabase, closeDatabase } from '../sources/db';

import * as carMock from '../sources/CarsMock';

import server from '../../src/server';

const databaseName = 'CarShop';

const MONGO_URI = process.env.MONGO_URI
  || `mongodb://localhost:27017/${databaseName}`;

describe('7 - Liste todos os carros cadastrados através de uma requisição GET para a rota /cars', () => {
  beforeAll(async () => {
    await mongoose.connect(MONGO_URI);
  });

  beforeEach(async () => {
    await clearDatabase();
  });

  afterAll(async () => {
    await closeDatabase();
  });

  it('Será verificado que é possível listar os carros com sucesso', async () => {
    const res = await request(server.getApp())
      .post('/cars')
      .send(carMock.validCar)
    const result = await request(server.getApp())
      .get('/cars');
    expect(result.body).toEqual([res.body]);
    expect(result.statusCode).toEqual(200);
  });

  it('Será verificado que retorna uma lista vazia se não houver carros', async () => {
    const result = await request(server.getApp())
      .get('/cars');
    expect(result.body).toEqual([]);
    expect(result.statusCode).toEqual(200);
  });
});
