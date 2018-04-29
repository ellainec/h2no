
	var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
	var logo = new Image(); 
	logo.src = "images/logo.png"; 
	
	var start = new Image(); 
	start.src ="images/start.png";
	
	var robot = new Image(); 
	robot.src = "images/WaterBot.png"; 
	var robotHeight;
	var robotWidth;
	var robotX = 0;
	var robotY;
	
	var rightPressed = false; 
	var leftPressed = false; 
	var upPressed = false;
	var falling = false;
	
	//canvas resizing
	window.addEventListener("resize", resizeCanvas, false); 
	window.addEventListener("orientationchange", resizeCanvas, false);  
	resizeCanvas();
	
	document.addEventListener("keydown", keyDownHandler, false); 
	document.addEventListener("keyup", keyUpHandler, false); 
	
	function keyDownHandler(e) { 
		if(e.keyCode == 39) { 
			rightPressed = true; 
		}
		if(e.keyCode == 37) { 
			leftPressed = true;
		}
		if(e.keyCode == 38) { 
			upPressed = true; 
		}
	}

	function keyUpHandler(e) { 
		if (e.keyCode == 39) { 
			rightPressed = false; 
		}
		if (e.keyCode == 37) { 
			leftPressed = false;
		}
	}
	
	function resizeCanvas() { 
		if (window.innerWidth/2 < window.innerHeight) { 
			canvas.width = window.innerWidth*.95; 
			canvas.height = canvas.width/2;
		}
		else{
			var width = window.innerWidth;
			while(width/2 > window.innerHeight) { 
				width--;
			}
			canvas.width = width*.95;
			canvas.height = canvas.width/2;
		}
	}
	//end of canvas resizing
	
	var drawLogo = function() { 
		var width = canvas.width*.5; 
		var height = width *(logo.height/logo.width); 
		var margin = (canvas.width-width)/2; 
		ctx.drawImage(logo, margin, 0, width, height); 
	}
	
	var drawStart = function() { 
		var marginWidth = (canvas.width-start.width)/2; 
		var marginHeight = (canvas.height-start.height)/2;
		ctx.drawImage(start, marginWidth, marginHeight); 
	}
	
	var drawRobot = function() { 
		robotHeight = canvas.height*.2;
	  robotWidth = robotHeight*(robot.width/robot.height);
		ctx.drawImage(robot, robotX, robotY, robotWidth, robotHeight); 
	}
	
	logo.onload = drawLogo;
	start.onload = drawStart;
	robot.onload = drawRobot;
	
	function jump() { 
		if (!falling) { 
			robotY -= 5; 
			if (robotY <= canvas.height *.6) { 
				falling = true; 
			}
		}
		
		if (falling) { 
			robotY += 5; 
			if (robotY >= canvas.height - robotHeight) { 
				falling = false; 
				upPressed = false; 
			}
		}
	}
	function drawHome() { 
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawLogo();
		drawStart();
		if(!upPressed) { 
			robotY = canvas.height - robotHeight;
		} 
		
		if (upPressed) { 
			jump(); 
		}
			
		drawRobot();
		if(rightPressed) { 
			robotX += canvas.width*.005; 
		}
		
		if(leftPressed) { 
			robotX -= canvas.width*.005;
		}
	}
	
	
	setInterval(drawHome, 10);

	