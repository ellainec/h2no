
	var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
	var logo = new Image(); 
	logo.src = "images/logo.png"; 
	
	var start = new Image(); 
	start.src ="images/start.png";
	
	var waterBot = new Image(); 
	waterBot.src = "images/WaterBot.png"; 
	
	//canvas resizing
	window.addEventListener("resize", resizeCanvas, false); 
	window.addEventListener("orientationchange", resizeCanvas, false);  
	resizeCanvas();
	
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
		var margin = (canvas.width-waterBot.width)/2; 
		ctx.drawImage(waterBot, margin, canvas.height-waterBot.height); 
	};
	
	logo.onload = drawLogo;
	start.onload = drawStart(); 
	waterBot.onload = drawRobot();
	
	function drawHome() { 
		drawLogo();
		drawStart();
		drawRobot();
	}
	
	setInterval(drawHome, 10);

	