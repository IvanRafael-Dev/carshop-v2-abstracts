import { Request, Response } from 'express';
import Controller, { ResponseError } from '.';
import TruckService from '../services/TruckService';
import { Truck } from '../interfaces/TruckInterface';
import TruckSchema from '../validations/TruckValidation';

class TruckController extends Controller<Truck> {
  private $route: string;

  constructor(
    service = new TruckService(),
    route = '/trucks',
  ) {
    super(service);
    this.$route = route;
  }

  get route() { return this.$route; }

  create = async (
    req: Request<Truck>,
    res: Response<Truck | ResponseError>,
  ): Promise<typeof res> => {
    const { body }: { body: Truck } = req;

    const parsed = TruckSchema.safeParse(body);
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error });
    }

    try {
      const trucks = await this.service.create(body);
      if (!trucks) return res.status(404).json({ error: this.notFoundError });
      return res.status(201).json(trucks);
    } catch (err) {
      return res.status(500).json({ error: this.internalError });
    }
  };

  readOne = async (
    req: Request<{ id: string; }>,
    res: Response<Truck | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;

    try {
      const trucks = await this.service.readOne(id);
      if (!trucks) return res.status(404).json({ error: this.notFoundError });
      if ('error' in trucks) return res.status(400).json(trucks);
      return res.json(trucks);
    } catch (error) {
      return res.status(500).json({ error: this.internalError });
    }
  };

  update = async (
    req: Request<{ id: string; }>,
    res: Response<Truck | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: this.requiredIdError });

    const { body } = req;
    const parsed = TruckSchema.safeParse(body);

    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error });
    }

    try {
      const trucks = await this.service.update(id, body);
      if (!trucks) return res.status(404).json({ error: this.notFoundError });
      return res.json(body);
    } catch (err) {
      return res.status(500).json({ error: this.internalError });
    }
  };
}

export default TruckController;