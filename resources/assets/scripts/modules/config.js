var Config = (function () {
 	var canvas	= document.getElementById("gameCanvas");
		
	return {
		canvas : canvas,
		ctx : canvas.getContext('2d'),
		ballRadius = 10,
		x : canvas.width0/2,
		y : canvas.height - 30,
		dx : 6,
		dy : -6,
		score : 0,
		lives : 3,
		
		paddleHeight : 10,
		paddleWidth : 150,
		paddleX : (canvas.width - paddleWidth)/2,
		rightPressed : false,
		leftPressed : false,
		
		brickRowCount : 13,
		brickColumnCount : 5,
		brickWidth : 80,
		brickHeight : 20,
		brickPadding : 7,
		brickOffsetLeft : 30,
		brickOffsetTop : 25,
		bricks : []
		
    }
})();