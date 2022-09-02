import Point from "./point";
import Segment from "./segment";

export default class Border extends Segment{

    /**
     *
     */
    constructor(...points: Point[]) {
        super(...points);
    }
}