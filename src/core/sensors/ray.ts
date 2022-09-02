import { Car } from "../car";
import Point from "../point";
import Road from "../road";
import Segment from "../segment";
import { lerp } from "../utils/lerp";
import { SensorBase } from "./base";

export default class RaySensor extends SensorBase {
    rayCount = 4;
    rayLength = 100; // 100m;
    raySpread = Math.PI / 4; //45deg;

    road!: Road;

    rays: Segment[] = [];

    constructor(car: Car) {
        super(car);
    }

    update(road: Road) {
        this.road = road;
        this.#castRays();
    }

    #castRays() {
        this.rays = [];
        for (let i = 0; i < this.rayCount; i++) {
            const angle = lerp(
                this.raySpread / 2,
                -this.raySpread / 2,
                this.rayCount === 1 ? 0.5 : i / (this.rayCount - 1)
            ) + this.car.angle;

            let start = new Point(this.car.x, this.car.y);
            let end = new Point(
                start.x - Math.sin(angle) * this.rayLength,
                start.y - Math.cos(angle) * this.rayLength
            );

            let seg = new Segment(start, end);
            seg.strokeStyle = "yellow";

            this.rays.push(seg);
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        this.rays.forEach((ray) => {
            ray.draw(ctx);
        })
    }
}