import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import AbstractService from './AbstractService';

export default class MotorcycleService extends AbstractService<IMotorcycle, typeof Motorcycle> {
  constructor(model: MotorcycleODM) {
    super(model, Motorcycle, 'Car');
  }
}
