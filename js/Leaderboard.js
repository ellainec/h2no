Game.Leaderboard = function(game) {
	
};

Game.Leaderboard.prototype = {
	create:function() {
		this.createMainButton(game, "MainMenu", 
											game.world.centerX + 300, 
											game.world.centerY - 175,
											180, 50,
											function() {this.state.start('MainMenu');});
	},
		
	update:function() {
		
	},
		
	createMainButton:function(game, string, x, y, w, h, callBack) {
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
}