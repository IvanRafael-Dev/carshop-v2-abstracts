import mongoose from 'mongoose';
import request from 'supertest';
import clearDatabase from './utils/clearDB';

import server from '../src/index';

const MONGO_URI = process.env.MONGO_URI
  || 'mongodb://localhost:27017/CarShop';

describe('Crie a rota /Cars', () => {
  beforeAll(async () => {
    await mongoose.connect(MONGO_URI);
  });

  beforeEach(async () => {
    await clearDatabase();
  });

  // afterAll(async () => {
  //   await mongoose.disconnect();
  // });

  it('Não é possível criar um veículo Car com um objeto vazio', async () => {
    const res = await request(server.getApp())
      .post('/cars')
      .send({});
    expect(res.statusCode).toEqual(400);
  });
});
