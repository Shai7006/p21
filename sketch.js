var path,boy,cash,diamonds,jwellery,goldbar,heart,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,goldbarG,heartG,swordGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  goldbarImg = loadImage("goldbar.png");
  heartImg = loadImage("heart.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
//create the canvas and adjust the window sizes to suit the device 
createCanvas(windowWidth,windowHeight);

path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 20;


//creating boy running
boy = createSprite(width/2,height-20,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
goldbarG=new Group();
heartG=new Group();
swordGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y >height){
    path.y = height/2;
  }

    createCash();
    createDiamonds();
    createJwellery();
    creategoldbar();
    createheart();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection + 25;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection + 50;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection= treasureCollection + 75; 
    
    }else if (goldbarG.isTouching(boy)) {
        goldbarG.destroyEach();
        treasureCollection= treasureCollection + 100;

      }else if (heartG.isTouching(boy)) {
        heartG.destroyEach();
        treasureCollection= treasureCollection + 125;
  
      


    }else{
      if(swordGroup.isTouching(boy)) {
        gameState=END;
        
        boy.addAnimation("SahilRunning",endImg);
        boy.x=width/2;
        boy.y=height/2;
        boy.scale=0.6;
        
        cashG.destroyEach();
        diamondsG.destroyEach();
        jwelleryG.destroyEach();
        goldbarG.destroyEach();
        heartG.destroyEach();
        swordGroup.destroyEach();
        
        cashG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);
        jwelleryG.setVelocityYEach(0);
        goldbarG.destroyEach(0);
        heartG.destroyEach(0);
        swordGroup.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,width-150,30);
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
   // Modify the positions of cash 
    var cash = createSprite(Math.round(random(50, width-50),40, 10, 10));
    cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 20;
  cash.lifetime = 200;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
       // Modify the positions of diamonds 

    var diamonds = createSprite(Math.round(random(50, width-50),40, 10, 10));
    diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 20;
  diamonds.lifetime = 200;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
    //   Modify the positions of jwellery to make them spawn throughout the available screen size.

    var jwellery = createSprite(Math.round(random(50, width-50),40, 10, 10));
    jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 20;
  jwellery.lifetime = 200;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
    //   Modify the positions of sword to make them spawn throughout the available screen size.

    var sword = createSprite(Math.round(random(50, width-50),40, 10, 10));
    sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 20;
  sword.lifetime = 200;
  swordGroup.add(sword);
  }
}
function creategoldbar() {
  if (World.frameCount % 410 == 0) {
    //   Modify the positions of goldbar to make them spawn throughout the available screen size.

    var goldbar = createSprite(Math.round(random(50, width-50),40, 10, 10));
    goldbar.addImage(goldbarImg);
  goldbar.scale=0.13;
  goldbar.velocityY = 20;
  goldbar.lifetime = 200;
  goldbarG.add(goldbar);
  }
}

function createheart() {
  if (World.frameCount % 410 == 0) {
    //   Modify the positions of heart to make them spawn throughout the available screen size.

    var heart = createSprite(Math.round(random(50, width-50),40, 10, 10));
    heart.addImage(heartImg);
  heart.scale=0.13;
  heart.velocityY = 20;
  heart.lifetime = 200;
  heartG.add(heart);
  }
}
