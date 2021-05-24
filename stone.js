class Stone{
    constructor(x,y,r){
        var options={
            'restitution':0,
            'friction':1.0,
            'density':1.2,
            'isStatic':false
        }
        this.body = Bodies.circle(x, y, r/2, options);
        this.r = r;
       this.image=loadImage("images/stone.png");
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        image(this.image,pos.x,pos.y,this.r,this.r);
      }
    };