var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, sophia, edges, cup

function setup() {
  canvas = createCanvas(400, 400)

wall1 = createSprite(100, 30, 10, 100)
wall2 = createSprite(100, 200, 10, 100)
wall3 = createSprite(100, 150, 100, 10)
wall4 = createSprite(150, 105, 10, 100)
wall5 = createSprite(200, 200, 10, 100)
wall6 = createSprite(200, 80, 100, 10)
wall7 = createSprite(310, 30, 10, 100)
wall8 = createSprite(245, 150, 100, 10)
wall9 = createSprite(50, 150, 100, 10)
wall10 = createSprite(290, 200, 10, 100)
wall11 = createSprite(365, 200, 75, 10)
wall12 = createSprite(150, 200, 10, 75)
wall12.rotation = 45
wall13 = createSprite(50, 290, 100, 10)
wall14 = createSprite(225, 350, 10, 100)
wall15 = createSprite(290, 300, 10, 100)
wall16 = createSprite(320, 260, 50, 10)
wall17 = createSprite(365, 325, 75, 10)
wall18 = createSprite(175, 270, 10, 75)
wall18.rotation = 45
wall19 = createSprite(100, 370, 10, 75)
wall20 = createSprite(163, 355, 75, 10)
wall21 = createSprite(50, 330, 10, 75)
wall22 = createSprite(360, 40, 90, 10)
sophia = createSprite(40, 50, 10, 10)
sophia.shapeColor = "blue"
cup = createSprite(40, 210, 10, 10)
cup.shapeColor = "yellow"
}
  
function draw() {
  background("black")
  
  sophia.velocityX = 0
  sophia.velocityY = 0
  
  textSize(20)
  text("Sophia", 10, 80)
  text("Cup", 20, 240)
  
  if(keyDown("up")) {
    sophia.velocityY = -14
  }
  
  if(keyDown("down")) {
    sophia.velocityY = 14
  }
  
  if(keyDown("left")) {
    sophia.velocityX = -14
  }
  
  if(keyDown("right")) {
    sophia.velocityX = 14
  }
  
  if(sophia.isTouching(wall1)||sophia.isTouching(wall2)||sophia.isTouching(wall3)
  ||sophia.isTouching(wall4)||sophia.isTouching(wall5)||sophia.isTouching(wall6)
  ||sophia.isTouching(wall7)||sophia.isTouching(wall8)||sophia.isTouching(wall9)
  ||sophia.isTouching(wall10)||sophia.isTouching(wall11)||sophia.isTouching(wall12)
  ||sophia.isTouching(wall13)||sophia.isTouching(wall14)||sophia.isTouching(wall15)
  ||sophia.isTouching(wall16)||sophia.isTouching(wall17)||sophia.isTouching(wall18)
  ||sophia.isTouching(wall19)||sophia.isTouching(wall20)||sophia.isTouching(wall21)
  ||sophia.isTouching(wall22)) {
    sophia.x = 40
    sophia.y = 50
  }

  if(sophia.isTouching(cup)) {
    sophia.velocityX = 0
    sophia.velocityY = 0
    textSize(19)
    text("You won", 205, 200)
  }
  
  edges = createEdgeSprites();
  sophia.bounceOff(edges)
  drawSprites()
}
