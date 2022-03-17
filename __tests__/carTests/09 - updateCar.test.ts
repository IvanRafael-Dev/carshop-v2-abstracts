import mongoose from 'mongoose';
import request from 'supertest';
import { clearDatabase, closeDatabase } from '../utils/db';

import * as carMock from '../utils/CarsMock';

import server from '../../src/server';

const databaseName = 'CarShop';

const MONGO_URI = process.env.MONGO_URI
  || `mongodb://localhost:27017/${databaseName}`;

describe('Atualize os registros de um carro através do seu id, utilizando uma requisição PUT para a rota /cars/id', () => {
  beforeAll(async () => {
    await mongoose.connect(MONGO_URI);
  });

  beforeEach(async () => {
    await clearDatabase();
  });

  afterAll(async () => {
    await closeDatabase();
  });

  it('Será verificado que é disparado o erro 404 "Object not found" caso o id possua 24 caracteres mas é inválido', async () => {
    const errorMsg = { error: "Object not found" };
    const response = await request(server.getApp())
      .put('/cars/999999999999999999999999')
      .send(carMock.validCar);

    expect(response.status).toBe(404);
    expect(response.body.error).toBe(errorMsg.error);
  });

  it('Será verificado que é disparado o erro 400 "Id must have 24 hexadecimal characters" caso o id possua menos que 24 caracteres', async () => {
    const errorMsg = { error: "Id must have 24 hexadecimal characters" }
    const response = await request(server.getApp())
      .put('/cars/99999')
      .send(carMock.validCar);
    expect(response.status).toBe(400);
    expect(response.body.error).toBe(errorMsg.error);
  });

  it('Será verificado que é disparado o erro 400 caso o body esteja incompleto', async () => {
    const response = await request(server.getApp())
      .put('/cars/99999');
    expect(response.status).toBe(400);
  })

  it('Será verificado que um carro é atualizado com sucesso', async () => {
    const res = await request(server.getApp())
      .post('/cars')
      .send(carMock.validCar)

    const { _id } = res.body;

    const result = await request(server.getApp())
      .put(`/cars/${_id}`)
      .send(carMock.updatedCar);

    const getCar = await request(server.getApp())
      .get(`/cars/${_id}`);
    expect(getCar.body).toEqual(carMock.updatedCar);
    expect(result.statusCode).toEqual(200);
  })
});
