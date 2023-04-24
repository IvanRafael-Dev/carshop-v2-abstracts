import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle {
  protected id?: string;
  protected color: string;
  protected year: number;
  protected model: string;
  protected buyValue: number;
  private status = false;

  constructor(vehicle: IVehicle) {
    this.id = vehicle.id;
    this.color = vehicle.color;
    this.year = vehicle.year;
    this.model = vehicle.model;
    this.buyValue = vehicle.buyValue;
    if (vehicle.status) this.status = vehicle.status;
  }
}