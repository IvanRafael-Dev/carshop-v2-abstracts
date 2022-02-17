import { Request, Response } from 'express';
import Controller, { ResponseError } from '.';
import VehicleService from '../services/VehicleService';
import { Vehicle } from '../interfaces/VehicleInteface';
import VehicleSchema from '../validations/VehicleValidation';

class VehicleController extends Controller<Vehicle> {
  private $route: string;

  constructor(
    service = new VehicleService(),
    route = '/vehicles',
  ) {
    super(service);
    this.$route = route;
  }

  get route() { return this.$route; }

  create = async (
    req: Request<Vehicle>,
    res: Response<Vehicle | ResponseError>,
  ): Promise<typeof res> => {
    const { body }: { body: Vehicle; } = req;

    const parsed = VehicleSchema.safeParse(body);
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
    res: Response<Vehicle | ResponseError>,
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
    res: Response<Vehicle | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: this.requiredIdError });

    const { body } = req;
    const parsed = VehicleSchema.safeParse(body);

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

export default VehicleController;