class Computer {

    constructor(x,y,w,h){
        var opt={
            isStatic : true
        };

        this.body = Bodies.rectangle(x,y,w,h,opt);
        this.w=w;
        this.y=y;
        this.h=h;
        this.y=y;
        this.image=loadImage("./assets/base2.png");

        World.add(world,this.body);
    }

       show(){
           var pos = this.body.position;
           var angle = this.body.angle;

           push()
           translate(pos.x,pos.y);
           rotate(angle);
           imageMode(this.image,0,0,this.width,this.height);
           pop()
       }



}