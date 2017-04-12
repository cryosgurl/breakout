var ball = (function(){

  myObject.draw = (function(){
    ctx.beginPath();
    ctx.arc(x,y,ballRadius,0,Math.PI*2);
    ctx.fillStyle = "#009900";
    ctx.fill();
    ctx.closePath();
  })();

})();
