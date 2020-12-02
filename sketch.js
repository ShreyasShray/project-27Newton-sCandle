
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400, 80, 600, 40);

	bob1 = new Bob(300, 500, 25);
	bob2 = new Bob(350, 500, 25);
	bob3 = new Bob(400, 500, 25);
	bob4 = new Bob(450, 500, 25);
	bob5 = new Bob(500, 500, 25);
	rope1 = new Rope(bob1.body, {x: 300, y:80});
	rope2 = new Rope(bob2.body, {x: 350, y:80});
	rope3 = new Rope(bob3.body, {x: 400, y:80});
	rope4 = new Rope(bob4.body, {x: 450, y:80});
	rope5 = new Rope(bob5.body, {x: 500, y:80});
  


	Engine.run(engine);
  
}


function draw() {
  background(250);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

function keyPressed(){
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-2000, y:0});
    }
}



