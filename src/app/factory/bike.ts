import { Vehicle } from './vehicle';

export class Bike implements Vehicle {
  constructor(private engineType: string, private offRoad: boolean) {}

  getSpecs(): string {
    return ` Bike - Engine: ${this.engineType}, Off-road: ${this.offRoad ? 'Yes' : 'No'}`;
  }

  drive(): string {
    return 'Riding a bike ';
  }
}
