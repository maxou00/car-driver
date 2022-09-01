import Point from "./point";

export default class Border {
    points: Point[];

    /**
     *
     */
    constructor(...points: Point[]) {
        this.points = points;
    }
}