import { Shape } from "./Shape.js";
import { Ball } from "./Ball.js";
import { width, height, ctx, canvas, balls, count, para, random, randomRGB } from "./main.js";


export class EvilCircle extends Shape {
    constructor(x, y, ctx){
        super(x, y, 20, 20);
        this.color = 'white';
        this.size = 10;
        this.ctx
    }

    draw() {
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.stroke();   
    }

    checkBounds() {
        if((this.x + this.size) >= width){
            this.x -= this.size;
        }
    
        if((this.x + this.size) <= 0){
            this.x += this.size;;
        }
    
        if((this.y + this.size) >= height){
            this.y -= this.size;
        }
        if((this.y + this.size) <= 0){
            this.y += this.size;
        }
    }

    setControls() {
        var _this = this;
        window.onkeydown = function (e) {
            if(e.key === 'a'){
                _this.x -= _this.velX;
            } else if(e.key === 'd') {
                _this.x += _this.velX;
            } else if(e.key === 'w'){
                _this.y -= _this.velY;
            } else if(e.key === 's') {
                _this.y += _this.velY;
            }
        }
     }

     collisionDetect() {
        balls.forEach(vizinha => {
            if(vizinha.exists){
                const dx = this.x - vizinha.x;
                const dy = this.y - vizinha.y;
                const distance = Math.sqrt(dx * dx + dy * dy)
    
                if(distance < (this.size + vizinha.size)){
                    vizinha.exists = false;
                    count--;
                    para.textContent =  `Ball count: ${count}`;
                    this.size += 5;
                }
    
            }
        })
    }
}