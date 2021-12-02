class baseClass{
   constructor(x,y,width,height){
    var options={
         "friction":100000000000000000000000,
         "density":10000000000000000000000.0,
         "mass":10000000.0
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    this.image=loadImage("base.png");
    World.add(world,this.body);
   }
   display(){
     var pos = this.body.position;

     push();
     translate(pos.x,pos.y);
     imageMode(CENTER);
     image(this.image,0,0,this.width,this.height);
     pop();
   }
}