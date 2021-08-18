class Demon{
  constructor(x,y,width,height){
      var options={
          isStatic:true,
          
  }
  this.body = Bodies.rectangle(x,y,width,height,options)
  this.image = loadImage("images/wolf.png")
  this.width = width;
  this.height = height;
  World.add(world,this.body)
  }
  display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      var pos = this.body.position
      image(this.image,0,0,this.width,this.height)
      pop ();
      Matter.Body.setStatic(this.body,false)
      Matter.Body.setVelocity(demon.body,{x:+10,y:0})

  }

  
}