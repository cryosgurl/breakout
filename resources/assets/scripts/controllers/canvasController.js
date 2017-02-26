function draw(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawScore();
  drawLives();
  drawPaddle();
  collisionDetection();

  if(x+ dx >canvas.width - ballRadius || x + dx < ballRadius){
    dx = -dx;
  }
  if(y+ dy < ballRadius){
    dy = -dy;
  }
  //ball and paddle direction collision
  else if(y +dy > canvas.height - ballRadius){
    if (x>paddleX && x<paddleX + paddleWidth) {
      dx = 8*((x-(paddleX +paddleWidth/2))/paddleWidth);
      dy = -dy;
    }
    else{
      lives--;
      if(!lives){
        alert("game over");
        document.location.reload();
      }
      else{
        x = canvas.width/2;
        y = canvas.height - 30;
        dx = 6;
        dy = -6;
      }
    }
}
  if(rightPressed && paddleX < canvas.width - paddleWidth/2){
    paddleX += 14;
  }
  if(leftPressed && paddleX > -paddleWidth/2){
    paddleX -= 14;
  }
  x += dx;
  y += dy;
  requestAnimationFrame(draw);
}
function drawScore(){
  ctx.font = "17px Arial";
  ctx.fillStyle = "#ff0d00";
  ctx.fillText("Score: " + score, 8 , 20);
  ctx.closePath();
}
function drawLives(){
  ctx.font = "17px Arial";
  ctx.fillStyle = "#ff0d00";
  ctx.fillText("Lives: " + lives, canvas.width - 65 , 20);
}
draw();
