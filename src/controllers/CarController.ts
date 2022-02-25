import { Request, Response } from 'express';
import Controller, { ResponseError } from '.';
import CarService from '../services/CarService';
import { Car } from '../interfaces/CarInterface';
import CarSchema from '../validations/CarValidation';

export default class CarController extends Controller<Car> {
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
      const cars = await this.service.create(body);
      if (!cars) return res.status(404).json({ error: this.notFoundError });
      return res.status(201).json(cars);
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
      const cars = await this.service.readOne(id);
      if (!cars) return res.status(404).json({ error: this.notFoundError });
      if ('error' in cars) return res.status(400).json(cars);
      return res.status(200).json(cars);
    } catch (error) {
      return res.status(500).json({ error: this.internalError });
    }
  };

  update = async (
    req: Request<{ id: string; }>,
    res: Response<Car | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    // if (!id) return res.status(400).json({ error: this.requiredIdError });

    const { body } = req;
    const parsed = CarSchema.safeParse(body);

    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error });
    }

    try {
      const lens = await this.service.update(id, body);
      if (!lens) return res.status(404).json({ error: this.notFoundError });
      console.log(lens)
      if ('error' in lens) return res.status(400).json(lens);
      return res.json(body);
    } catch (err) {
      return res.status(500).json({ error: this.internalError });
    }
  };
}
