var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var  boxBody,ground;
var  stickBody,ground;
var woodBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxSprite=createSprite(333,height-74,15,90);
	boxSprite.shapeColor=color("pink")

stickSprite=createSprite(466,height-74,15,90);
stickSprite.shapeColor=color("pink")


woodSprite=createSprite(width/2,height-36,width-680,15);
woodSprite.shapeColor=color("pink")

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);

	 boxBody = Bodies.rectangle(20,20,5,{isStatic:true});
	 World.add(world, boxBody);

	 stickBody = Bodies.rectangle(20,20,5,{isStatic:true});
	 World.add(world,stickBody);

	 woodBody = Bodies.rectangle(20,20,5,{isStatic:true});
	 World.add(world,woodBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("lightBlue");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  boxSprite.display();
  stickSprite.display();
  woodSprite.display();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
 Matter.Body.setStatic(packageBody,false);
	
  }
}



