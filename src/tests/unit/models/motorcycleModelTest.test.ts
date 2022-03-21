import { expect } from 'chai';
import mongoose from 'mongoose';

import { Motorcycles } from '../../../models/MotorcycleModel';

import { validMotorcycle, coverageMotorcycle } from '../../utils/MotorcyclesMock';

import { clearDatabase, closeDatabase } from '../../utils/db';

const databaseName = 'CarShop';

const MONGO_URI = process.env.MONGO_URI
  || `mongodb://localhost:27017/${databaseName}`;

describe('Realiza testes na model de Motos', () => {

  // -----------------------|| CADASTRO DE MOTOS ||-----------------------
  describe('Insere novo produto', () => {
    const payloadMotorcycle = validMotorcycle;

    beforeEach(async () => {
      await mongoose.connect(MONGO_URI);
      await clearDatabase();
    });
    
    afterEach(async () => {
      await closeDatabase();
    });

    describe('Quando é inserido com sucesso', () => {
      it('retorna um objeto', async () => {
        const response = await Motorcycles.create(payloadMotorcycle);
        expect(response).to.be.an('object');
      });

      it('o objeto possui chaves: "model", "year" e "color", "buyValue", "category", "engineCapacity"', async () => {
        const response = await Motorcycles.create(payloadMotorcycle);
        expect(response).to.have.a.property('model');
        expect(response).to.have.a.property('year');
        expect(response).to.have.a.property('buyValue');
        expect(response).to.have.a.property('category');
        expect(response).to.have.a.property('engineCapacity');
      });
    });
  });

  // -----------------------|| LISTA MOTOS ||-----------------------
  describe('Busca carros', () => {
    const payloadMotorcycle = coverageMotorcycle;

    describe('Buscando todos as motos', () => {
      beforeEach(async () => {
        await mongoose.connect(MONGO_URI);
        await clearDatabase();
      });

      afterEach(async () => {
        await closeDatabase();
      });

      it('retorna um array com tamanho 2', async () => {
        await Motorcycles.create(payloadMotorcycle);
        await Motorcycles.create(payloadMotorcycle);
        const response = await Motorcycles.find();
        expect(response).to.be.an('array').to.not.be.empty;
        expect(response).to.have.lengthOf(2);
      });

      it('os objetos do array contém as chaves: "model", "year" e "color", "buyValue", "category", "engineCapacity"', async () => {
        await Motorcycles.create(payloadMotorcycle);
        await Motorcycles.create(payloadMotorcycle);
        const response = await Motorcycles.find();
        expect(response[0]).to.have.property('model');
        expect(response[0]).to.have.property('year');
        expect(response[0]).to.have.property('color');
        expect(response[0]).to.have.property('buyValue');
        expect(response[0]).to.have.property('category');
        expect(response[0]).to.have.property('engineCapacity');
        expect(response[1]).to.have.property('model');
        expect(response[1]).to.have.property('year');
        expect(response[1]).to.have.property('color');
        expect(response[1]).to.have.property('buyValue');
        expect(response[1]).to.have.property('category');
        expect(response[1]).to.have.property('engineCapacity');
      });
    });
  });

    describe('Buscando moto por "id"', () => {
      const payloadMotorcycle = validMotorcycle;
      beforeEach(async () => {
        await mongoose.connect(MONGO_URI);
        await clearDatabase();
      });
    
      afterEach(async () => {
        await closeDatabase();
      });

      it('retorna um objeto', async () => {
        await Motorcycles.create(payloadMotorcycle);
        const response = await Motorcycles.findById(validMotorcycle._id);
        expect(response).to.be.an('object')
      });

      it('o objeto contém as chaves: "model", "year" e "color", "buyValue", "category", "engineCapacity"', async () => {
        await Motorcycles.create(payloadMotorcycle);
        const response = await Motorcycles.findById(validMotorcycle._id);
        expect(response).to.have.property('model');
        expect(response).to.have.property('year');
        expect(response).to.have.property('color');
        expect(response).to.have.property('buyValue');
        expect(response).to.have.property('category');
        expect(response).to.have.property('engineCapacity');
      });
    });

  // -----------------------|| ALTERANDO MOTOS ||-----------------------
  describe('Alterando moto', () => {
    const payloadMotorcycle = validMotorcycle;

    beforeEach(async () => {
      await mongoose.connect(MONGO_URI);
      await clearDatabase();
    });
  
    afterEach(async () => {
      await closeDatabase();
    });

    describe('Quando é alterado com sucesso', () => {
      it('retorna um objeto', async () => {
        await Motorcycles.create(payloadMotorcycle);
        const response = await Motorcycles.findOneAndUpdate(validMotorcycle._id);
        expect(response).to.be.an('object');
      });

      it('o objeto possui chaves: "model", "year" e "color", "buyValue", "category", "engineCapacity"', async () => {
        await Motorcycles.create(payloadMotorcycle);
        const response = await Motorcycles.findOneAndUpdate(validMotorcycle._id);
        expect(response).to.have.property('model');
        expect(response).to.have.property('year');
        expect(response).to.have.property('color');
        expect(response).to.have.property('buyValue');
        expect(response).to.have.property('category');
        expect(response).to.have.property('engineCapacity');
      });
    });
  });

  // -----------------------|| DELETANDO MOTOS ||-----------------------
  describe('Deletando moto', () => {
    const payloadMotorcycle = validMotorcycle;

    beforeEach(async () => {
      await mongoose.connect(MONGO_URI);
      await clearDatabase();
    });
  
    afterEach(async () => {
      await closeDatabase();
    });

    describe('Quando é deletado com sucesso', () => {
      it('retorna um array vazio', async () => {
        await Motorcycles.create(payloadMotorcycle);
        await Motorcycles.deleteOne(validMotorcycle._id);
        const response = await Motorcycles.find();
        expect(response).to.be.an('array');
      });
    });
  });
});
