import Point from "./point";

export default class Segment {
    points: Point[];
    lineWidth = 2;
    strokeStyle = "red";
    lineDash: number[] = [];

    /**
     *
     */
    constructor(...points: Point[]) {
        this.points = points;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.save();

        ctx.setLineDash(this.lineDash);
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.strokeStyle;

        for (let i = 0; i < this.points.length; i++) {
            let p1 = this.points[i];
            let p2 = this.points[i + 1];
            if (p1 && p2) {
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
        }

        ctx.restore();
    }

    getIntersection(other: Segment) {
        
    }
}