class Square{
    constructor(x,y){
        var options={
          "friction":100000.0,
          "density":1000.0,
          "mass":1000
         }
         this.body=Bodies.rectangle(x,y,25,25,options);
         this.width=25;
         this.height=25;
         World.add(world,this.body);
        }
        display(){
          var pos = this.body.position;
          
          push();
          fill("yellow");
          rectMode(CENTER);
          rect(pos.x,pos.y,this.width,this.height);
          pop();
        }
}