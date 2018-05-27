
var count = 0;

Game.MonthlyLeaderboard = function(game) {
};

Game.MonthlyLeaderboard.prototype = {
	create:function() {
        var scoreText;
        scoreText= game.add.text(250, 80, "Rank", { fontSize: '14px', fill: '#FFFFFF' });
        scoreText= game.add.text(350, 80, "Name", { fontSize: '12px', fill: '#FFFFFF' });
        scoreText= game.add.text(600, 80, "Score", { fontSize: '12px', fill: '#FFFFFF' });
        var count = 0;

        if(!jQuery.isEmptyObject(monthly)) {
            count = Object.keys(monthly).length;
            console.log("not empty!");
        } else {
            console.log(" monthly empty!");
        }

        for (var i = 0, y = 110; i < 10; i++, y += 25) {
            scoreText = game.add.text(250, y, i + 1, {fontSize: '12px', fill: '#FFFFFF'});
            if (i <= count - 1) {
                scoreText = game.add.text(350, y, monthly[i]['name'], {fontSize: '12px', fill: '#FFFFFF'});
                scoreText = game.add.text(600, y, monthly[i]['score'], {fontSize: '12px', fill: '#FFFFFF'});
            } else {
                scoreText = game.add.text(350, y, 'empty', {fontSize: '12px', fill: '#FFFFFF'});
                scoreText = game.add.text(600, y, '--', {fontSize: '12px', fill: '#FFFFFF'});
            }
        }

       this.createButton(game, "Weekly",
            100, 80,
            140, 25,
            function () {
                this.state.start('DailyLeaderboard');
            });

        this.createButton(game, "Monthly",
            100, 160,
            140, 25,
            function () {
                this.state.start('MonthlyLeaderboard');
            });

        this.createButton(game, "All-time",
            100, 240,
            140, 25,
            function () {
                this.state.start('AllTimeLeaderboard');
            });
		    if (gameover) {
					this.createMainButton(game, "Play Again", 
															 700, 25, 180, 50,
															 function() {this.state.start('Level1');});
				} else {
					this.createMainButton(game, "Main menu", 
																700, 25, 180, 50,	
																function () {this.state.start('MainMenu');});
				}

    },

	update:function() {

	},

    render:function() {

    },

	createMainButton:function(game, string, x, y, w, h, callBack) {
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
    },

    createButton:function(game, string, x, y, w, h, callBack) {
        var button1 = game.add.button(x, y, 'button', callBack, this, 2, 1, 0);
        button1.anchor.setTo(0.5, 0.5);
        button1.width = w;
        button1.height = h;

        var txt = game.add.text(button1.x, button1.y, string, {
            font: "10pt press_start_2pregular",
            fill: "#fff",
            align: "left"
        });

        txt.anchor.setTo(0.5, 0.5);
    }
}


