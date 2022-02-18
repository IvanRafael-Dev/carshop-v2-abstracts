import { Request, Response } from 'express';
import Controller, { ResponseError } from '.';
import CarService from '../services/CarService';
import { Car } from '../interfaces/CarInterface';
import CarSchema from '../validations/CarValidation';

class CarController extends Controller<Car> {
  private $route: string;

  constructor(
    service = new CarService(),
    route = '/cars',
  ) {
    super(service);
    this.$route = route;
  }

  get route() { return this.$route; }

  create = async (
    req: Request<Car>,
    res: Response<Car | ResponseError>,
  ): Promise<typeof res> => {
    const { body }: { body: Car } = req;

    const parsed = CarSchema.safeParse(body);
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error });
    }

    try {
      const lens = await this.service.create(body);
      if (!lens) return res.status(404).json({ error: this.notFoundError });
      return res.json(lens);
    } catch (err) {
      return res.status(500).json({ error: this.internalError });
    }
  };

  readOne = async (
    req: Request<{ id: string; }>,
    res: Response<Car | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;

    try {
      const lens = await this.service.readOne(id);
      if (!lens) return res.status(404).json({ error: this.notFoundError });
      return res.json(lens);
    } catch (error) {
      return res.status(500).json({ error: this.internalError });
    }
  };

  update = async (
    req: Request<{ id: string; }>,
    res: Response<Car | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: this.requiredIdError });

    const { body } = req;
    const parsed = CarSchema.safeParse(body);

    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error });
    }

    try {
      const lens = await this.service.update(id, body);
      if (!lens) return res.status(404).json({ error: this.notFoundError });
      return res.json(lens);
    } catch (err) {
      return res.status(500).json({ error: this.internalError });
    }
  };
}

export default CarController;