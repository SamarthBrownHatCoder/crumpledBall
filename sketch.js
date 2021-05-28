var groundSprite, ground;
var side1, side2, side3;
var paperBall;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;

	//Creating Ground
	groundSprite = createSprite(width/2, 489, width, 20);
	groundSprite.shapeColor=color("green")

	ground = Bodies.rectangle(width/2, 503, width, 20, {isStatic:true});
	World.add(world, ground)

	//Creating Sides of the Bin
	side1 = new Dustbin(800, 469, 200, 20)
	side2 = new Dustbin(700, 439, 20, 80)	//left side
	side3 = new Dustbin(905, 439, 20, 80)	//right side

	//Creating Paper Balls to put in dustbin
	paperBall = new Paper(100, 400, 30)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  side1.display();
  side2.display();
  side3.display();
  paperBall.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x: 235, y: -98});
	}


}

