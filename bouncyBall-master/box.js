class box{

    constructor(x,y,w,h){
        var options={
            restitution:0.8,friction:0.3,density:1

        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
    }

    //functions

    display(){
        var pos = this.body.position;
        var angle =this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,50,50)
        pop();
    }
}