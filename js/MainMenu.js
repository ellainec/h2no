var gameover;
var mobileDevice = false;
Game.MainMenu = function(game) {
    
    
};

//var titleScreen;

Game.MainMenu.prototype = {
    preload:function(){
        (function() {
            console.log("mainmenu");
            $.ajax({
                url: "db/postScore.php",
                dataType: "json",
                data: {name: 'Test', score: 10, period:1},
                type: "POST",
                success: function(data) {
                    weekly = data[0];
                    monthly = data[1];
                    alltime = data[2];
                    console.log(data);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(jqXHR.statusText);
                }
            });
        })();
        if (!game.device.desktop) {
            mobileDevice = true;
        }
    },
	create:function(game) {

		this.createLeaderButton(game, "Leaderboard", 
											game.world.centerX + 300, 
											game.world.centerY - 175,
											180, 50,
											function() {this.state.start('DailyLeaderboard');});
		if (mobileDevice) {
            this.createPlayButton(game, "Play",
                game.world.centerX,
                game.world.centerY,
                300, 100,
                function() {this.state.start('Level1mobile');});
		} else {
            this.createPlayButton(game, "Play",
                game.world.centerX,
                game.world.centerY,
                300, 100,
                function() {this.state.start('Level1');});
		}
		gameover = false;

	}, 
	update:function(game) {

			// for updating graphics -- this will include hover etc.


	},
    
	createPlayButton:function(game, string, x, y, w, h, callBack) {
			var button1 = game.add.button(x, y, 'button', callBack, this, 2, 1, 0);

			button1.anchor.setTo(0.5, 0.5);
			button1.width = w;
			button1.height = h;

			var txt = game.add.text(button1.x, button1.y, string, {
					font: "20pt press_start_2pregular", 
					fill: "#fff", 
					align: "center"
			});

			txt.anchor.setTo(0.5, 0.5);
	},
	
	createLeaderButton:function(game, string, x, y, w, h, callBack) {
        var button1 = game.add.button(x, y, 'button', callBack, this, 2, 1, 0);
        
        button1.anchor.setTo(0.5, 0.5);
        button1.width = w;
        button1.height = h;
        
        var txt = game.add.text(button1.x, button1.y, string, {
            font: "10pt press_start_2pregular", 
            fill: "#fff", 
            align: "center"
        });
        
        txt.anchor.setTo(0.5, 0.5);
  }
    
};