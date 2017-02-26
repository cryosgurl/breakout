function drawBricks(){
  for(var c=0;c<brickColumnCount;c++){
    for(var r=0;r<brickRowCount;r++){
      if(bricks[c][r].status==1){
        var brickX=(r*(brickWidth + brickPadding)) + brickOffsetLeft;
        var brickY=(c*(brickHeight + brickPadding)) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#009900";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}
