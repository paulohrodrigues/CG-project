class Line{
    constructor(p1,p2,cor){
        var material = new THREE.LineBasicMaterial({
            color: cor
        });
        var geometry = new THREE.Geometry();   
        geometry.vertices.push(
            new THREE.Vector3( p1[0], p1[1], p1[2] ),
            new THREE.Vector3( p2[0], p2[1], p2[2] )
        );
        var line = new THREE.Line( geometry, material );
        return line;
    }
}