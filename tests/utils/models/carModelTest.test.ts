import { expect } from 'chai';
import mongoose from 'mongoose';

import { Cars } from '../../../src/models/CarModel';

import { validCar } from '../../sources/CarsMock';

const beforeAndAfter = (payload: object) => {
  beforeAll(async () => {
    (await mongoose.connect('mongodb://localhost:27017/CarShop')).Promise(payload);
  });

  afterEach(async () => {
    mongoose.connection.close();
    mongoose.disconnect();
  });
};

describe('Realiza testes na model de Carros', () => {

  // -----------------------|| CADASTRO DE CARROS ||-----------------------
  describe('Insere novo produto', () => {
    const payloadProduct = validCar;

    beforeAndAfter(payloadProduct);

    describe('Quando é inserido com sucesso', () => {
      it('retorna um objeto', async () => {
        const response = await (payloadProduct);
        expect(response).to.be.an('object');
      });

      it('o objeto possui chaves: "id", "name" e "quantity"', async () => {
        const response = await Cars.create(payloadProduct);
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
    const payloadProduct = [validCar, validCar];

    describe('Buscando todos os carros', () => {
      beforeAndAfter(payloadProduct);

      it('retorna um array com tamanho 2', async () => {
        const response = await Cars.find();
        expect(response).to.be.an('array').to.not.be.empty;
        expect(response).to.have.lengthOf(2);
      });

      it('os objetos do array contém as chaves: "model", "year" e "color", "status", "buyValue", "seatsQty", "doorsQty"', async () => {
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
      const payloadProduct = [validCar, validCar];
      beforeAndAfter(payloadProduct);

      it('retorna um objeto', async () => {
        const response = await Cars.findById(validCar._id);
        expect(response).to.be.an('object')
      });

      it('o objeto contém as chaves: "model", "year" e "color", "status", "buyValue", "seatsQty", "doorsQty"', async () => {
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
    const payloadProduct = validCar;

    beforeAndAfter(payloadProduct);

    describe('Quando é alterado com sucesso', () => {
      it('retorna um objeto', async () => {
        const response = await Cars.findOneAndUpdate(validCar._id);
        expect(response).to.be.an('object');
      });

      it('o objeto possui chaves: "model", "year" e "color", "status", "buyValue", "seatsQty", "doorsQty"', async () => {
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
    const payloadProduct = validCar;

    beforeAndAfter(payloadProduct);

    describe('Quando é deletado com sucesso', () => {
      it('retorna um objeto', async () => {
        const response = await Cars.deleteOne(validCar._id);
        expect(response).to.be.an('array');
      });

      it('o objeto possui chaves: "model", "year" e "color", "status", "buyValue", "seatsQty", "doorsQty"', async () => {
        const response = await Cars.deleteOne(validCar._id);
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
});
