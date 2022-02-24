import mongoose, { Types } from 'mongoose';
import request from 'supertest';
import { clearDatabase, closeDatabase } from './utils/db';

import * as carListMock from './utils/CarsListMock';
import * as motorcycleListMock from './utils/MotorcyclesListMock';
import * as carMock from './utils/CarsMock';
import * as motorcycleMock from './utils/MotorcyclesMock';
import * as trucksMock from './utils/TrucksMock';

import { Cars } from '../src/models/CarModel';
import { Motorcycles } from '../src/models/MotorcycleModel';

import server from '../src/server';

const databaseName = 'CarShop';

const MONGO_URI = process.env.MONGO_URI
  || `mongodb://localhost:27017/${databaseName}`;

describe('4 - Crie um endpoint para criação de carros', () => {
  describe('É possível criar um carro através de uma requisição POST para a rota /cars', () => {
    beforeAll(async () => {
      await mongoose.connect(MONGO_URI);
    });

    beforeEach(async () => {
      await clearDatabase();
    });

    afterAll(async () => {
      await closeDatabase();
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

    it('Não é possível criar um carro se os atributos estiverem com tipos errados', async () => {
      const res = await request(server.getApp())
        .post('/cars')
        .send(carMock.validCar);
      expect(typeof carMock.validCar.model).toBe('string');
      expect(typeof carMock.validCar.year).toBe('number');
      expect(typeof carMock.validCar.color).toBe('string');
      expect(typeof carMock.validCar.status).toBe('boolean');
      expect(typeof carMock.validCar.buyValue).toBe('number');
      expect(typeof carMock.validCar.doorsQty).toBe('number');
      expect(typeof carMock.validCar.seatsQty).toBe('number');
    });

    it('É possível criar um carro se todos os parametros forem passados corretamente', async () => {
      const res = await request(server.getApp())
        .post('/cars')
        .send(carMock.validCar);
      expect(res.statusCode).toEqual(201);
    });
  })
});

describe('5 - Crie um endpoint para criação de motos', () => {
  describe('É possível criar um moto através de uma requisição POST para a rota /motorcycles', () => {
    beforeAll(async () => {
      await mongoose.connect(MONGO_URI);
    });

    beforeEach(async () => {
      await clearDatabase();
    });

    afterAll(async () => {
      await closeDatabase();
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
    });

    it('Não é possível criar uma moto se os atributos estiverem com tipos errados', async () => {
      await request(server.getApp())
        .post('/motorcycles')
        .send(motorcycleMock.validMotorcycle);
      expect(typeof motorcycleMock.validMotorcycle.model).toBe('string');
      expect(typeof motorcycleMock.validMotorcycle.year).toBe('number');
      expect(typeof motorcycleMock.validMotorcycle.color).toBe('string');
      expect(typeof motorcycleMock.validMotorcycle.status).toBe('boolean');
      expect(typeof motorcycleMock.validMotorcycle.buyValue).toBe('number');
      expect(typeof motorcycleMock.validMotorcycle.category).toBe('string');
      expect(typeof motorcycleMock.validMotorcycle.engineCapacity).toBe('number');
    });

    it('É possível criar uma moto se todos os parametros forem passados corretamente', async () => {
      const res = await request(server.getApp())
        .post('/motorcycles')
        .send(motorcycleMock.validMotorcycle);
      expect(res.statusCode).toEqual(201);
    });
  })
});

describe('6 - Crie um endpoint para criação de caminhões', () => {
  describe('É possível criar um moto através de uma requisição POST para a rota /trucks', () => {
    beforeAll(async () => {
      await mongoose.connect(MONGO_URI);
    });

    beforeEach(async () => {
      await clearDatabase();
    });

    afterAll(async () => {
      await closeDatabase();
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

    it('Não é possível criar uma moto se os atributos estiverem com tipos errados', async () => {
      await request(server.getApp())
        .post('/trucks')
        .send(trucksMock.validTruck);
      expect(typeof trucksMock.validTruck.model).toBe('string');
      expect(typeof trucksMock.validTruck.year).toBe('number');
      expect(typeof trucksMock.validTruck.color).toBe('string');
      expect(typeof trucksMock.validTruck.status).toBe('boolean');
      expect(typeof trucksMock.validTruck.buyValue).toBe('number');
      expect(typeof trucksMock.validTruck.category).toBe('string');
      expect(typeof trucksMock.validTruck.axlesQty).toBe('number');
    });

    it('É possível criar um caminhão se todos os parametros forem passados corretamente', async () => {
      const res = await request(server.getApp())
        .post('/trucks')
        .send(trucksMock.validTruck);
      expect(res.statusCode).toEqual(201);
    });
  })
});

describe('7 - Crie um endpoint para a listagem de carros', () => {
  it('Será verificado que é possível listar os carros com sucesso', async () => {
    const spy = jest.spyOn(Cars, 'find').mockReturnValueOnce(carListMock.carsListMock as any);
    Cars.find({});

    const spyFetchedCars = spy.mock.results[0].value;
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spyFetchedCars).toHaveLength(2);
    expect(spyFetchedCars).toBe(carListMock.carsListMock);
    spy.mockReset();
  });
  it('Será verificado que retorna uma lista vazia quando não há carros salvos', async () => {
    const spy = jest.spyOn(Cars, 'find').mockReturnValueOnce([] as any);
    Cars.find({});

    const spyFetchedCars = spy.mock.results[0].value;
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spyFetchedCars).toHaveLength(0);
    spy.mockReset();
  });
  it('Será verificado que retorna um carro pelo id', async () => {
    const spy = jest.spyOn(Cars, 'findById').mockReturnValueOnce(carListMock.carsListMock as any);
    Cars.findById(carListMock.carsListMock[0]._id);
    
    const spyFetchedCars = spy.mock.results[0].value;
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spyFetchedCars[0].model).toEqual(carListMock.carsListMock[0].model);
    spy.mockReset();
  });
  it('Será verificado que retorna um erro se o carro não for encontrado', async () => {
    const id = "123";
    const spy = jest.spyOn(Cars, 'findById').mockReturnValueOnce('Veículo não encontrado' as any);
    Cars.findById(id);
    
    const spyFetchedCars = spy.mock.results[0].value;
    console.log(spyFetchedCars)
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spyFetchedCars).toEqual('Veículo não encontrado');
    spy.mockReset();
  });
});

describe('8 - Crie um endpoint para a listagem de motos', () => {
  it('Será verificado que é possível listar as motos com sucesso', async () => {
    const spy = jest.spyOn(Motorcycles, 'find').mockReturnValueOnce(motorcycleListMock.motorcyclesListMock as any);
    Motorcycles.find({});

    const spyFetchedMotorcycles = spy.mock.results[0].value;
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spyFetchedMotorcycles).toHaveLength(2);
    expect(spyFetchedMotorcycles).toBe(motorcycleListMock.motorcyclesListMock);
    spy.mockReset();
  });
  it('Será verificado que retorna uma lista vazia quando não há motos salvas', async () => {
    const spy = jest.spyOn(Motorcycles, 'find').mockReturnValueOnce([] as any);
    Motorcycles.find({});

    const spyFetchedMotorcycles = spy.mock.results[0].value;
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spyFetchedMotorcycles).toHaveLength(0);
    spy.mockReset();
  });
  it('Será verificado que retorna uma moto pelo id', async () => {
    const spy = jest.spyOn(Motorcycles, 'findById').mockReturnValueOnce(motorcycleListMock.motorcyclesListMock as any);
    Motorcycles.findById(motorcycleListMock.motorcyclesListMock[0]._id);
    
    const spyFetchedMotorcycles = spy.mock.results[0].value;
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spyFetchedMotorcycles[0].model).toEqual(motorcycleListMock.motorcyclesListMock[0].model);
    spy.mockReset();
  });
  it('Será verificado que retorna um erro se a moto não for encontrada', async () => {
    const id = "123";
    const spy = jest.spyOn(Motorcycles, 'findById').mockReturnValueOnce('Veículo não encontrado' as any);
    Motorcycles.findById(id);
    
    const spyFetchedMotorcycles = spy.mock.results[0].value;
    console.log(spyFetchedMotorcycles)
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spyFetchedMotorcycles).toEqual('Veículo não encontrado');
    spy.mockReset();
  });
});