const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world
var bg
var snow,snow2,snow3,snow4,snow5,snow6,snow7;
var cat, catImg1, catImg2

function preload(){
  bg = loadImage("images/snow1.jpg")
//  catImg1 = loadImage("images/cat2.png");
  //catImg2 = loadImage("images/cat3.png");
 // catWalk = loadAnimation("images/cat2.png,images/cat3.png")
} 

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);

  cat = createSprite(700,350);
 // cat.addAnimation(catWalk)

  ground = new Ground(600,height,1200,20);
  snow = new Snow(100,20,70,70)
  snow2 = new Snow(200,40,70,70)
  snow3 = new Snow(300,20,70,70)
  snow4 = new Snow(400,40,70,70)
  snow5 = new Snow(500,20,70,70)
  snow6 = new Snow(600,40,70,70)
  snow7 = new Snow(700,20,70,70)
}

function draw() {
  background(bg);  
  snow.display()
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  ground.display();
}