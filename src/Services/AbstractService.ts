import { IModel } from '../Models/IModel';
import { IService } from './IService';

export default abstract class AbstractService<
  T, M extends new (arg: T) => InstanceType<M>> implements IService<T, M> {
  protected _model: IModel<T>;
  protected Domain: M;
  protected domainName: string;

  constructor(model: IModel<T>, Domain: M, domainName: string) {
    this._model = model;
    this.Domain = Domain;
    this.domainName = domainName;
  }

  async create(obj: T): Promise<InstanceType<M>> {
    const newVehicle = await this._model.create(obj);
    return new this.Domain(newVehicle);
  }

  async getAll(): Promise<InstanceType<M>[]> {
    const vehicles = await this._model.getAll();
    return vehicles.map((vehicle) => new this.Domain(vehicle));
  }

  async getById(id: string): Promise<InstanceType<M>> {
    const vehicle = await this._model.getById(id);
    return new this.Domain(vehicle);
  }

  async update(id: string, vehicle: T): Promise<InstanceType<M>> {
    const updatedVehicle = await this._model.update(id, vehicle);
    return new this.Domain(updatedVehicle);
  } 
}