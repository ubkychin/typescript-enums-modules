import { Car } from './Car';
 
export class Ute extends Car {
  carryingCapacity: number;

  constructor(carryCapacity: number, rego: string) {
    super(rego);
    this.carryingCapacity = carryCapacity;
  }
}