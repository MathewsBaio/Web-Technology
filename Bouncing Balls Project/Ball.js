class Ball extends Shape{
    Constructor(x, y, velX, velY, color, size) {
        super(x, y, velX, velY);
        this.color = color;
        this.size = size;
    }

    draw(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    update() {
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

    collisionDetect() {
        balls.forEach(vizinha => {
            if((vizinha.exists) && !(this === vizinha)){
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
}
