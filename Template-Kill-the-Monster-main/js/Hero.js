class Hero{
    construtor(){
        var options = {
            density : 1,
            frictionAir : 1
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x ,this.y ,50 , options);
        World.add(world,this.body);        
        }

        display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("green"); 
        pop();
        }
}