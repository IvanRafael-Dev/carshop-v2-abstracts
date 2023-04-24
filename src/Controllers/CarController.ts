import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import Controller from './AbstractController';

export default class CarController extends Controller<ICar, typeof Car> {}
