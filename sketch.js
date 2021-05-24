
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground;
var mango1,mango2,mango3,mango4,mango5;
var stone;
var boy;
var slingShot;

var gameState="onSling";

function preload()
{
	boyImg=loadImage("images/boy.png");
	treeImg=loadImage("images/tree.png");
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	boy=createSprite(200,500);
	boy.addImage(boyImg);
	boy.scale=0.1;
	
	tree=createSprite(600,290);
	tree.addImage(treeImg);
	tree.scale=0.45;



    
	ground = new Ground(450,575,900,10); 
	mango1 = new Mango(390,180); 
	mango2 = new Mango(510,70); 
	mango3 = new Mango(480,270); 
	mango4 = new Mango(640,50); 
	mango5 = new Mango(640,260); 
	mango6 = new Mango(780,250); 
	mango7 = new Mango(720,150); 
	mango8 = new Mango(585,170); 
	
	stone = new Stone(150,445,50);
	
	slingShot=new Slingshot(stone.body,{x:150,y:445});
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  drawSprites();

  stone.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  ground.display();

  slingShot.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
 
} 

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingShot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       slingShot.attach(stone.body);  
       gameState="onSling";
       Matter.Body.setPosition(stone.body,{x:150,y:45});
    }
}

function detectollision(lstone,lmango){

	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
		if(distance<=lmango.r+lstone.r)
	  {
		  Matter.Body.setStatic(lmango.body,false);
	  }
  
	}



