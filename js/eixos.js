class Eixos{
    constructor(scene){
        scene.add( new Line([-50,0,0,1],[50,0,0,1],0xff0000) );
        scene.add( new Line([0,-50,0,1],[0,50,0,1],0x00ff00) );
        scene.add( new Line([0,0,-50,1],[0,0,50,1],0x0000ff) );
    }
}