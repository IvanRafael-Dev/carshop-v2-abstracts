import mongoose from 'mongoose';
import request from 'supertest';
import { clearDatabase, closeDatabase } from './utils/db';

import * as carMock from './utils/CarsMock';

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
      await request(server.getApp())
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

describe('7 - Crie um endpoint para a listar todos os carros cadastrados', () => {
  beforeAll(async () => {
    await mongoose.connect(MONGO_URI);
  });

  beforeEach(async () => {
    await clearDatabase();
  });

  afterAll(async () => {
    await closeDatabase();
  });
  it('Será verificado que é possível listar os carros com sucesso', async () => {
    const res = await request(server.getApp())
      .post('/cars')
      .send(carMock.validCar)
    const result = await request(server.getApp())
      .get('/cars');
    expect(result.body).toEqual([res.body]);
    expect(result.statusCode).toEqual(200);
  });
  it('Será verificado que retorna uma lista vazia se não houver carros', async () => {
    const result = await request(server.getApp())
      .get('/cars');
    expect(result.body).toEqual([]);
    expect(result.statusCode).toEqual(200);
  });
});

describe('8 - Crie um endpoint para a listar um carro através do seu id', () => {
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
  it('Será verificado que retorna erro 400 caso o id informado possua menos que 24 caracteres', async () => {
    const messageError = {
      error: "Id must have 24 hexadecimal characters",
    };
    const result = await request(server.getApp())
      .get('/cars/999');
    expect(result.body).toEqual(messageError);
    expect(result.statusCode).toEqual(400);
  });
  it('Será verificado que retorna erro 404 caso o id possua 24 caracteres porém não existe o carro registrado', async () => {
    const messageError = {
      error: "Object not found",
    };
    const result = await request(server.getApp())
      .get('/cars/999999999999999999999999');
    expect(result.body).toEqual(messageError);
    expect(result.statusCode).toEqual(404);
  });
});

describe('9 - Crie um endpoint para atualizar os registros de um carro', () => {
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

describe.only('10 - Crie um endpoint para apagar registros de um carro', () => {
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

  it('Será verificado que um carro é removido com sucesso', async () => {
    const res = await request(server.getApp())
      .post('/cars')
      .send(carMock.validCar)

    const { _id } = res.body;

    const result = await request(server.getApp())
      .del(`/cars/${_id}`);

    expect(result.statusCode).toEqual(204);
    expect(result.body).toEqual({});
  })
});
