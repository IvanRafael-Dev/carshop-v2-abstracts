import mongoose from 'mongoose';
import request from 'supertest';
import { clearDatabase, closeDatabase } from '../utils/db';

import * as carMock from '../utils/CarsMock';

import server from '../../src/server';

const databaseName = 'CarShop';

const MONGO_URI = process.env.MONGO_URI
  || `mongodb://localhost:27017/${databaseName}`;

describe('Liste um único carro através do seu id utilizando uma requisição GET para a rota /cars/id', () => {
  beforeAll(async () => {
    await mongoose.connect(MONGO_URI);
  });

  beforeEach(async () => {
    await clearDatabase();
  });

  afterAll(async () => {
    await closeDatabase();
  });
  it('Será verificado que é possível listar um carro com sucesso através do id', async () => {
    const res = await request(server.getApp())
      .post('/cars')
      .send(carMock.validCar)
    const { _id } = res.body;
    const result = await request(server.getApp())
      .get(`/cars/${_id}`);
    expect(result.body).toEqual(res.body);
    expect(result.statusCode).toEqual(200);
  });

  it('Será verificado que é disparado o erro 400 "Id must have 24 hexadecimal characters" caso o id possua menos que 24 caracteres', async () => {
    const messageError = {
      error: "Id must have 24 hexadecimal characters",
    };
    const result = await request(server.getApp())
      .get('/cars/999');
    expect(result.body).toEqual(messageError);
    expect(result.statusCode).toEqual(400);
  });

  it('Será verificado que é disparado o erro 404 "Object not found" caso o id possua 24 caracteres mas é inválido', async () => {
    const messageError = {
      error: "Object not found",
    };
    const result = await request(server.getApp())
      .get('/cars/999999999999999999999999');
    expect(result.body).toEqual(messageError);
    expect(result.statusCode).toEqual(404);
  });
});
