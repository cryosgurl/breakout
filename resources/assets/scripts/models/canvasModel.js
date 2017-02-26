var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height - 30;
var dx = 6;
var dy = -6;
var score = 0;
var lives = 3;

function collisionDetection(){
  for(var c=0;c<brickColumnCount;c++){
    for(var r=0;r<brickRowCount;r++){
      var b = bricks[c][r];
      if(b.status == 1){
        if(x>b.x && x<b.x+brickWidth && y>b.y && y<b.y+brickHeight){
          console.log("h8i");
          dy = -dy;
          b.status = 0;
          score += 7;
          //if(score == 13*5*7)
          if(score == brickRowCount*brickColumnCount*7){
            alert("you won");
            document.location.reload();
          }
        }
      }
    }
  }
}
