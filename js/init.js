    var renderer,camera,obj;
    onload=()=>{
        //================================BEGIN===================================
        var height=500; 
        var width=500;
        var scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera( 75,(height/width), 0.1, 1000 );
		camera.position.z = 50;
		camera.position.x = 60;
		camera.position.y = 20;
		camera.rotation.y=45 * Math.PI / 180;
        renderer = new THREE.WebGLRenderer();
        renderer.setSize( height, width);
        document.body.appendChild( renderer.domElement );        
        //========================================================================
        new Eixos(scene);
        obj = new ObjectPredefinido();
        obj.draw(scene,renderer,camera);
        renderer.render(scene, camera);
    };
    Math.seno = function(g) {
	    return Math.sin(g * Math.PI / 180);
    }
    var aplicarMatriz=((matrizParaAplicar)=>{
        scene = new THREE.Scene();
        // obj = new ObjectPredefinido(scene);
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
   
    document.getElementById("resetar").addEventListener("click",()=>{
        window.location="index.html";
    });