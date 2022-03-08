import { expect } from 'chai';
import mongoose from 'mongoose';

import { clearDatabase, closeDatabase } from '../src/__tests__/utils/db';
import { validCar, coverageCar } from '../src/__tests__/utils/CarsMock';
import { CarRequest, CarResponse } from '../src/protocols/http-protocol';

import CarControllers from '../src/controllers/CarController';
import { Car } from '../src/interfaces/CarInterface'

const carController = new CarControllers();

const databaseName = 'CarShop';

const MONGO_URI = process.env.MONGO_URI
  || `mongodb://localhost:27017/${databaseName}`;

describe('Realizando testes na controller de carController', () => {
  // -----------------------|| CADASTRANDO CARROS ||-----------------------
    describe('Insere novo carro', () => {
      describe('quando é inserido com sucesso', () => {
        const payloadCar = coverageCar;
        const req: CarRequest<Car> = { body: payloadCar };
        const res: CarResponse<Car> = { statusCode: 201 }
        beforeEach(async () => {
          await mongoose.connect(MONGO_URI);
          await clearDatabase();
        });
      
        afterEach(async () => {
          await closeDatabase();
        });

      it('é retornado o status 201', async () => {
        await carController.create(req, res);

        expect(res.statusCode).to.be.equal(true);
      });

    });
  });

//   // -----------------------|| LISTANDO CARROS ||-----------------------
//   describe('Buscando carros', () => {
//     describe('quando é buscado todos carros', () => {
//       const res = {};
//       const req = {};

//       before(() => {
//         res.status = sinon.stub().returns(res);
//         res.json = sinon.stub().returns([{ id: 1, ...payloadProduct }]);
//         sinon.stub(productSrv, 'getAll').resolves([{ id: 1, ...payloadProduct }]);
//       });

//       after(() => {
//         productSrv.getAll.restore();
//       });

//       it('é retornado o status 200', async () => {
//         await carController.getAll(req, res);

//         expect(res.status.calledWith(200)).to.be.equal(true);
//       });
//     });

//     describe('quando é buscado carro por id', () => {
//       const res = {};
//       const req = {};

//       before(() => {
//         req.params = { id: VALID_ID };
//         res.status = sinon.stub().returns(res);
//         res.json = sinon.stub().returns({ id: 1, ...payloadProduct });
//         sinon.stub(productSrv, 'getById').resolves({ id: 1, ...payloadProduct });
//       });

//       after(() => {
//         productSrv.getById.restore();
//       });

//       it('é retornado o status 200', async () => {
//         await carController.getById(req, res);

//         expect(res.status.calledWith(200)).to.be.equal(true);
//       });
//     });
//   });

//   // -----------------------|| ALTERANDO PRODUTO ||-----------------------
//   describe('Alterando novo carro', () => {
//     describe('quando é Alterado com sucesso', () => {
//       const res = {};
//       const req = {};

//       before(() => {
//         req.params = { id: VALID_ID };
//         req.body = payloadProduct;
//         res.status = sinon.stub().returns(res);
//         res.json = sinon.stub().returns({ id: 1, ...payloadProduct });
//         sinon.stub(productSrv, 'update').resolves({ id: 1, ...payloadProduct });
//       });

//       after(() => {
//         productSrv.update.restore();
//       });

//       it('é retornado o status 200', async () => {
//         await carController.update(req, res);

//         expect(res.status.calledWith(200)).to.be.equal(true);
//       });

//     });
//   });

//    // -----------------------|| DELETANDO CARRO ||-----------------------
//    describe('Deletando carros', () => {
//     describe('quando é deletado um carro', () => {
//       const res = {};
//       const req = {};

//       before(() => {
//         req.params = { id: VALID_ID };
//         res.status = sinon.stub().returns(res);
//         res.json = sinon.stub().returns({ id: 1, ...payloadProduct });
//         sinon.stub(productSrv, 'drop').resolves([{ id: 1, ...payloadProduct }]);
//       });

//       after(() => {
//         productSrv.drop.restore();
//       });

//       it('é retornado o status 204', async () => {
//         await carController.drop(req, res);

//         expect(res.status.calledWith(204)).to.be.equal(true);
//       });
//     });
//   });
// });
});