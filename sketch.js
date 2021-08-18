const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;
var engine ,world,platform1,demon,slingshort,platform2,bouncer,p1,s1;
var stones=[];
function preload(){

  back=loadImage("images/backgr.jpg")
 pImg=loadImage("images/boy2.png")
}

function setup() {

  createCanvas(1350,600);

  engine = Engine.create()
  world = engine.world;

  platform1= new Platform(1200,350,400,60);
  platform2 = new Platform(650,700,1650,100);
 
  p1 =createSprite(1180,270,150,150);
  p1.addImage(pImg)
  p1.scale=0.3

  demon = new Demon(150,height-50,250,250)
 
  

 // slingshot = new SlingShot(s1.body,{x:1110, y:255});

}

function draw() {
  background(back);
  Engine.update(engine)
 
  demon.display();

  platform1.display();
  platform2.display();
  

  p1.display();

for(var i=0;i<stones.length;i++){
 shootStones(stones[i],i)
}


 // slingshot.display();


    drawSprites();
  
}

function keyPressed(){
  if (keyCode===32){
    var stone = new Stone(1176,300,80,80);
    stones.push(stone);
    
  }
}
function shootStones(stone,index){
stone.display();

}