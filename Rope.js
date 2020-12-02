class Rope {
    constructor(body1, pointB) {
    
    var options = {
        bodyA : body1,
        pointB: pointB,
    }
    this.rope = Matter.Constraint.create(options);
    this.pointB = pointB;
    World.add(world, this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}