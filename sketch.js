const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
 
var engine,world;
var bg,boy,ball;

function preload(){
  bg=loadImage("bg.jpg");
  boy=loadImage("boy.png");
  ball=loadImage("ball.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine=Engine.create();
  world=engine.world;

  ground=new Ground(windowWidth/2,windowHeight,windowWidth,20);
  wall1 = new Ground(-20,windowHeight/2,10,windowHeight)
  wall2 = new Ground(windowWidth,windowHeight/2,10,windowHeight)
 
  ball=new Ball(330,390,60);
  sling=new SlingShot(ball.body,{x:320,y:335});
  box1=new Box(970,600,180,25)
  box2=new Box(970,580,170,25)
  box3=new Box(970,560,160,25)
  box4=new Box(970,540,150,25)  
  box5=new Box(970,520,140,25)
  box6=new Box(970,500,130,25)
  box7=new Box(970,480,120,25)
  
}

function draw() {
  background(bg);  
  fill("indigo")
  textSize(20)
  text("Note:Press up to re-arrange the boxes\n Press space button to re-attach the ball",450,50)
  Engine.update(engine);
  ground.display();
  image(boy,150,260,200,400);
  text(mouseX+","+mouseY,mouseX,mouseY);
  sling.display();
  ball.display();
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  
} 

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  sling.fly();
}

function keyPressed() {
  if(keyCode===32){
    Matter.Body.setPosition(ball.body,{x:330,y:390})
    sling.attach(ball.body);
  }
  if(keyCode===UP_ARROW){
    Matter.Body.setPosition(box1.body,{x:970,y:620})
    Matter.Body.setPosition(box2.body,{x:970,y:580})
    Matter.Body.setPosition(box3.body,{x:970,y:540})
    Matter.Body.setPosition(box4.body,{x:970,y:500})
    Matter.Body.setPosition(box5.body,{x:970,y:460})
    Matter.Body.setPosition(box6.body,{x:970,y:420})
    Matter.Body.setPosition(box7.body,{x:970,y:380})
    Matter.Body.setVelocity(box1.body,{x:0,y:0})
    Matter.Body.setVelocity(box2.body,{x:0,y:0})
    Matter.Body.setVelocity(box3.body,{x:0,y:0})
    Matter.Body.setVelocity(box4.body,{x:0,y:0})
    Matter.Body.setVelocity(box5.body,{x:0,y:0})
    Matter.Body.setVelocity(box6.body,{x:0,y:0})
    Matter.Body.setVelocity(box7.body,{x:0,y:0})
  }
}