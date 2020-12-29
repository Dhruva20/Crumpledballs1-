class Paper{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.2
        }
        this.radius = radius
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world, this.body);
      }
      display(){
        fill("yellow");
        ellipseMode(Radius);
        eliipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
      }








}