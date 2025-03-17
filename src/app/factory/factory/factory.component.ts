import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Vehicle } from '../vehicle';
import { VehicleFactory } from '../vehicle-factory';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-factory',
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './factory.component.html',
  styleUrl: './factory.component.css'
})
export class FactoryComponent {

  vehicleType: string = '';
  options: any = {};
  vehicle: Vehicle | null = null;

  createVehicle() {
    try{
    this.vehicle = VehicleFactory.createVehicle(this.vehicleType, this.options);
    } catch (error) {
      alert('Error: ' +(error as Error).message);
    }
}}
