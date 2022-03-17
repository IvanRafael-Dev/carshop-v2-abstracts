import mongoose from 'mongoose';
import request from 'supertest';
import { clearDatabase, closeDatabase } from '../utils/db';

import * as motorcycleMock from '../utils/MotorcyclesMock';

import server from '../../src/server';

const databaseName = 'CarShop';

const MONGO_URI = process.env.MONGO_URI
  || `mongodb://localhost:27017/${databaseName}`;


describe('15 - Utilize uma requisição DELETE para o endpoint /motorcycles/id para excluir os registros de uma moto', () => {
  beforeAll(async () => {
    await mongoose.connect(MONGO_URI);
  });

  beforeEach(async () => {
    await clearDatabase();
  });

  afterAll(async () => {
    await closeDatabase();
  });

  it('Será verificado que é disparado o erro 404 "Object not found" caso o id possua 24 caracteres mas é inválido ', async () => {
    const errorMsg = { error: "Object not found" };
    const response = await request(server.getApp())
      .put('/motorcycles/999999999999999999999999')
      .send(motorcycleMock.validMotorcycle);

    expect(response.status).toBe(404);
    expect(response.body.error).toBe(errorMsg.error);
  });

  it('Será verificado que é disparado o erro 400 "Id must have 24 hexadecimal characters" caso o id possua menos que 24 caracteres', async () => {
    const errorMsg = { error: "Id must have 24 hexadecimal characters" }
    const response = await request(server.getApp())
      .put('/motorcycles/99999')
      .send(motorcycleMock.validMotorcycle);
    expect(response.status).toBe(400);
    expect(response.body.error).toBe(errorMsg.error);
  });

  it('Será verificado que uma moto é removida com sucesso', async () => {
    const res = await request(server.getApp())
      .post('/motorcycles')
      .send(motorcycleMock.validMotorcycle)

    const { _id } = res.body;

    const result = await request(server.getApp())
      .del(`/motorcycles/${_id}`);

    expect(result.statusCode).toEqual(204);
    expect(result.body).toEqual({});
  })
});
