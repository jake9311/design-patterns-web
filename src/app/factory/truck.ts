import { Vehicle } from './vehicle';

export class Truck implements Vehicle {
  constructor(private weightCapacity: number, private axles: number) {}

  getSpecs(): string {
    return ` Truck - Capacity: ${this.weightCapacity}kg, Axles: ${this.axles}`;
  }

  drive(): string {
    return 'Driving a truck ';
  }
}
