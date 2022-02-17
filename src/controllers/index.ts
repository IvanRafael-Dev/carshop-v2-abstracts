import { Request, Response } from 'express';
import Service from '../services/index';

export type ResponseError = {
  error: unknown;
};

abstract class Controller<T> {
  abstract route: string;

  protected internalError = 'Internal Server Error';

  protected notFoundError = 'Object not found';

  protected requiredIdError = 'Id is required';

  constructor(protected service: Service<T>) { }

  abstract create(
    req: Request<T>,
    res: Response<T | ResponseError>,
  ): Promise<typeof res>;

  read = async (
    _req: Request,
    res: Response<T[] | ResponseError>,
  ): Promise<typeof res> => {
    try {
      const objs = await this.service.read();
      return res.json(objs);
    } catch (err) {
      return res.status(500).json({ error: this.internalError });
    }
  };

  abstract readOne(
    req: Request<{ id: string; }>,
    res: Response<T | ResponseError>
  ): Promise<typeof res>;

  abstract update(
    req: Request<{ id: string; }, unknown, T>,
    res: Response<T | ResponseError>
  ): Promise<typeof res>;

  delete = async (
    req: Request<{ id: string; }>,
    res: Response<T | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: this.requiredIdError });
    req.res?.status(200);

    try {
      const obj = await this.service.delete(id);
      if (obj) return res.json(obj);
      return res.status(404).json({ error: this.notFoundError });
    } catch (err) {
      return res.status(500).json({ error: this.internalError });
    }
  };
}
export default Controller;