import { coverageCar } from '../__tests__/utils/CarsMock';
import CarControllers from '../src/controllers/CarController';
import connectToDatabase from '../src/connection';
import { clearDatabase, closeDatabase } from '../__tests__/utils/db';

const carController = new CarControllers();

beforeAll(async () => {
  await connectToDatabase('mongodb://localhost:27017/CarShopTests');
  await clearDatabase();
});

afterAll(async () => {
  await closeDatabase();
});

describe('Realizando testes na controller de carController', () => {
  describe('Insere novo carro', () => {
    describe('quando é inserido com sucesso', () => {
      const mockResponse: any = {};
      mockResponse.json = jest.fn();
      mockResponse.status = jest.fn().mockReturnValue(mockResponse);

      const mockRequest: any = { body: coverageCar };

      it('é retornado o status 201', async () => {
        await carController.create(mockRequest, mockResponse);

        expect(mockResponse.status).toHaveBeenCalledTimes(1);
        expect(mockResponse.status).toHaveBeenCalledWith(201);
        expect(mockResponse.json).toHaveBeenCalledTimes(1);
        expect(mockResponse.json).toHaveBeenCalledWith(
          expect.objectContaining(coverageCar)
        );
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
