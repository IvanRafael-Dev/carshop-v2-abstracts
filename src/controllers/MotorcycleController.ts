import { Request, Response } from 'express';
import Controller, { ResponseError } from '.';
import MotorcycleService from '../services/MotorcycleService';
import { Motorcycle } from '../interfaces/MotorcycleInterface';
import MotorcycleSchema from '../validations/MotorcycleValidation';

class MotorcycleController extends Controller<Motorcycle> {
  private $route: string;

  constructor(
    service = new MotorcycleService(),
    route = '/motorcycles',
  ) {
    super(service);
    this.$route = route;
  }

  get route() { return this.$route; }

  create = async (
    req: Request<Motorcycle>,
    res: Response<Motorcycle | ResponseError>,
  ): Promise<typeof res> => {
    const { body }: { body: Motorcycle } = req;

    const parsed = MotorcycleSchema.safeParse(body);
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error });
    }

    try {
      const motorcycle = await this.service.create(body);
      if (!motorcycle) {
        return res.status(404).json({ error: this.notFoundError });
      }
      return res.status(201).json(motorcycle);
    } catch (err) {
      return res.status(500).json({ error: this.internalError });
    }
  };

  readOne = async (
    req: Request<{ id: string; }>,
    res: Response<Motorcycle | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;

    try {
      const motorcycle = await this.service.readOne(id);
      if (!motorcycle) {
        return res.status(404).json({ error: this.notFoundError });
      }
      if ('error' in motorcycle) {
        return res.status(400).json(motorcycle);
      }
      return res.status(200).json(motorcycle);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: this.internalError });
    }
  };

  update = async (
    req: Request<{ id: string; }>,
    res: Response<Motorcycle | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: this.requiredIdError });

    const { body } = req;
    const parsed = MotorcycleSchema.safeParse(body);

    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error });
    }

    try {
      const motorcycle = await this.service.update(id, body);
      if (!motorcycle) {
        return res.status(404).json({ error: this.notFoundError });
      } return res.json(motorcycle);
    } catch (err) {
      return res.status(500).json({ error: this.internalError });
    }
  };
}

export default MotorcycleController;