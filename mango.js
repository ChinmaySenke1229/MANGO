class Mango {
    constructor(x, y) {
      var options = {
          'restitution':0,
          'friction':1,
          'isStatic':true
      }
      this.body = Bodies.circle(x, y,25, options);
      this.r= 50;
      this.image=loadImage("images/mango.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      image(this.image,pos.x,pos.y,this.r,this.r)
    }
  };