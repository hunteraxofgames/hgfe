class Link {
    constructor (bodyA,bodyB) {
        var LastLink =bodyA.body.bodies.length-2
        this.link = Constraint.create ({
            bodyA : bodyA.body.bodies [LastLink],
            pointA: {x:0,y:0},
            bodyB:bodyB,
            pointB:{
                X:0,y:0
            },
            length:-10,
            stffness :0.01
        })
        World.add (engine.world,this.link)
    }
}