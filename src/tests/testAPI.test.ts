/* eslint-disable mocha/no-mocha-arrows */
import request = require('supertest');
import mongoose from 'mongoose';
import clearDatabase from './utils/clearDB';

import server from '..';

const MONGO_URI = process.env.MONGO_URI
  || 'mongodb://localhost:27017/CarShop';

const URL = 'http://localhost:3002';

describe('Crie a rota /Cars', () => {
  beforeAll(async () => {
    await mongoose.connect(MONGO_URI);
  });

  beforeEach(async () => {
    await clearDatabase();
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it('Não é possível criar um veículo Car com um objeto vazio', async () => {
    const noCar = {};
    const response = await request(server.getApp())
      .post(`${URL}/cars`).send(noCar);
    expect(response.status).toBe(400);
  });
});
