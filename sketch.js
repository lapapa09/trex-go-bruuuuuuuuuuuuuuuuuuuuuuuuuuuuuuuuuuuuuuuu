
var trex;
var trexrunning
var trexcollided;
var trexcollidedImg;
var ground;
var groundimg;
var invisibleGround;
var cloud;
var cloudsGroup;
var cloudImage;
var obstacle1
var obstacle2
var obstacle3
var obstacle4
var obstacle5
var obstacle6
var score;
var gameState = "serve";
var obstaclegroup;
var cloudgroup;
var gameover;
var gameoverImg;
var restart;
var restartImg;
var play = 1;
var end = 0; 


function preload(){
  trexrunning= loadAnimation("trex1.png","trex4.png","trex3.png");
 
groundimg= loadImage("ground2.png");
 cloudImage = loadImage("cloud.png");
 obstacle1 = loadImage("obstacle1.png");
obstacle2 = loadImage("obstacle2.png");
obstacle3 = loadImage("obstacle3.png");
obstacle4 = loadImage("obstacle4.png");
obstacle5 = loadImage("obstacle5.png");
obstacle6 = loadImage("obstacle6.png");
restartImg = loadImage("restart.png")
gameoverImg = loadImage("gameOver.png");

}

function setup(){
  createCanvas(800,200);
  trex =createSprite(50,170,20,20);
  trex.addAnimation("running",trexrunning);
  
  trex.scale = 0.7
  //crear sprite de Trex
gameover = createSprite(300,100);
gameover.addImage(gameoverImg);
gameover.scale = 0.5;
restart = createSprite(300,140);
restart.addImage(restartImg);
restart.scale = 0.5;
gameover. visible= false;
restart.visible = false;


score= 0;

obstaclesgroup = createGroup();
cloudgroup = createGroup();

 ground=createSprite(200,180,400,20);
ground.addImage(groundimg);

invisibleGround = createSprite(200,190,400,10);
invisibleGround.visible = false;
}

function draw(){
  background("lightgray");
 
 
ground.velocityX= -5;




console.log(trex.y);

 trex.collide(invisibleGround);


if(gameState == "serve"){
  trex.visible = false;
ground.velocityX = 0;
text("presiona para comenzar,200,100");
if (keyDown("space")){
gameState = "play";

}
}


if(gameState == "play"){
 text("Puntuación: "+ Math.round(score), 500,50);
score += 1/10;
 if(keyDown("space")&&trex.y>=150){
  trex.velocityY= -10;
  
 }
  trex.velocityY= trex.velocityY + 0.8
if(ground.x<0){
ground.x= ground.width/2;
}
trex.visible = true;

if(trex.isTouching(obstaclesgroup)){
  
  gameState = "end"
}


 spawnClouds();
  spawnObstacle();



}






if(gameState == "end"){
  text("Puntuación: "+ Math.round(score), 500,50);
  ground.velocityX = 0;
obstaclesgroup.setVelocityXEach(0);
cloudgroup.setVelocityXEach(0);
gameover. visible= true;
restart.visible = true;


}


  
 
  drawSprites();

}


obstaclesgroup = createGroup();
cloudsgroup = createGroup();


function spawnClouds() {
  //escribir aquí el código para aparecer las nubes 
  if (frameCount % 60 === 0) {
    cloud = createSprite(900,100,40,10);
    cloud.addImage(cloudImage); 
    cloud.y = Math.round(random(10,60))
    //cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    cloud.lifetime= 200;
    
    //asignar lifetime a la variable
    cloud.lifetime = 134
    
    //ajustar la profundidad
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;

cloudgroup.add(cloud);

    }

  }

function spawnObstacle(){

  if(frameCount % 90 === 0) {
var obstacle = createSprite(700, 160, 20, 40);
obstacle.velocityX= -4;
var dado = Math.round(random(1,6));
switch(dado){
  case 1: obstacle.addImage(obstacle1); break;
    case 2: obstacle.addImage(obstacle2); break;
      case 3: obstacle.addImage(obstacle3); break;
        case 4: obstacle.addImage(obstacle4); break;
          case 5: obstacle.addImage(obstacle5); break;
            case 6: obstacle.addImage(obstacle6); break;
}
obstacle.scale = 0.8;
obstacle.lifetime = 300;
obstaclesgroup.add(obstacle);


}
}   
