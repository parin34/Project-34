class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            length:150
        }
        this.sling=Constraint.create(options);
        this.pointB = pointB
        World.add(world,this.sling)
    }
    attach(body){
        this.sling.bodyA = body;
    }
    display(){
       
            if(this.sling.bodyA) {
                var bodyA = this.sling.bodyA.position;
                var pointB = this.pointB;
                strokeWeight(0);
                line(bodyA.x, bodyA.y, pointB.x, pointB.y);
                }
        }
        
            fly() {
                this.sling.bodyA = null;
            }
            
        }
    
    
