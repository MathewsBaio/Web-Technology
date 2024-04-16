// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}


//Ball

function Ball(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
}

Ball.prototype.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
    
}

Ball.prototype.update = function () {
    if((this.x + this.size) >= width){
        this.velX = this.velX * -1;
    }

    if((this.x + this.size) <= 0){
        this.velX = this.velX * -1;
    }

    if((this.y + this.size) >= height){
        this.velY = this.velY * -1;
    }
    if((this.y + this.size) <= 0){
        this.velY = this.velY * -1;
    }
    
    this.x += this.velX; //formula sorvete física
    this.y += this.velY;
}

let ball = new Ball(100, 50, 50, 50, "rgb(255,0,0)", 20);
ball.draw();


