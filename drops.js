class drops{
    constructor(){
        var options = {
            isStatic : false, 
            friction : 1
        }
        this.body = Bodies.circle(random(0, windowWidth),random(-150, 0),12, options); 
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill(0, 57, 245);
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y , 6, 6);
    }
    positionUpdate(){
        if(this.body.position.y>windowHeight){
            Matter.Body.setPosition(this.body, {x : random(0, windowWidth), y : random(-150,0)}); 
        }
    }
}