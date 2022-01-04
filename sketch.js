var player, ps;
var Ps, pS, pwf, pwb, pwr, pwl;
var BG, BG_img;
var obstacle, obstacle_img;
function preload(){
  //player
  Ps=loadImage("Player/PS.png");
  pS=loadImage("Player/PWF1.png");
  pwf=loadImage("Player/PWf1.png","Player/PWF2.png","Player/PWF3.png","Player/PWf1.png","Player/PWF2.png","Player/PWF3.png");
  pwb=loadImage("Player/PWB1.png","Player/PWB2.png","Player/PWB3.png");
  pwl=loadImage("Player/PWL1.png","Player/PWL2.png","Player/PWL3.png");
  pwr=loadImage("Player/PWR1.png","Player/PWR2.png","Player/PWR3.png");
  BG_img=loadImage("Bg.jpg");
  obstacle_img=loadImage("Obstacle.png");
}

function setup() {
  createCanvas(1080,720);
  //background
  BG=createSprite(width/2,height/2,1000,500);
  BG.scale=2.5;
  BG.addImage("bg",BG_img);
  //obstacle
  obstacle=createSprite(BG.x,BG.y,1000,500);
  obstacle.scale=2.5;
  obstacle.addImage("obstacle image",obstacle_img);
  //ps
   ps=createSprite(540, 150,25,25);
   ps.scale=1;
   ps.addAnimation("Ps",Ps);
   ps.visible=false;
  //player
  player=createSprite(540, 150,25,25);
  player.scale=1;
  player.addAnimation("pS",pS);
  player.addAnimation("pwf",pwf);
  player.addAnimation("pwb",pwb);
  player.addAnimation("pwr",pwr);
  player.addAnimation("pwl",pwl);
}

function draw() {
  background("black");
  console.log(player.x,player.y);
  //ps position
  player.x=ps.x;
  player.y=ps.y;
  camera.x=player.x;
  camera.y=player.y;
  //player movement
  playerMovement();
  drawSprites();
}
function playerMovement(){
  if(keyDown(UP_ARROW)){
    ps.y-=5;
    player.changeAnimation("pwb",pwb);
  }else if(keyDown(DOWN_ARROW)){
    ps.y+=5
    player.changeAnimation("pwf",pwf);
  }else if(keyDown(RIGHT_ARROW)){
    ps.x+=5
    player.changeAnimation("pwr",pwr);
  }else if(keyDown(LEFT_ARROW)){
    ps.x-=5
    player.changeAnimation("pwl",pwl);
  }
}


//mam i want to set the collider of obstacle sprite in respective of its shape.
// i want to make this a invisible sprite on bostcles like tree, house, and cliffs.
// so when th sprite touch it it bounce back that will look the sprite is blocking through the tree, house etc.
// but the collider radius throw the sprite out of the screen.