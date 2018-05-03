Game.MainMenu = function(game) {
    
    
};

//var titleScreen;

Game.MainMenu.prototype = {
	create:function(game) {

		this.createLeaderButton(game, "Leaderboard", 
											game.world.centerX + 300, 
											game.world.centerY - 175,
											180, 50,
											function() {this.state.start('Leaderboard');});

		this.createPlayButton(game, "Play", 
											game.world.centerX, 
											game.world.centerY, 
											300, 100, 
											function() {this.state.start('Level1');});

		//titleScreen = game.add.sprite(game.world.centerX, game.world.centerY, 'titleScreen');
		//titleScreen.anchor.setTo(0.5, 0.5);

	}, 
	update:function(game) {

			// for updating graphics -- this will include hover etc.


	},
    
	createPlayButton:function(game, string, x, y, w, h, callBack) {
			var button1 = game.add.button(x, y, 'logo', callBack, this, 2, 1, 0);

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
        var button1 = game.add.button(x, y, 'logo', callBack, this, 2, 1, 0);
        
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