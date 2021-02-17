class Ground {
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width = width
        this.height = height
        World.add(world,this.body)
    }
    display(){
        var posh=this.body.position
        push()
        rectMode(CENTER);
        fill("blue")
        rect(posh.x,posh.y,this.width,this.height)
        pop ()
    }
}