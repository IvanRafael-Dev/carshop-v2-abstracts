import mongoose from 'mongoose';
import request from 'supertest';
import { clearDatabase, closeDatabase } from '../utils/db';

import * as motorcycleMock from '../utils/MotorcyclesMock';

import server from '../../src/server';

const databaseName = 'CarShop';

const MONGO_URI = process.env.MONGO_URI
  || `mongodb://localhost:27017/${databaseName}`;

describe('13 - Liste uma única moto através do seu id utilizando uma requisição GET para a rota /motorcycles/id', () => {
  beforeAll(async () => {
    await mongoose.connect(MONGO_URI);
  });

  beforeEach(async () => {
    await clearDatabase();
  });

  afterAll(async () => {
    await closeDatabase();
  });
  it('Será verificado que é possível listar uma moto com sucesso através do id', async () => {
    const res = await request(server.getApp())
      .post('/motorcycles')
      .send(motorcycleMock.validMotorcycle)
    const { _id } = res.body;
    const result = await request(server.getApp())
      .get(`/motorcycles/${_id}`);
    expect(result.body).toEqual(res.body);
    expect(result.statusCode).toEqual(200);
  });

  it('Será verificado que é disparado o erro 400 "Id must have 24 hexadecimal characters" caso o id possua menos que 24 caracteres', async () => {
    const messageError = {
      error: "Id must have 24 hexadecimal characters",
    };
    const result = await request(server.getApp())
      .get('/motorcycles/999');
    expect(result.body).toEqual(messageError);
    expect(result.statusCode).toEqual(400);
  });

  it('Será verificado que é disparado o erro 404 "Object not found" caso o id possua 24 caracteres mas é inválido', async () => {
    const messageError = {
      error: "Object not found",
    };
    const result = await request(server.getApp())
      .get('/motorcycles/999999999999999999999999');
    expect(result.body).toEqual(messageError);
    expect(result.statusCode).toEqual(404);
  });
});
