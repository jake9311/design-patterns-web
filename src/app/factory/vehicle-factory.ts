import { Vehicle } from './vehicle';
import { Car } from './car';
import { Truck } from './truck';
import { Bike } from './bike';

export class VehicleFactory {
  static createVehicle(type: string, options: any): Vehicle {
    switch (type) {
      case 'car':
        return new Car(options.doors, options.engineSize);
      case 'truck':
        return new Truck(options.weightCapacity, options.axles);
      case 'bike':
        return new Bike(options.engineType, options.offRoad);
      default:
        throw new Error('Unknown vehicle type');
    }
  }
}
