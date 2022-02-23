import mongoose from 'mongoose';
import request from 'supertest';
import clearDatabase from './utils/clearDB';

import * as carMock from './utils/CarsMock';

import server from '../src/server';

const databaseName = 'CarShop';

const MONGO_URI = process.env.MONGO_URI
  || `mongodb://localhost:27017/${databaseName}`;

describe('1 - Crie a rota /cars', () => {
  describe('É possível criar um carro através de uma requisição POST para a rota /cars', () => {
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
      const res = await request(server.getApp())
        .post('/cars')
        .send({});
      expect(res.statusCode).toEqual(400);
    });

    it('Não é possível criar um carro com quantidade de assentos inferior a 2', async () => {
      const res = await request(server.getApp())
        .post('/cars')
        .send(carMock.carSeatsLtTwo);
      expect(res.statusCode).toEqual(400);
    });

    it('Não é possível criar um carro com quantidade de portas inferior a 2', async () => {
      const res = await request(server.getApp())
        .post('/cars')
        .send(carMock.carDoorsLtTwo);
      expect(res.statusCode).toEqual(400);
    });

    it('Não é possível criar um carro sem "model", "year", "color", "status" e "buyValue"', async () => {
      let res = await request(server.getApp())
        .post('/cars')
        .send(carMock.noModelCar);
      expect(res.statusCode).toEqual(400);
      res = await request(server.getApp())
        .post('/cars')
        .send(carMock.noYearCar);
      expect(res.statusCode).toEqual(400);
      res = await request(server.getApp())
        .post('/cars')
        .send(carMock.noColorCar);
      expect(res.statusCode).toEqual(400);
      res = await request(server.getApp())
        .post('/cars')
        .send(carMock.noStatusCar);
      expect(res.statusCode).toEqual(400);
      res = await request(server.getApp())
        .post('/cars')
        .send(carMock.noBuyValueCar);
      expect(res.statusCode).toEqual(400);      
    });

    it('Não é possível criar um carro sem "doorsQty" e "seatsQty"', async () => {
      let res = await request(server.getApp())
        .post('/cars')
        .send(carMock.noDoorsCar);
      expect(res.statusCode).toEqual(400);
      res = await request(server.getApp())
        .post('/cars')
        .send(carMock.noSeatsCar);
      expect(res.statusCode).toEqual(400);
    });

    it('É possível criar um carro se todos os parametros forem passados corretamente', async () => {
      const res = await request(server.getApp())
        .post('/cars')
        .send(carMock.validCar);
      expect(res.statusCode).toEqual(201);
    });
  })
});
