import mongoose from 'mongoose';
import request from 'supertest';
import clearDatabase from './utils/clearDB';

import * as carMock from './utils/CarsMock';
import * as motorcycleMock from './utils/MotorcyclesMock';
import * as trucksMock from './utils/TrucksMock';

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

describe('2 - Crie a rota /motorcycles', () => {
  describe('É possível criar um moto através de uma requisição POST para a rota /motorcycles', () => {
    beforeAll(async () => {
      await mongoose.connect(MONGO_URI);
    });
  
    beforeEach(async () => {
      await clearDatabase();
    });
  
    afterAll(async () => {
      await mongoose.disconnect();
    });
  
    it('Não é possível criar um veículo Motorcycle com um objeto vazio', async () => {
      const res = await request(server.getApp())
        .post('/motorcycles')
        .send({});
      expect(res.statusCode).toEqual(400);
    });

    it('Não é possível criar uma moto com cilindrada inferior a 0', async () => {
      const res = await request(server.getApp())
        .post('/motorcycles')
        .send(motorcycleMock.MotorcycleEngineLteTwo);
      expect(res.statusCode).toEqual(400);
    });

    it('Não é possível criar uma moto com cilindrada superior a 2500', async () => {
      const res = await request(server.getApp())
        .post('/motorcycles')
        .send(motorcycleMock.MotorcycleEngineGt2500);
      expect(res.statusCode).toEqual(400);
    });

    it('Não é possível criar uma moto sem "model", "year", "color", "status" e "buyValue"', async () => {
      let res = await request(server.getApp())
        .post('/motorcycles')
        .send(motorcycleMock.noModelMotorcycle);
      expect(res.statusCode).toEqual(400);
      res = await request(server.getApp())
        .post('/motorcycles')
        .send(motorcycleMock.noYearMotorcycle);
      expect(res.statusCode).toEqual(400);
      res = await request(server.getApp())
        .post('/motorcycles')
        .send(motorcycleMock.noColorMotorcycle);
      expect(res.statusCode).toEqual(400);
      res = await request(server.getApp())
        .post('/motorcycles')
        .send(motorcycleMock.noStatusMotorcycle);
      expect(res.statusCode).toEqual(400);
      res = await request(server.getApp())
        .post('/motorcycles')
        .send(motorcycleMock.noBuyValueMotorcycle);
      expect(res.statusCode).toEqual(400);      
    });

    it('Não é possível criar uma moto sem "category" e "engineCapacity"', async () => {
      let res = await request(server.getApp())
        .post('/motorcycles')
        .send(motorcycleMock.noCategoryMotorcycle);
      expect(res.statusCode).toEqual(400);
      res = await request(server.getApp())
        .post('/motorcycles')
        .send(motorcycleMock.noEngineCapacityMotorcycle);
      expect(res.statusCode).toEqual(400);
    });

    it('Não é possível criar uma moto com categoria diferente de `Street`, `Custom` e `Trail`', async () => {
      const res = await request(server.getApp())
        .post('/motorcycles')
        .send(motorcycleMock.MotorcycleWrongCategory);
      expect(res.statusCode).toEqual(400);
    })

    it('É possível criar uma moto se todos os parametros forem passados corretamente', async () => {
      const res = await request(server.getApp())
        .post('/motorcycles')
        .send(motorcycleMock.validMotorcycle);
      expect(res.statusCode).toEqual(201);
    });
  })
});

describe('3 - Crie a rota /trucks', () => {
  describe('É possível criar um moto através de uma requisição POST para a rota /trucks', () => {
    beforeAll(async () => {
      await mongoose.connect(MONGO_URI);
    });
  
    beforeEach(async () => {
      await clearDatabase();
    });
  
    afterAll(async () => {
      await mongoose.disconnect();
    });
  
    it('Não é possível criar um veículo Truck com um objeto vazio', async () => {
      const res = await request(server.getApp())
        .post('/trucks')
        .send({});
      expect(res.statusCode).toEqual(400);
    });

    it('Não é possível criar um caminhão com eixo inferior a 2', async () => {
      const res = await request(server.getApp())
        .post('/trucks')
        .send(trucksMock.TruckAxlesLtTwo);
      expect(res.statusCode).toEqual(400);
    });

    it('Não é possível criar um caminhão com eixo superior a 5', async () => {
      const res = await request(server.getApp())
        .post('/trucks')
        .send(trucksMock.TruckAxlesGt5);
      expect(res.statusCode).toEqual(400);
    });

    it('Não é possível criar um caminhão sem "model", "year", "color", "status" e "buyValue"', async () => {
      let res = await request(server.getApp())
        .post('/trucks')
        .send(trucksMock.noModelTruck);
      expect(res.statusCode).toEqual(400);
      res = await request(server.getApp())
        .post('/trucks')
        .send(trucksMock.noYearTruck);
      expect(res.statusCode).toEqual(400);
      res = await request(server.getApp())
        .post('/trucks')
        .send(trucksMock.noColorTruck);
      expect(res.statusCode).toEqual(400);
      res = await request(server.getApp())
        .post('/trucks')
        .send(trucksMock.noStatusTruck);
      expect(res.statusCode).toEqual(400);
      res = await request(server.getApp())
        .post('/trucks')
        .send(trucksMock.noBuyValueTruck);
      expect(res.statusCode).toEqual(400);      
    });

    it('Não é possível criar um caminhão sem "category" e "axlesQty"', async () => {
      let res = await request(server.getApp())
        .post('/trucks')
        .send(trucksMock.noCategoryTruck);
      expect(res.statusCode).toEqual(400);
      res = await request(server.getApp())
        .post('/trucks')
        .send(trucksMock.noAxlesTruck);
      expect(res.statusCode).toEqual(400);
    });

    it('Não é possível criar um caminhão com categoria diferente de `Urbano`, `Semi-Pesado` e `Pesado`', async () => {
      const res = await request(server.getApp())
        .post('/trucks')
        .send(trucksMock.TruckWrongCategory);
      expect(res.statusCode).toEqual(400);
    });

    it('É possível criar um caminhão se todos os parametros forem passados corretamente', async () => {
      const res = await request(server.getApp())
        .post('/trucks')
        .send(trucksMock.validTruck);
      expect(res.statusCode).toEqual(201);
    });
  })
});