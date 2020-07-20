var jungleI,junglemonkey,monkeyI,banana,bananaI,bananaGroup,stone,stoneI,stoneGroup,score,ground;
var PLAY,END,gamestate,gg,score,resetI,gameOverI,reset,gameOver;

function preload(){
  monkeyI=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  bananaI=loadImage("Banana.png")
  jungleI=loadImage("jungle.jpg")
  stoneI=loadImage("stone.png")
  resetI=loadImage("restart.png")
  gameOverI=loadImage("gameOver.png")
  
   
}


function setup() {
  
  createCanvas(600,400);
  jungle=createSprite(200,200);
  jungle.addImage("background",jungleI)
  jungle.velocityX=-2
  jungle.x=jungle.width/2
  monkey=createSprite(57,335)
  monkey.addAnimation("monkeyI",monkeyI)
  monkey.scale=0.2;
  bananaGroup= new Group();
  score=0;
  stoneGroup=new Group();
  
  reset=createSprite(250,200)
  reset.addImage("restart",resetI);
  gameOver=createSprite(260,112)
  gameOver.addImage("go",gameOverI)
  PLAY=1;
  END=0;
  gamestate=PLAY;
}

function draw(){
  banana();
  
 background(255); 
  if (jungle.x<0) {
    jungle.x=jungle.width/2;
  }
  ground =createSprite(200,350,600,10);
    ground.x =ground.width/2;
      ground.visible=false;
  monkey.collide(ground)

      
    if (gamestate===PLAY){
    
      
 
    if (monkey.isTouching(stoneGroup)) {
      monkey.scale= 0.3 
    }
    
    if (monkey.isTouching(stoneGroup)&&(monkey.scale=0.3)){
    gamestate=END;
    }
    if (monkey.isTouching(bananaGroup)){
      bananaGroup.destroyEach()
      score=score+1
    }

      banana();
     obstacles(); 

    if(keyDown("space")&&monkey.y>=252){
      monkey.velocityY = -15 ;

        }
       monkey.velocityY = monkey.velocityY + 0.8;
       
    if(monkey.isTouching(stoneGroup)){
      gamestate=END;  
        }
      stroke("white");
      textSize(20);
      fill("white");
      text("survival time:"+score,222,42);
      gameOver.visible=false;
      reset.visible=false;

      
  switch(score){
    case 20:monkey.scale=0.10
      break;
    case 40:monkey.scale=0.12
      break;
    case 60:monkey.scale=0.14
      break;
    case 80:monkey.scale=0.16
      break;
      default:break;
     
    
  }

    }else if(gamestate===END){
    gameOver.visible=true;
    monkey.velocityY=0;
    monkey.velocityX=0;
    reset.visible=true;
    jungle.velocityX=0
    bananaGroup.velocityX=0;
    bananaGroup.velocityY=0;
    stoneGroup.velocityX=0;
    stoneGroup.velocityY=0;
    bananaGroup.destroyEach();
    stoneGroup.destroyEach();
    text("game over",190,200)
  }
   if (mousePressedOver(reset)){
    resett(); 
  }
   
      drawSprites();
  stroke("white")
  textSize(20)
  fill("white")
  text("score :"+score,200,30)
}
function resett(){
  score=0;
  gamestate=PLAY;
  resett.visible=false;
  gameOver.visible=false;

  
}

function obstacles(){
   
  if(World.frameCount % 90 === 0){
    var stone=createSprite(400,335);
    stone.addImage("stoneI",stoneI)
    stone.scale=0.1
    stone.velocityX=-5
    stoneGroup.add(stone)
    stoneGroup.lifetime=200;
    
  }}
function banana() {

  if (World.frameCount % 90 === 0) {
    var banana = createSprite(400,335,40,10);
    banana.y = random(110,280);
    banana.addImage("bananaI",bananaI);
    banana.scale = 0.05;
    banana.velocityX = -3;
  bananaGroup.add(banana)
 bananaGroup.lifetime=200;
}
}