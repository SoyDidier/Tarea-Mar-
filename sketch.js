
var boat ,boat_running;
var shipING;
var groundING;
var invisibleGround;

function preload(){
 shipING = loadAnimation("ship-1.png","ship-2.png");
 groundING = loadImage("sea.png")

}

function setup(){
  createCanvas(2000,700)
  boat = createSprite(300,300,40,20)
  ground = createSprite(200,180,400,20);
  boat.addAnimation("nadar",shipING);
  ground.addImage(groundING);
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false 

}

function draw(){
  background("blue")
  if (keyDown("space") && boat.y>150){
  boat.velocityY = -10
  }
  ground.velocityX = -6;
  if (ground.x<0 ){
    ground.x = ground.width/2;
  }
  //gravedad

 boat.velocityY= boat.velocityY +0.5;
 boat.collide(invisibleGround);
 drawSprites();
}
