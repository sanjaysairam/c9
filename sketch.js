var ship;
var sea,seaImage;

function preload() {
  ship = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png","ship-4.png");

  seaImage = loadImage("sea.png")
 
}

function setup() {
  createCanvas(400, 400);

  //create a ship sprite
  ship = createSprite(50,160,20,50);
  ship.addAnimation("ship", shipImage);
ship.scale = 0.2;
  
  //create a sea sprite
  sea = createSprite(200,180,400,20);
  sea.addImage("sea",seaImage);
  sea.x = ground.width /2;
  sea.velocityX = -4;
  
 
  
}

function draw() {
  background(220);
  console.log(ship.y)

  //jump when the space button is pressed
  if (keyDown("space") && ship.y>= 100) { 
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 0.8

  if (sea.x < 0) {
   sea.x = sea.width / 2;
  }
   
  ship.collide(sea);
  drawSprites();
}
