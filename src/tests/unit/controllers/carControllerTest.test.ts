import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');

import App from '../../../app';
import CarService from '../../../services/CarService';
import CarController from '../../../controllers/CarController';
import { coverageCar } from '../../utils/CarsMock';
import { Car } from '../../../interfaces/CarInterface';
import CustomRouter from '../../../routes/Router'

const carController = new CarController();

chai.use(chaiHttp);

const { expect } = chai;

const server = new App();

const carRouter = new CustomRouter<Car>();
carRouter.addRoute(carController);
server.addRouter(carRouter.router);

const app = server.app;

describe('Realiza testes na camada de controller', () => {

  before(async () => {
    sinon
      .stub(CarService.prototype, 'create')
      .resolves(coverageCar as Car);
      sinon
      .stub(CarService.prototype, 'read')
      .resolves([coverageCar] as Car[]);
  });

  after(()=>{
    (CarService.prototype.create as sinon.SinonStub).restore();
    (CarService.prototype.read as sinon.SinonStub).restore();
  })

  it('Cria um novo carro', async () => {
    const req = await chai
      .request(app)
      .post('/cars')
      .send(coverageCar)

    expect(req).to.have.status(201)
    expect(req.body).to.contain(coverageCar)
  });

  it('Realiza a leitura dos carros no banco', async () => {
    const result = await chai
    .request(app)
    .get('/cars')
    // deep.include found here => https://www.chaijs.com/api/bdd/#method_deep
    expect(result.body).to.deep.include(coverageCar)
  });
});