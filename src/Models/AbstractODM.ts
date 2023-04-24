import { isValidObjectId, model, Model, models, Schema, UpdateQuery } from 'mongoose';
import { IModel } from './IModel';
import NotFoundError from '../Errors/not-found-error';
import InvalidParamError from '../Errors/invalid-param-error';

export default abstract class AbstractODM<T> implements IModel<T> {
  private _model: Model<T>;
  private _schema: Schema;
  private entity: string;

  constructor(entity: string, schema: Schema<T>) {
    this.entity = entity;
    this._schema = schema;
    this._model = models[entity] || model(entity, this._schema);
  }

  async create(obj: T): Promise<T> {
    return this._model.create({ ...obj });
  }

  async getAll(): Promise<T[]> {
    return this._model.find();
  }

  async getById(id: string): Promise<T> {
    if (!isValidObjectId(id)) throw new InvalidParamError('Invalid mongo id');
    const vehicle = await this._model.findById(id);
    if (!vehicle) throw new NotFoundError(`${this.entity} not found`);
    return vehicle;
  }

  async update(id: string, vehicle: T): Promise<T> {
    if (!isValidObjectId(id)) throw new InvalidParamError('Invalid mongo id');
    const updatedVehicle = await this._model
      .findByIdAndUpdate(id, vehicle as UpdateQuery<T>, { new: true });
    if (!updatedVehicle) throw new NotFoundError(`${this.entity} not found`);
    return updatedVehicle;
  }
}