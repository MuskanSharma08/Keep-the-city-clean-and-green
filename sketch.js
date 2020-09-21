const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObj, paperObject,groundObject	
var world;

function setup() {
	createCanvas(1200, 550);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(200,400,70);
	groundObject=new ground(width/2,520,width,20);
	dustbinObj=new dustbin(1000,500);

	Engine.run(engine);
 }

function draw() {
  rectMode(CENTER);
  background(255);
   
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
}
function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:120,y:-135});
	  	}
}