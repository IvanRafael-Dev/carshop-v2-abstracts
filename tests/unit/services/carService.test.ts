import { expect } from 'chai';
import mongoose from 'mongoose';

import { clearDatabase, closeDatabase } from '../../utils/db';

import { Cars } from '../../../src/models/CarModel'

import { validCar, coverageCar } from '../../utils/CarsMock';

const databaseName = 'CarShop';

const MONGO_URI = process.env.MONGO_URI
  || `mongodb://localhost:27017/${databaseName}`;

describe('Realiza testes na camada de services de Carros', () => {

  // -----------------------|| CADASTRO DE CARROS ||-----------------------
  describe('Insere novo produto', () => {
    const payloadCar = validCar;
    beforeAll(async () => {
      await mongoose.connect(MONGO_URI);
    });
  
    beforeEach(async () => {
      await clearDatabase();
    });
  
    afterAll(async () => {
      await closeDatabase();
    });

    describe('Quando o payload é inválido', () => {
      it('retorna um objeto vazio e statusCode 400', async () => {
        try {
          await Cars.create();
        } catch (error) {
          expect(error).to.be.an('object');
          expect(error).to.equal(400);
        }
      });

      it('o objeto possui chaves: "model", "year" e "color", "status", "buyValue", "seatsQty", "doorsQty"', async () => {
        const response = await Cars.create(payloadCar);
        expect(response).to.have.a.property('model');
        expect(response).to.have.a.property('year');
        expect(response).to.have.a.property('status');
        expect(response).to.have.a.property('buyValue');
        expect(response).to.have.a.property('seatsQty');
        expect(response).to.have.a.property('doorsQty');
      });
    });
  });

  // -----------------------|| LISTA CARROS ||-----------------------
  describe('Busca carros', () => {
    const payloadCar = coverageCar;

    describe('Buscando todos os carros', () => {
      beforeAll(async () => {
        await mongoose.connect(MONGO_URI);
      });
    
      beforeEach(async () => {
        await clearDatabase();
      });
    
      afterAll(async () => {
        await closeDatabase();
      });

      it('retorna um array com tamanho 2', async () => {
        await Cars.create(payloadCar);
        await Cars.create(payloadCar);
        const response = await Cars.find();
        expect(response).to.be.an('array').to.not.be.empty;
        expect(response).to.have.lengthOf(2);
      });

      it('os objetos do array contém as chaves: "model", "year" e "color", "status", "buyValue", "seatsQty", "doorsQty"', async () => {
        await Cars.create(payloadCar);
        await Cars.create(payloadCar);
        const response = await Cars.find();
        expect(response[0]).to.have.property('model');
        expect(response[0]).to.have.property('year');
        expect(response[0]).to.have.property('color');
        expect(response[0]).to.have.property('status');
        expect(response[0]).to.have.property('buyValue');
        expect(response[0]).to.have.property('seatsQty');
        expect(response[0]).to.have.property('doorsQty');
        expect(response[1]).to.have.property('model');
        expect(response[1]).to.have.property('year');
        expect(response[1]).to.have.property('color');
        expect(response[1]).to.have.property('status');
        expect(response[1]).to.have.property('buyValue');
        expect(response[1]).to.have.property('seatsQty');
        expect(response[1]).to.have.property('doorsQty');
      });
    });
  });

    describe('Buscando carro por "id"', () => {
      const payloadCar = validCar;
      beforeAll(async () => {
        await mongoose.connect(MONGO_URI);
      });
    
      beforeEach(async () => {
        await clearDatabase();
      });
    
      afterAll(async () => {
        await closeDatabase();
      });

      it('retorna um objeto', async () => {
        await Cars.create(payloadCar);
        const response = await Cars.findById(validCar._id);
        expect(response).to.be.an('object')
      });

      it('o objeto contém as chaves: "model", "year" e "color", "status", "buyValue", "seatsQty", "doorsQty"', async () => {
        await Cars.create(payloadCar);
        const response = await Cars.findById(validCar._id);
        expect(response).to.have.property('model');
        expect(response).to.have.property('year');
        expect(response).to.have.property('color');
        expect(response).to.have.property('status');
        expect(response).to.have.property('buyValue');
        expect(response).to.have.property('seatsQty');
        expect(response).to.have.property('doorsQty');
      });
    });

  // -----------------------|| ALTERANDO CARROS ||-----------------------
  describe('Alterando carro', () => {
    const payloadCar = validCar;

    beforeAll(async () => {
      await mongoose.connect(MONGO_URI);
    });
  
    beforeEach(async () => {
      await clearDatabase();
    });
  
    afterAll(async () => {
      await closeDatabase();
    });

    describe('Quando é alterado com sucesso', () => {
      it('retorna um objeto', async () => {
        await Cars.create(payloadCar);
        const response = await Cars.findOneAndUpdate(validCar._id);
        expect(response).to.be.an('object');
      });

      it('o objeto possui chaves: "model", "year" e "color", "status", "buyValue", "seatsQty", "doorsQty"', async () => {
        await Cars.create(payloadCar);
        const response = await Cars.findOneAndUpdate(validCar._id);
        expect(response).to.have.property('model');
        expect(response).to.have.property('year');
        expect(response).to.have.property('color');
        expect(response).to.have.property('status');
        expect(response).to.have.property('buyValue');
        expect(response).to.have.property('seatsQty');
        expect(response).to.have.property('doorsQty');
      });
    });
  });

  // -----------------------|| DELETANDO CARROS ||-----------------------
  describe('Deletando produto', () => {
    const payloadCar = validCar;

    beforeAll(async () => {
      await mongoose.connect(MONGO_URI);
    });
  
    beforeEach(async () => {
      await clearDatabase();
    });
  
    afterAll(async () => {
      await closeDatabase();
    });

    describe('Quando é deletado com sucesso', () => {
      it('retorna um array vazio', async () => {
        await Cars.create(payloadCar);
        await Cars.deleteOne(validCar._id);
        const response = await Cars.find();
        expect(response).to.be.an('array');
      });
    });
  });
});
