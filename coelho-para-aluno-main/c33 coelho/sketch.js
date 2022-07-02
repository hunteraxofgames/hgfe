const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var fruit
var fruitcon
var background
var rabbit
var melancia
var button


function preload (){
  background = loadImage ("background.png")
  rabbit = loadImage ("Rabbit-01.png")
  melancia = loadImage ("melon.png")
}

function setup() 
{
  createCanvas(500,700)
  frameRate(80);


  engine = Engine.create();
  world = engine.world;

 rope = new Rope (6,{x:245,y:30})
   ground = new Ground(200,690,600,20);
  
var options = {
  density :0.001
}
 bunny=createSprite (230,620,100,100)
 bunny.addImage (rabbit)
 bunny.scale =0.6
fruit = Bodies.circle (300,300,15,options)
Matter.Composite.add (rope.body,fruit)

 fruitcon = new Link (rope,fruit)
   rectMode(CENTER);
   ellipseMode(RADIUS);
   textSize(50)
  imageMode (CENTER)

}

function draw() 
{
  background(51);
  image (background,width/2,height/2,490,690)
  image ( melancia,fruit.position.x,fruit.position.y,15,15)

  Engine.update(engine);
  ground.show();
 rope.show ()

  drawSprites();

}
