const sinon = require('sinon');
import { expect } from 'chai';

const connection = require('../../src/models/connection');
const CarModel = require('../../src/models/CarModel');

const VALID_ID = 1;
const INVALID_ID = 99999;

const beforeAndAfter = (payload: object) => {
  before(async () => {
    sinon.stub(connection, 'execute')
      .resolves([payload]);
  });

  after(async () => {
    connection.execute.restore();
  });
};

describe('Realiza testes na model de Carros', () => {

  // -----------------------|| CADASTRO DE CARROS ||-----------------------
  describe('Insere novo produto', () => {
    const payloadProduct = {
      model: 'Uno da Escada',
      year: 1963,
      color: 'red',
      status: true,
      buyValue: 3500,
      seatsQty: 2,
      doorsQty: 2
    };

    beforeAndAfter(payloadProduct);

    describe('Quando é inserido com sucesso', () => {
      it('retorna um objeto', async () => {
        const response = await (payloadProduct);
        expect(response).to.be.an('object');
      });

      it('o objeto possui chaves: "id", "name" e "quantity"', async () => {
        const response = await CarModel.create(payloadProduct);
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
    const payloadProduct = [
      {
        model: 'Uno da Escada',
        year: 1963,
        color: 'red',
        status: true,
        buyValue: 3500,
        seatsQty: 2,
        doorsQty: 2
      },
      {
        model: 'Fiat Palio',
        year: 2010,
        color: 'black',
        status: true,
        buyValue: 13500,
        seatsQty: 4,
        doorsQty: 4
      }
    ];

    describe('Buscando todos os carros', () => {
      beforeAndAfter(payloadProduct);

      it('retorna um array com tamanho 2', async () => {
        const response = await CarModel.read();
        expect(response).to.be.an('array').to.not.be.empty;
        expect(response).to.have.lengthOf(2);
      });

      it('os objetos do array contém as chaves: "id", "name" e "quantity"', async () => {
        const response = await CarModel.getAll();
        expect(response[0]).to.have.property('id');
        expect(response[0]).to.have.property('name');
        expect(response[0]).to.have.property('quantity');
        expect(response[1]).to.have.property('id');
        expect(response[1]).to.have.property('name');
        expect(response[1]).to.have.property('quantity');
      });
    });

    describe('Buscando produto por "id"', () => {
      beforeAndAfter(payloadProduct);

      it('retorna um objeto', async () => {
        const response = await CarModel.getById(VALID_ID);
        expect(response).to.be.an('object')
      });

      it('o objeto contém as chaves: "id", "name" e "quantity"', async () => {
        const response = await CarModel.getById(VALID_ID);
        expect(response).to.have.property('id');
        expect(response).to.have.property('name');
        expect(response).to.have.property('quantity');
      });
    });

    describe('Buscando produto por "name"', () => {
      before(async () => {
        sinon.stub(connection, 'execute')
          .resolves([{
            id: 1,
            name: 'produto A',
            quantity: 10
          }]);
      });

      after(async () => {
        connection.execute.restore();
      });

      it('retorna um objeto', async () => {
        const response = await CarModel.getByName('Example name');
        expect(response).to.be.an('object')
      });

      it('o objeto contém as chaves: "id", "name" e "quantity"', async () => {
        const response = await CarModel.getByName('Example name');
        expect(response).to.have.property('id');
        expect(response).to.have.property('name');
        expect(response).to.have.property('quantity');
      });
    });
  });

  // -----------------------|| ALTERANDO PRODUTOS ||-----------------------
  describe('Alterando produto', () => {
    const payloadProduct = {
      id: 1,
      name: 'Example product',
      quantity: 1,
    };

    beforeAndAfter(payloadProduct);

    describe('Quando é alterado com sucesso', () => {
      it('retorna um objeto', async () => {
        const [response] = await CarModel.update(VALID_ID, 'Example product', 10);
        expect(response).to.be.an('object');
      });

      it('o objeto possui chaves: "id", "name" e "quantity"', async () => {
        const [response] = await CarModel.update(VALID_ID, 'Example product', 10);
        expect(response).to.have.a.property('id');
        expect(response).to.have.a.property('name');
        expect(response).to.have.a.property('quantity');
      });
    });
  });

  // -----------------------|| DELETANDO PRODUTOS ||-----------------------
  describe('Deletando produto', () => {
    const payloadProduct = {
      id: 1,
      name: 'Example product',
      quantity: 1,
    };

    beforeAndAfter(payloadProduct);

    describe('Quando é deletado com sucesso', () => {
      it('retorna um objeto', async () => {
        const response = await CarModel.drop(VALID_ID);
        expect(response).to.be.an('array');
      });

      it('o objeto possui chaves: "id", "name" e "quantity"', async () => {
        const [response] = await CarModel.drop(VALID_ID);

        expect(response).to.have.a.property('id');
        expect(response).to.have.a.property('name');
        expect(response).to.have.a.property('quantity');
      });
    });
  });
});

function before(arg0: () => Promise<void>) {
  throw new Error('Function not implemented.')
}


function after(arg0: () => Promise<void>) {
  throw new Error('Function not implemented.')
}
