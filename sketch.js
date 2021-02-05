
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1 , bob2 , bob3 , bob4 , bob5 , roof , chain;
var world , engine;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,150,500,70);
	bob1 = new Bob(200,300,30,40);
	chain = new Chain(bob1 ,{x : 400 , y : 185});
	
}


function draw() {
  background(230);
  Engine.update(engine);

  roof.display();
  bob1.display();
  chain.display();
}



