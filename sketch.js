var spaceImg, space;
var spaceshipImg, spaceship
var meteorImg, meteor, meteorGroup
var gameState = "play"

function preload(){
spaceImg=loadImage("space 2.jpg");
spaceshipImg=loadImage("spaceship.jpg");
meteorImg=loadImage("meteor.png");
}

function setup() {
    createCanvas(600,600);
space=createSprite(600,600);
space.addImage("space",spaceImg);
space.velocityY=7;

spaceship=createSprite(200,250,50,50);
spaceship.scale=0.2;
spaceship.addImage("spaceship",spaceshipImg); 

meteorGroup=new Group();
 
}

function draw() {
 if (gameState==="play") {

    if(space.y > 200) {
        space.y=200;
    }

    if (keyDown("right_arrow")) {
        spaceship.x = spaceship.x+3;

    }

    if (keyDown("space")) {
        spaceship.velocityY=-6;

    }

    if (keyDown("left_arrow")) {
        spaceship.x = spaceship.x-3;

    }

    if(meteorGroup.isTouching(spaceship)) {
        spaceship.velocityY=0;
        gameState==="end";
    }

    if(spaceship.y > 600) {
        spaceship.destroy();
        gameState==="end";
        
    }

    spaceship.velocityY=spaceship.velocityY+0.7;
    drawSprites();
   

 }
 
 if(gameState==="end") {
     stroke("yellow");
     fill("red");
     textsize=(70);
     text("GAME OVER",120,250)
 }
 spawnMeteors();

}

function spawnMeteors() {
    if(frameCount % 240 === 0){
    var meteor = createSprite(200,-50,50,50);
    meteor.scale=0.2;
    meteor.addImage("meteor",meteorImg);
    meteor.x=Math.round(random(120,400));
    meteor.velocityY=7;
    meteor.lifetime=800;
    meteorGroup.add(meteor);



    spaceship.depth=meteor.depth;
    spaceship.depth=spaceship.depth+1;

    }

}