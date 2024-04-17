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

//Shape

function Shape(x, y, velX, velY) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.exists = true;
}

//Ball

function Ball(x, y, velX, velY, color, size) {
    Shape.call(this, x, y, velX, velY);
    this.color = color;
    this.size = size;
}

Ball.prototype = Object.create(Shape.prototype);
Object.defineProperty(Ball.prototype, 'constructor', {
    value: Shape,
    enumerable: false,
    writable: true})


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

Ball.prototype.collisionDetect = function () {
    balls.forEach(vizinha => {
        if(!(this === vizinha)){
            const dx = this.x - vizinha.x;
            const dy = this.y - vizinha.y;
            const distance = Math.sqrt(dx * dx + dy * dy)

            if(distance < (this.size + vizinha.size)){
                vizinha.color = randomRGB();
                this.velX = this.velX * -1;
                this.velY = this.velY * -1;
                vizinha.velX = vizinha.velX * -1;
                vizinha.velY = vizinha.velY * -1;
            }

        }
    })
}

EvilBall

let balls = [];

while (balls.length <= 25) {
    let size = random(10, 20);
    let color = randomRGB();

    let ball = new Ball(
        random(0+size,width-size),
        random(0+size,height-size),
        random(-7,7),
        random(-7,7),
        color,
        size
    );

    balls.push(ball);  
}

function loop() {
    ctx.fillStyle = "rgba(0,0,0,0.25)";
    ctx.fillRect(0, 0, width, height)

    balls.forEach(ball => {
        ball.draw();
        ball.update();
        ball.collisionDetect();
    });

    requestAnimationFrame(loop);
}

loop();






