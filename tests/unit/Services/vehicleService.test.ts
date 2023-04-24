import sinon from 'sinon';
import { expect } from 'chai';
import CarODM from '../../../src/Models/CarODM';
import CarService from '../../../src/Services/CarService';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';
import { validCarMock, validCarMockWithId, validCarsMockWithId } from '../../mocks/carsMocks';

const makeSut = () => {
  const carModel = new CarODM();
  const carService = new CarService(carModel);
  return carService;
};

describe('CarService', function () {
  afterEach(sinon.restore);

  it('deve retornar uma instância do domínio "Car"', async function () {
    sinon.stub(CarODM.prototype, 'create').resolves(validCarMockWithId);
    const carService = makeSut();
    const newCar = await carService.create(validCarMock);
    expect(newCar).to.be.an.instanceOf(Car);
  });

  it('cria um carro com sucesso', async function () {
    sinon.stub(CarODM.prototype, 'create').resolves(validCarMockWithId);
    const carService = makeSut();
    const newCar = await carService.create(validCarMock);
    expect(newCar).to.deep.equal(validCarMockWithId);
  });

  it('retorna todos os registros intanciados', async function () {
    sinon.stub(CarODM.prototype, 'getAll').resolves(validCarsMockWithId);
    const carService = makeSut();
    const cars = await carService.getAll();
    expect(cars).to.be.an('array');
    cars.every((car) => expect(car).to.be.an.instanceOf(Car));
  });

  it('retorna um registro por id', async function () {
    sinon.stub(CarODM.prototype, 'getById').resolves(validCarMockWithId);
    const carService = makeSut();
    const car = await carService.getById('valid_id');
    expect(car).to.be.an.instanceOf(Car);
  });

  it('atualiza um registro por id', async function () {
    sinon.stub(CarODM.prototype, 'update').resolves(validCarMockWithId);
    const carService = makeSut();
    const updatedCar = await carService.update('valid_id', {} as ICar);
    expect(updatedCar).to.be.deep.equal(validCarMockWithId);
  });
});
