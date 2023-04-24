import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import Controller from './AbstractController';

export default class MotorcycleController extends Controller<IMotorcycle, typeof Motorcycle> {}
