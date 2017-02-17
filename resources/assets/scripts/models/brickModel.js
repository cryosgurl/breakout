var brickRowCount = 13;
var brickColumnCount = 5;
var brickWidth = 80;
var brickHeight = 60;
var brickPadding = 7;
var brickOffsetleft = 20;
var brickOffsetright = 20;
var bricks = [];

for(var i = 0;i<brickColumnCount;i++){
  bricks[i] = [];
  for(var a = 0; a<brickRowCount; a++){
    bricks[i][a] = {x: 0, y: 0, status:1};
    console.log(bricks[i][a]);
  }

}
