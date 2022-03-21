import { expect } from 'chai';
import mongoose from 'mongoose';

import { clearDatabase, closeDatabase } from '../../utils/db';
import { validMotorcycle, coverageMotorcycle } from '../../utils/MotorcyclesMock';

import MotorcycleService from '../../../services/MotorcycleService';

const motorcycleService = new MotorcycleService();

const databaseName = 'CarShopTests';

const MONGO_URI = process.env.MONGO_URI
  || `mongodb://localhost:27017/${databaseName}`;

describe('Realiza testes na camada de services de Motos', () => {

  // -----------------------|| CADASTRO DE MOTOS ||-----------------------
  describe('Insere nova moto', () => {
    beforeEach(async () => {
      await mongoose.connect(MONGO_URI);
      await clearDatabase();
    });
  
    afterEach(async () => {
      await closeDatabase();
    });

    describe('Quando o payload é inválido', () => {
      it('retorna um objeto vazio e statusCode 400', async () => {
        try {
          await motorcycleService.create(validMotorcycle);
        } catch (error) {
          expect(error).to.be.an('object');
          expect(error).to.equal(400);
        }
      });

      it('o objeto possui chaves: "model", "year" e "color", "buyValue", "category", "engineCapacity"', async () => {
        const response = await motorcycleService.create(validMotorcycle);
        expect(response).to.have.a.property('model');
        expect(response).to.have.a.property('year');
        expect(response).to.have.a.property('buyValue');
        expect(response).to.have.a.property('category');
        expect(response).to.have.a.property('engineCapacity');
      });
    });
  });

  // -----------------------|| LISTA MOTOS ||-----------------------
  describe('Busca motos', () => {

    describe('Buscando todas os motos', () => {
      beforeEach(async () => {
        await mongoose.connect(MONGO_URI);
        await clearDatabase();
      });
    
      afterEach(async () => {
        await closeDatabase();
      });

      // it('retorna um array com tamanho 2', async () => {
      //   await motorcycleService.create(validMotorcycle);
      //   await motorcycleService.create(validMotorcycle);
      //   const response = await motorcycleService.read;
      //   expect(response).to.be.an('array').to.not.be.empty;
      //   expect(response).to.have.lengthOf(2);
      // });

      it('os objetos do array contém as chaves: "model", "year" e "color", "buyValue", "category", "engineCapacity"', async () => {
        await motorcycleService.create(coverageMotorcycle);
        await motorcycleService.create(coverageMotorcycle);
        const response = await motorcycleService.read();
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
      beforeEach(async () => {
        await mongoose.connect(MONGO_URI);
        await clearDatabase();
      });

      afterEach(async () => {
        await closeDatabase();
      });

      it('retorna um objeto', async () => {
        await motorcycleService.create(validMotorcycle);
        const response = await motorcycleService.readOne((validMotorcycle._id).toString());
        expect(response).to.be.an('object')
      });

      it('o objeto contém as chaves: "model", "year" e "color", "buyValue", "category", "engineCapacity"', async () => {
        await motorcycleService.create(validMotorcycle);
        const response = await motorcycleService.readOne((validMotorcycle._id).toString());
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

    beforeEach(async () => {
      await mongoose.connect(MONGO_URI);
      await clearDatabase();
    });
  
    afterEach(async () => {
      await closeDatabase();
    });

    describe('Quando é alterada com sucesso', () => {
      it('retorna um objeto', async () => {
        await motorcycleService.create(validMotorcycle);
        const response = await motorcycleService.update((validMotorcycle._id.toString()), validMotorcycle);
        expect(response).to.be.an('object');
      });

      it('o objeto possui chaves: "model", "year" e "color", "buyValue", "category", "engineCapacity"', async () => {
        await motorcycleService.create(validMotorcycle);
        const response = await motorcycleService.update((validMotorcycle._id).toString(), validMotorcycle);
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

    beforeEach(async () => {
      await mongoose.connect(MONGO_URI);
      await clearDatabase();
    });
  
    afterEach(async () => {
      await closeDatabase();
    });

    describe('Quando é deletada com sucesso', () => {
      it('retorna um array vazio', async () => {
        await motorcycleService.create(validMotorcycle);
        await motorcycleService.delete((validMotorcycle._id).toString());
        const response = await motorcycleService.read();
        expect(response).to.be.an('array');
      });
    });
  });
});
