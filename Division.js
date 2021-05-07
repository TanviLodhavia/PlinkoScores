class Division{
    constructor(x,y){
        var options={
            isStatic:true
        }
            
        this.body=Bodies.rectangle(x,y,20,250,options);
        this.height=250;
        this.width=20;
        World.add(world,this.body);

        
    }
    display(){
        var pos=this.body.position
        fill(51,0,102);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        
        
    }
}