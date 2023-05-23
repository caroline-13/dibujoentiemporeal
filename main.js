var narizX = 0;
var narizY = 0;
var mano_izq = 0;
var mano_der = 0;
var distancia = 0;
function setup(){
    canvas = createCanvas(500,400);
    background("lightblue");
    canvas.position(600,100);

    video = createCapture(VIDEO);
    video.size(500, 400);
    video.position(50, 100);
     pose = ml5.poseNet(video,listo);
     pose.on( "pose",respuesta);
}
function listo (){
    console.log("listo");
}
function respuesta(resultado){
    if(resultado.length > 0 ){
        console.log(resultado)
        mano_izq= resultado[0].pose.leftWrist.x;
        mano_der= resultado[0].pose.rightWrist.x;
        distancia = mano_izq - mano_der;
        narizX = resultado[0].pose.nose.x - (distancia / 2);
          narizY = resultado[0].pose.nose.y - (distancia / 2);

         
    }

}
function draw(){
    background("ligthblue");
    fill("ligthpink");
    square(narizX,narizY,distancia);
}
