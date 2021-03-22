const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,hero,monster;
var block1;

function preload() {

}

function setup() {
  createCanvas(1200, 650);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,500,1200,20);
  hero = new Hero(300,325,50);
  monster = new Monster(900,325,50);

  block1 = new Blocks(700,480,50,50);
  
}

function draw() {
  background("lightblue");

  hero.display();

  ground.display();

  monster.display();

  block1.display();
  //block2.display();
  //block3.display();
  //block4.display();
  //block5.display();
  //block6.display();
  //block7.display();
  //block8.display();
  //block9.display();
  //block10.display();


}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}
