
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var line1,line2,line3;

function preload()
{
     	
}

function setup() {
	createCanvas(1200, 700);
	
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	line1 = createSprite(900,height-50,200,20);
	line1.shapeColor = color("red");

	line2 = createSprite(810,610,20,100);
	line2.shapeColor = color("red");

    line3 = createSprite(1000,610,20,100);
	line3.shapeColor = color("red");


	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
		   
	 
      
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  
  
  drawSprites();
 
}



