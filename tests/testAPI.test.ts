import mongoose from 'mongoose';
import request from 'supertest';
import clearDatabase from './utils/clearDB';

import * as vehicleMock from './utils/vehiclesMock';

import server from '../src/server';

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
        .send(vehicleMock.carSeatsLtTwo);
      expect(res.statusCode).toEqual(400);
    });
    it('Não é possível criar um carro com quantidade de portas inferior a 2', async () => {
      const res = await request(server.getApp())
        .post('/cars')
        .send(vehicleMock.carDoorsLtTwo);
      expect(res.statusCode).toEqual(400);
    });
    it('Não é possível criar um carro sem "model", "year", "color", "status" e "buyValue"', async () => {
      let res = await request(server.getApp())
        .post('/cars')
        .send(vehicleMock.noModelCar);
      expect(res.statusCode).toEqual(400);
      res = await request(server.getApp())
        .post('/cars')
        .send(vehicleMock.noYearCar);
      expect(res.statusCode).toEqual(400);
      res = await request(server.getApp())
        .post('/cars')
        .send(vehicleMock.noColorCar);
      expect(res.statusCode).toEqual(400);
      res = await request(server.getApp())
        .post('/cars')
        .send(vehicleMock.noStatusCar);
      expect(res.statusCode).toEqual(400);
      res = await request(server.getApp())
        .post('/cars')
        .send(vehicleMock.noBuyValueCar);
      expect(res.statusCode).toEqual(400);      
    });
    it('Não é possível criar um carro sem "doorsQty" e "seatsQty"', async () => {
      let res = await request(server.getApp())
        .post('/cars')
        .send(vehicleMock.noDoorsCar);
      expect(res.statusCode).toEqual(400);
      res = await request(server.getApp())
        .post('/cars')
        .send(vehicleMock.noSeatsCar);
      expect(res.statusCode).toEqual(400);
    });
    it('É possível criar um carro se todos os parametros forem passados corretamente', async () => {
      const res = await request(server.getApp())
        .post('/cars')
        .send(vehicleMock.validCar);
      expect(res.statusCode).toEqual(200);
    })
  })
});
