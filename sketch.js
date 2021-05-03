var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    ball=createSprite(random(10,500),50,50,50)
    ball.shapeColor="white";
    ball.velocityX=6;
    ball.velocityY=6;

    //create 4 different surfaces
ob1=createSprite(50,590,150,50)
ob1.shapeColor="red";
ob2=createSprite(280,590,150,50)
ob2.shapeColor="blue";
ob3=createSprite(480,590,150,50)
ob3.shapeColor="green";
ob4=createSprite(700,590,150,50)
ob4.shapeColor="yellow";

    //create box sprite and give velocity

}

function draw() {
    background(0);
    //create edgeSprite
e=createEdgeSprites();
ball.bounceOff(e)
if(ob1.isTouching(ball)&&ball.bounceOff(ob1)){
    ball.shapeColor="red"
    music.play();


}
if(ob2.isTouching(ball)){
    ball.shapeColor="blue"
    music.stop();
    

}

if(ob3.isTouching(ball)&&ball.bounceOff(ob3)){
    ball.shapeColor="green"

}
if(ob4.isTouching(ball)&&ball.bounceOff(ob4)){
    ball.shapeColor="yellow"

}



    //add condition to check if box touching surface and make it box




    drawSprites();
}
