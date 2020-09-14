var PLAY;
var END;
var gameState = PLAY;

var bow , arrow, green_balloon, red_balloon ,pink_balloon ,blue_balloon, background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
 score=0; 
  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group();
  arrowGroup= new Group();

}

function draw() {
  // moving ground
  
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY;
  if(frameCount%80===0)
  {
  var ballColour=Math.round(random(1,4));
  switch(ballColour)
  {
    case 1:generateRedBalloon();
           break;
    case 2:generateGreenBalloon();
           break;
    case 3:generateBlueBalloon();
           break;
    case 4:generatePinkBalloon();
           break;
  }
  }
  
    
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    //var temp_arrow = createArrow();
    //temp_arrow.addImage(arrowImage);
    //temp_arrow.y = bow.y;
  }
  if(arrowGroup.isTouching(redB)) {
    redB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }
  if(arrowGroup.isTouching(greenB)) {
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score=score+2;
  }
  if(arrowGroup.isTouching(blueB)) {
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score=score+3;
  }
  if(arrowGroup.isTouching(pinkB)) {
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score=score+4;
  }
  drawSprites();
  //score=score+Math.round(frameCount/80);
   text("score-"+score, 500,30);
  
}

// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(360, 100, 5, 10);
  arrow.addImage(arrowImage);
  arrow.x=360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime=100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
  return arrow;
}
function generateRedBalloon() 
{
 red_balloon = createSprite(50, Math.round(random(60,390)), 1, 1);
  red_balloon.addImage(red_balloonImage);
  red_balloon.scale = 0.1 ;
  red_balloon.velocityX=3;
  red_balloon.lifetime=100;
  redB.add(red_balloon);
}
function generateGreenBalloon()
{
green_balloon = createSprite(100, Math.round(random(110,390)), 10, 10);
  green_balloon.addImage(green_balloonImage);
  green_balloon.scale = 0.1;
  green_balloon.velocityX=3;
  green_balloon.lifetime=100;
  greenB.add(green_balloon);
}
function generateBlueBalloon()
{
 blue_balloon = createSprite(140, Math.round(random(130,350)), 10, 10);
  blue_balloon.addImage(blue_balloonImage);
  blue_balloon.scale=0.1;
  blue_balloon.velocityX=3;
  blue_balloon.lifetime=100;
  blueB.add(blue_balloon);
}
function generatePinkBalloon()
{
pink_balloon = createSprite(180, Math.round(random(180,250)), 10, 10);
  pink_balloon.addImage(pink_balloonImage);
  pink_balloon.scale = 1.2;
  pink_balloon.velocityX=3;
  pink_balloon.lifetime=100;
  pinkB.add(pink_balloon);
}