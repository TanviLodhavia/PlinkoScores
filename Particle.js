class Particle {
    constructor(x,y){
        var options = {
            isStatic:false,
            'restitution':0.4
}
        this.body = Bodies.circle(x,y,10,options);
        this.radius=10;
        World.add(world,this.body);
    }
    display(){ 
        var pos =this.body.position; 
        push(); 
        translate(pos.x, pos.y); 
        rotate(this.body.angle); 
        strokeWeight(0); 
        fill(random(0,255),random(0,255),random(0,255)); 
        ellipseMode(RADIUS); 
        ellipse(0,0,this.radius,this.radius); 
        pop(); }
}