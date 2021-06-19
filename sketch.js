
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	groundSprite=createSprite(370, 250, 280,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2 , 650 , width , 10 , {isStatic:true} );
	World.add(world, ground);

	//Create the Bodies Here.


	Engine.run(engine);
	bob1 = new Bob(270,450,50)
	bob2 = new Bob(320,450,50)
	bob3 = new Bob(370,450,50)
	bob4 = new Bob(420,450,50)
	bob5 = new Bob(470,450,50)

	//var bobDiameter = 40;

	/**rope1 = new Rope(bob1.body , ground.body, -bobDiameter*2 , 0);
	rope2 = new Rope(bob2.body , ground.body, -bobDiameter*2 , 0);
	rope3 = new Rope(bob3.body , ground.body, -bobDiameter*2 , 0);
	rope4 = new Rope(bob4.body , ground.body, -bobDiameter*2 , 0);
	rope5 = new Rope(bob5.body , ground.body, -bobDiameter*2 , 0);*/
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  /**rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();*/

  drawSprites();
 
}
