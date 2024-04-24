import { Ball } from "./Ball.js";
import { EvilCircle } from "./EvilCircle.js";

// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

export function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

export function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}



let balls = [];
let count = 26;
let para = document.querySelector('h1');

while (balls.length <= 25) {
    let size = random(10, 20);
    let color = randomRGB();

    let ball = new Ball(
        random(0+size,width-size),
        random(0+size,height-size),
        random(-7,7),
        random(-7,7),
        color,
        size,
        ctx
    );

    balls.push(ball);  
}

let evil = new EvilCircle(random(0,width-10), random(0,height-10), ctx);
evil.setControls();


function loop() {
    ctx.fillStyle = "rgba(0,0,0,0.25)";
    ctx.fillRect(0, 0, width, height)

    balls.forEach(ball => {
        if (ball.exists) {
            ball.draw();    
        }
        ball.update();
        ball.collisionDetect();
    });

    evil.draw();
    evil.checkBounds();
    evil.collisionDetect();

    requestAnimationFrame(loop);
}

loop();

export {width, height, ctx, canvas, balls, count, para}







