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

describe('Seu teste', () => {

  let chaiHttpResponse;

  before(async () => {
    sinon
      .stub(CarService.prototype, 'create')
      .resolves(coverageCar as Car);
  });

  after(()=>{
    (CarService.prototype.create as sinon.SinonStub).restore();
  })

  it('Cria um novo carro', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/cars')
      .send(coverageCar)

    expect(chaiHttpResponse).to.have.status(201)
    expect(chaiHttpResponse.body).to.contain(coverageCar)
  });

  // it('Seu sub-teste', () => {
  //   expect(false).to.be.eq(true);
  // });
});