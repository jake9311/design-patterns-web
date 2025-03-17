import { Vehicle } from './vehicle';

export class Car implements Vehicle {
  constructor(private doors: number, private engineSize: number) {}

  getSpecs(): string {
    return ` Car - Doors: ${this.doors}, Engine: ${this.engineSize}L`;
  }

  drive(): string {
    return 'Driving a car ';
  }
}
