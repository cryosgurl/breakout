var paddleHeight = 10;
var paddleWidth = 150;
var paddleX = (canvas.width - paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;

function keyDownHandler(e){
  if(e.keyCode == 39){
    rightPressed = true;
  }
  if(e.keyCode == 37){
    leftPressed = true;
  }
}
function keyUpHandler(e){
  if(e.keyCode == 39){
    rightPressed = false;
  }
  if(e.keyCode == 37){
    leftPressed = false;
  }
}
function mouseMoveHandler(e){
  var relX = e.clientX - canvas.offsetLeft;
  if(relX>0 && relX<canvas.width){
    paddleX = relX - paddleWidth/2;
  }
}
