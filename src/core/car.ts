import Controls from "./controls";

export class Car {
    x: number;
    y: number;
    width: number;
    height: number;
    controls: Controls;
    speed = 0;
    acceleration = 0.2;
    maxSpeed = 3;
    friction = 0.05;
    angle = 0;


    constructor(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width= width;
        this.height = height;
        this.controls = new Controls();
    }

    updateSpeed() {
        if(this.controls.forward) {
            this.speed += this.acceleration;
        }
        if(this.controls.reverse) {
            this.speed -= this.acceleration;
        }
        if(this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
        if(this.speed < -this.maxSpeed / 2) {
            this.speed = -this.maxSpeed / 2;
        }
        if(this.speed > 0) {
            this.speed-=this.friction;
        }
        if(this.speed < 0) {
            this.speed += this.friction;
        } 
        if(Math.abs(this.speed) < this.friction) {
            this.speed = 0;
        }
    }

    updateSteeringWheel() {
        if(this.speed !== 0) {
            const flip = this.speed > 0 ? 1 : -1;
            if(this.controls.right) {
                this.angle +=0.03 * flip;
            }
            if(this.controls.left) {
                this.angle -= 0.03 * flip;
            }
        }
    }


    update() {
        this.updateSpeed();
        this.updateSteeringWheel();
        this.x -= Math.sin(this.angle) * this.speed;
        this.y -= Math.cos(this.angle) * this.speed;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(-this.angle);
        ctx.beginPath();
        ctx.rect(
            -this.width / 2,
            -this.height / 2,
            this.width,
            this.height
        )
        ctx.fill();
        ctx.restore();
    }

}