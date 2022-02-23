import mongoose from 'mongoose';
import request from 'supertest';
import clearDatabase from './utils/clearDB';

import server from '../src/index';

const MONGO_URI = process.env.MONGO_URI
  || 'mongodb://localhost:27017/CarShop';

describe('Rota /cars', () => {
  describe('É possível criar um carro através de uma requisição POST para a rota /cars', () => {
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
    it('Não é possível criar um carro com quantidade de assentos inferior a 2', async () => {
      const res = await request(server.getApp())
        .post('/cars')
        .send({
          model: 'Uno da Escada',
          year: 1963,
          color: 'red',
          status: true,
          buyValue: 3500,
          seatsQty: 1,
          doorsQty: 2
        });
      expect(res.statusCode).toEqual(400);
    });
    it('Não é possível criar um carro com quantidade de portas inferior a 2', async () => {
      const res = await request(server.getApp())
        .post('/cars')
        .send({
          model: 'Uno da Escada',
          year: 1963,
          color: 'red',
          status: true,
          buyValue: 3500,
          seatsQty: 2,
          doorsQty: 1
        });
      expect(res.statusCode).toEqual(400);
    });
    it('Não é possível criar um carro sem "model", "year", "color", "status" e "buyValue"', async () => {
      const res = await request(server.getApp())
      .post('/cars')
      .send({
        seatsQty: 2,
        doorsQty: 2
      });
    expect(res.statusCode).toEqual(400);
    });
    it('Não é possível criar um carro sem "doorsQty" e "seatsQty"', async () => {
      const res = await request(server.getApp())
        .post('/cars')
        .send({
          model: 'Uno da Escada',
          year: 1963,
          color: 'red',
          status: true,
          buyValue: 3500,
        });
      expect(res.statusCode).toEqual(400);
    });
    it('É possível criar um carro se todos os parametros forem passados corretamente', async () => {
      const res = await request(server.getApp())
        .post('/cars')
        .send({
          model: 'Uno da Escada',
          year: 1963,
          color: 'red',
          status: true,
          buyValue: 3500,
          seatsQty: 2,
          doorsQty: 2
        });
      expect(res.statusCode).toEqual(200);
    })
  })
});
