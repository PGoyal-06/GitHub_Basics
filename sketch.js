var monkey,ground,obstaclesGroup,bananaGroup,score,bg,bananaImage,obstacleImage;

function preload(){
  
bg = loadImage("jungle.png");

monkey = loadAnimation("monkey_01.png,monkey_02.png,monkey_03.png,monkey_04.png,monkey_05.png,monkey_06.png,monkey_07.png,monkey_08.png,monkey_09.png,monkey_10.png");
  
bananaImage = loadImage("banana.png");
obstacleImage = loadImage("stone.png");  
  
}

function setup() {
  createCanvas(400, 400);
  
var bg = createSprite(200,200,400,20);
bg = addImage("jungle.png");  
bg.velocityX = -6;
bg.x = bg.width/2;
  
 ground.visible = false;
  
 monkey = addAnimation("monkey") 
}

function draw() {
  background(220);
  
if(bg.x<0){
bg.x = bg.width/2;  
}
  
  
 if(foodGroup.isTouching(monkey)){
 score = score+2;
 foodGroup = destroyEach;  
 }   
  
 switch(score){
   case 10 : monkey.scale = 0.12;
              break;
   case 20 : monkey.scale = 0.14;
              break;
   case 30 : monkey.scale = 0.16;
              break;
   case 40 : monkey.scale = 0.18;
              break;
       default : break;
       
}     

 if(obstaclesGroup.isTouching(monkey)){
    monkey.scale = 0.2; 
   }
  
 stroke("white");
  textsize(20);
  fill("white");
  text("score:"+score,500,50);
}