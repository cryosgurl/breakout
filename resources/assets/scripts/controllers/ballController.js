function drawBall(){
  ctx.beginPath();
  ctx.arc(x,y,ballRadius,0,Math.PI*2);
  ctx.fillStyle = "#009900";
  ctx.fill();
  ctx.closePath();

}
