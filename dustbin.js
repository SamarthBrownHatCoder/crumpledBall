class Dustbin{

    constructor(x, y, width, height){
        var nature = {
            isStatic : true,
            restitution : 0,
            friction : 0.5,
            density :0.1,
        }

        this.body = Bodies.rectangle(x, y, width, height/6, nature);
        this.width = width;
        this.height = height;

        World.add(world, this.body);

    }


    display(){
        rectMode(CENTER)
        var pos = this.body.position;

       fill("#e77218")
        rect(pos.x, pos.y, this.width, this.height)
       
    }

}