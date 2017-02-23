var brickRowCount = 13;
var brickColumnCount = 5;
var brickWidth = 80;
var brickHeight = 20;
var brickPadding = 7;
var brickOffsetLeft = 30;
var brickOffsetTop = 25;
var bricks = [];

for(var c = 0;c<brickColumnCount;c++){
  bricks[c] = [];
  for(var r = 0; r<brickRowCount; r++){
    bricks[c][r] = {x: 0, y: 0, status:1};
    console.log(bricks[c][r]);
  }

}
