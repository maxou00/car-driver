import { Car } from './core/car';
import Road from './core/road';
import './style.css'

const canvas = document.querySelector<HTMLCanvasElement>("#appCanvas")!;
canvas.width = 400;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
const road = new Road(canvas.width / 2, canvas.width * .9, 3);
const car = new Car(road.getLaneCenter(1), 100, 30, 50);

animate();

function animate() {
  canvas.height = window.innerHeight;
  ctx?.save();

  ctx?.translate(0, -car.y + canvas.height*.7);

  road.draw(ctx!);
  
  car.update(road);
  car.draw(ctx!);

  ctx?.restore();
  requestAnimationFrame(animate);
}