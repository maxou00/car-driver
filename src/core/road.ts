import Border from "./border";
import Point from "./point";
import { lerp } from "./utils/lerp";

export default class Road {
    x: number;
    width: number;
    lanes: number;
    left: number;
    right: number;
    top: number;
    bottom: number;

    borders: Border[];

    constructor(x: number, width: number, lanes: number) {
        this.x = x;
        this.width = width;
        this.lanes = lanes;
        const inf = 1000000;
        this.top = -inf;
        this.bottom = inf;

        this.left = x - width / 2;
        this.right = x + width / 2;

        this.borders = [
            new Border(new Point(this.left, this.top), new Point(this.left, this.bottom)),
            new Border(new Point(this.right, this.top), new Point(this.right, this.bottom))
        ]
    }

    get laneWidth() {
        return this.width / this.lanes;
    }

    getLaneCenter(index: number) {
        return this.left + (this.laneWidth / 2) + Math.max(0, Math.min(index, this.lanes - 1)) * this.laneWidth;
    }

    draw(ctx: CanvasRenderingContext2D) {
        for (let i = 1; i <= this.lanes - 1; i++) {
            let x = lerp(this.left, this.right, i / this.lanes);
            ctx.setLineDash([20, 10]);
            ctx.lineWidth = 2;
            ctx.strokeStyle = "gray";

            ctx.beginPath();
            ctx.moveTo(x, this.top);
            ctx.lineTo(x, this.bottom);
            ctx.stroke();
        }

        ctx.setLineDash([]);

        this.borders.forEach((b) => {
            b.draw(ctx);
        });
    }

}