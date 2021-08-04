var ball /// global variable, can be used anywhere in any function
function setup() { /// in function setup, write things only done once
  createCanvas(400,400);
  ball = createSprite(200,200,20,20)
}

function draw() /// done each second written here
{
  background(200);
  if(keyDown(RIGHT_ARROW)){
    ball.x = ball.x+5
  }
  if(keyDown(LEFT_ARROW)){
    ball.x = ball.x-5
  }
  if(keyDown(UP_ARROW)){
    ball.y = ball.y-5
  }
  if(keyDown(DOWN_ARROW)){
    ball.y = ball.y+5
  }
  drawSprites()

/// to save code, press Ctrl S

}




