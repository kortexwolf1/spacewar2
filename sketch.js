var score=0 
var ship1,ship2
var meteor,gems,hearts,bonus
var backg
function preload() {
  shipImg1=loadImage("./sprites/spaceship001.png")
  shipImg2=loadImage("sprites/spaceship002.png")
  astroidImg=loadImage("sprites/astroid.png")
  bg=loadImage("sprites/ bg.png")
}

function setup() {
  createCanvas(1450,900);
  backg=createSprite(400,0)
  backg.addImage(bg)
  backg.scale=1.5
  ship1=createSprite(750,700,50,50)
  ship1.addImage(shipImg1)
  ship1.scale=0.3
  ship2=createSprite(750,100,50,50)
  ship2.addImage(shipImg2)
  ship2.scale=0.3
  astroid=createSprite(500,300,50,50)
 astroid.addImage(astroidImg)
 astroid.scale=0.2
}

function draw() {
 background("blue");
  textSize(20);
  fill("white");
  text("Score: " + score, 50, 50);

  drawSprites()
}