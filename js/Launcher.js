class Launcher {
   constructor(body,point){
       var options={
           bodyA:body,
           pointB:point,
           stiffness:0.04,
           length:1
       }
       this.bodyA=body;
       this.ponitB=point;
       this.launcher=Constraint.create(options)
       World.add(world,this.launcher)
   } 
   display(){
   var pointA=this.bodyA.position
   var pointB=this.pointB
   line(pointA.x,pointA.y,pointB.x,pointB.y)
       
   }
}