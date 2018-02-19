class ObjectPredefinido{
    constructor(){
        this.matriz = [];
        this.init();
        // this.draw();
    }

    aplicarMatriz(matriz){

        // console.log(this.matriz);

        var matrizLocal = [];

        for(var i=0;i<8;i++){
    
            var matrizPush = this.multiplicar(matriz,
                [ 
                    [this.matriz[i][0]],
                    [this.matriz[i][1]],
                    [this.matriz[i][2]],
                    [this.matriz[i][3]] 
                ] 
            );
            // console.log(matrizPush);
            var a  = [
                matrizPush[0][0],
                matrizPush[1][0],
                matrizPush[2][0],
                matrizPush[3][0]
            ];

            matrizLocal.push(a);
            // console.log(matrizLocal);
        }

        this.matriz=matrizLocal;

        console.log(matrizLocal);

    }

    multiplicar(matriz1,matriz2){

        var a, b, c, i, r, j, s, k;

        a = matriz1;
        b = matriz2;

        c = [];
        
        for (i = 0; i < a.length; i++) {
            r = [];
            for (j = 0; j < b[0].length; j++) {
                s = 0;
                for (k = 0; k < b.length; k++) {
                    s += a[i][k] * b[k][j];
                }
                r.push(s);
            }
            c.push(r);
        }
        console.log(c);
        return c;
    }

    init(){
        this.matriz.push([0,10,10,1]);
        this.matriz.push([10,10,10,1]);
        this.matriz.push([0,0,10,1]);
        this.matriz.push([10,0,10,1]);

        this.matriz.push([0,10,0,1]);
        this.matriz.push([10,10,0,1]);
        this.matriz.push([0,0,0,1]);
        this.matriz.push([10,0,0,1]);
    }

    draw(scene,renderer,camera){
        scene.add( new Line(this.matriz[0],this.matriz[1],0xffffff) );
        scene.add( new Line(this.matriz[2],this.matriz[3],0xffffff) );
        scene.add( new Line(this.matriz[0],this.matriz[2],0xffffff) );
        scene.add( new Line(this.matriz[1],this.matriz[3],0xffffff) );

        scene.add( new Line(this.matriz[4],this.matriz[5],0xffffff) );
        scene.add( new Line(this.matriz[6],this.matriz[7],0xffffff) );
        scene.add( new Line(this.matriz[4],this.matriz[6],0xffffff) );
        scene.add( new Line(this.matriz[5],this.matriz[7],0xffffff) );

        scene.add( new Line(this.matriz[0],this.matriz[4],0xffffff) );
        scene.add( new Line(this.matriz[2],this.matriz[6],0xffffff) );
        scene.add( new Line(this.matriz[1],this.matriz[5],0xffffff) );
        scene.add( new Line(this.matriz[3],this.matriz[7],0xffffff) );
        renderer.render(scene, camera);
    }
}