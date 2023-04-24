import { Request, Response, NextFunction } from 'express';

import { IService } from '../Services/IService';

export default abstract class Controller<T, M extends new (arg: T) => InstanceType<M>> {
  protected _service: IService<T, M>; 
  constructor(service: IService<T, M>) {
    this._service = service;
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const vehicle = await this._service.create(req.body);
      return res.status(201).json(vehicle);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const vehicles = await this._service.getAll();
      return res.status(200).json(vehicles);
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const vehicle = await this._service.getById(req.params.id);
      return res.status(200).json(vehicle);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const updated = await this._service.update(req.params.id, req.body);
      return res.status(200).json(updated);
    } catch (error) {
      next(error);
    }
  }
}