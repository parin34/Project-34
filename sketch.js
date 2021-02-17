const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine,world
var ground;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20;
var b21,b22,b23,b24,b25,b26,b27,b28,b29,b30,b31,b32,b33,b34,b35,b36,b37,b38,b39,b40;
var backImg;
var ball;
var rope;
var M;

function preload(){
  backImg=loadImage("images/GamingBackground.png")
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ball = new Ball(100,300,130);
  rope = new Slingshot(ball.body,{x:100,y:50})
  ground = new Ground(400,300,500,20);

  b1 = new Box(250,100,30,30)
  b2 = new Box(250,100,30,30)
  b3 = new Box(250,100,30,30)
  b4 = new Box(250,100,30,30)
  b5 = new Box(250,100,30,30)
  b6 = new Box(250,100,30,30)
  b7 = new Box(250,100,30,30)
  b8 = new Box(250,100,30,30)

  b9 = new Box(200,100,30,30)
  b10 = new Box(200,100,30,30)
  b11 = new Box(200,100,30,30)
  b12 = new Box(200,100,30,30)
  b13 = new Box(200,100,30,30)
  b14 = new Box(200,100,30,30)
  b15 = new Box(200,100,30,30)
  b16 = new Box(200,100,30,30)

  b17 = new Box(300,100,30,30)
  b18 = new Box(300,100,30,30)
  b19 = new Box(300,100,30,30)
  b20 = new Box(300,100,30,30)
  b21 = new Box(300,100,30,30)
  b22 = new Box(300,100,30,30)
  b23 = new Box(300,100,30,30)
  b24 = new Box(300,100,30,30)
  b25 = new Box(350,100,30,30)
  b26 = new Box(350,100,30,30)
  b27 = new Box(350,100,30,30)
  b28 = new Box(350,100,30,30)
  b29 = new Box(350,100,30,30)
  b30 = new Box(350,100,30,30)
  b31 = new Box(350,100,30,30)
  b32 = new Box(350,100,30,30)
  
  M = new Monster(500,100,200,200)
  
}

function draw() {
  
  Engine.update(engine)
  background(backImg);  

ground.display();
M.display()
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
b11.display();
b12.display();
b13.display();
b14.display();
b15.display();
b16.display();
b17.display();
b18.display();
b19.display();
b20.display();
b21.display();
b22.display();
b23.display();
b24.display();
b25.display();
b26.display();
b27.display();
b28.display();
b29.display();
b30.display();
b31.display();
b32.display();


ball.display();
rope.display();


}
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}
