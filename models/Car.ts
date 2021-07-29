import { Make } from './Make';

export class Car {
  rego: string;
  speed: number;
  make: Make;

  constructor(rego: string) {
    this.rego = rego;
    this.speed = 0;
    this.make = Make.Ford;
  }
  //don't allow speed to go over 120
  accelerate(): void {
    // if(this.speed <= 120) {
    //   this.speed += 10;
    // } else {
    //   this.speed = 120;
    // }

    this.speed <= 120 ? (this.speed += 10) : (this.speed = 120);
  }
}
