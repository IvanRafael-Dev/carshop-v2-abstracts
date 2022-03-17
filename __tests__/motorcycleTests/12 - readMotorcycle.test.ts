import mongoose from 'mongoose';
import request from 'supertest';
import { clearDatabase, closeDatabase } from '../utils/db';

import * as motorcycleMock from '../utils/MotorcyclesMock';

import server from '../../src/server';

const databaseName = 'CarShop';

const MONGO_URI = process.env.MONGO_URI
  || `mongodb://localhost:27017/${databaseName}`;

describe('12 - Liste todas as motos cadastrados através de uma requisição GET para a rota /motorcycles', () => {
  beforeAll(async () => {
    await mongoose.connect(MONGO_URI);
  });

  beforeEach(async () => {
    await clearDatabase();
  });

  afterAll(async () => {
    await closeDatabase();
  });

  it('Será verificado que é possível listar as motos com sucesso', async () => {
    const res = await request(server.getApp())
      .post('/motorcycles')
      .send(motorcycleMock.validMotorcycle)
    const result = await request(server.getApp())
      .get('/motorcycles');
    expect(result.body).toEqual([res.body]);
    expect(result.statusCode).toEqual(200);
  });

  it('Será verificado que retorna uma lista vazia se não houver carros', async () => {
    const result = await request(server.getApp())
      .get('/motorcycles');
    expect(result.body).toEqual([]);
    expect(result.statusCode).toEqual(200);
  });
});
