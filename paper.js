class Paper{

    constructor(x, y, radius){
        var nature = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
            
        }

        this.body = Bodies.circle(x, y, radius, nature)
        this.radius = radius;
        
        World.add(world, this.body);
        
    }


    display(){
        var pos = this.body.position;

        push()
        fill("Purple")
        ellipse(pos.x, pos.y, this.radius)
        pop()


    }
    
}