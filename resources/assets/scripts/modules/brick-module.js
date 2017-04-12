var brick = (function{}(

  var brickRowCount = 13;
      brickColumnCount = 5;
      brickWidth = 80;
      brickHeight = 20;
      brickPadding = 7;
      brickOffsetLeft = 30;
      brickOffsetTop = 25;
      bricks = [];

  var myObject = {}

  var myObject.brickPos = (function(){

    for(var c = 0; c<brickColumnCount; c++){
      bricks[c] = [];
      for(var r = 0; r<brickRowCount; r++){
        bricks[c][r] = {x: 0, y: 0, status:1};
      }
    }
  })();

  var myObject.draw = function (){
    for(var c=0;c<brickColumnCount;c++){
      for(var r=0;r<brickRowCount;r++){
        if(bricks[c][r].status==1){
          var brickX=(r*(brickWidth + brickPadding)) + brickOffsetLeft;
          var brickY=(c*(brickHeight + brickPadding)) + brickOffsetTop;
          bricks[c][r].x = brickX;
          bricks[c][r].y = brickY;
          canvas.ctx.beginPath();
          canvas.ctx.rect(brickX, brickY, brickWidth, brickHeight);
          canvas.ctx.fillStyle = "#009900";
          canvas.ctx.fill();
          canvas.ctx.closePath();
        }
      }
    }
  }

))();
