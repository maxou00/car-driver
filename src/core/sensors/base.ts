import { Car } from "../car";

export abstract class SensorBase {
    car!: Car;

    constructor(car: Car) {
        this.car = car;
    }
}