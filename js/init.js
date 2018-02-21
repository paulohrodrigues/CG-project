var renderer,camera,obj,scene;
onload=()=>{
    //================================BEGIN===================================
    var height=500; 
    var width=500;
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75,(height/width), 0.1, 1000 );
    camera.position.z = 50;
    camera.position.x = 50;
    camera.position.y = 20;
    camera.rotation.y=45 * Math.PI / 180;
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( height, width);
    document.body.appendChild( renderer.domElement );        
    //========================================================================
    new Eixos(scene);
    obj = new ObjectPredefinido();
    obj.draw(scene,renderer,camera);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    renderer.render(scene, camera);

};
var aplicarMatriz=((matrizParaAplicar)=>{
    scene = new THREE.Scene();
    new Eixos(scene);
    obj.aplicarMatriz(matrizParaAplicar);     
    obj.draw(scene,renderer,camera);
});
document.getElementById("aplicar").addEventListener("click",()=>{
    var matrizParaAplicar=[];
    var puro = document.getElementById("entrada").value;
    puro=puro.split("\n");
    for(var l of puro){
        var novo = l.split(',').map(function(item) {
            return parseFloat(item,10);
        });
        matrizParaAplicar.push(novo);
    }
    matrizParaAplicar.pop();
    aplicarMatriz(matrizParaAplicar);
});

function rotationCamera(sentido){
    var mult=(sentido=="horario") ? -1: 1;
    var raiz = Math.pow(70,2)-Math.pow(camera.position.z,2);
    camera.position.z-=(0.5*mult);
    camera.position.x= Math.sqrt( raiz );
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    renderer.render(scene, camera);
}
document.getElementById("body").addEventListener("keydown",(evento)=>{
    var key = event.keyCode;
    console.log(key);
    if(key==65){    
        rotationCamera("horario");
    }   
    if(key==68){
        rotationCamera("ante")
    }
});

document.getElementById("resetar").addEventListener("click",()=>{
    window.location="index.html";
});