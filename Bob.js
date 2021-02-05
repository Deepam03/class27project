class Bob{
    constructor(x, y, width, height) {
        var options = {
            /*density : 1,
            restitution : 0.8,
            friction : 1*/
            isStatic : true
        }
        this.body = Bodies.circle(x, y,30, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill('green')
        ellipse( pos.x, pos.y, this.width, this.height);
        pop();
      }
}