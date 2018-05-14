
var count = 0;

Game.MonthlyLeaderboard = function(game) {
};

Game.MonthlyLeaderboard.prototype = {
	create:function() {
        var scoreText;
        this.createMainButton(game, "Main menu",
            game.world.centerX + 300,
            game.world.centerY - 175,
            180, 50,
            function () {
                this.state.start('MainMenu');
        });
        scoreText= game.add.text(250, 80, "Rank", { fontSize: '14px', fill: '#FFFFFF' });
        scoreText= game.add.text(350, 80, "Name", { fontSize: '12px', fill: '#FFFFFF' });
        scoreText= game.add.text(600, 80, "Score", { fontSize: '12px', fill: '#FFFFFF' });
        var count = 0;

        if(!jQuery.isEmptyObject(monthly)) {
            count = Object.keys(monthly).length;
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

       this.createButton(game, "Daily",
            100, 80,
            100, 25,
            function () {
                this.state.start('DailyLeaderboard');
            });

        this.createButton(game, "Monthly",
            100, 160,
            100, 25,
            function () {
                this.state.start('MonthlyLeaderboard');
            });

        this.createButton(game, "All-time",
            100, 240,
            100, 25,
            function () {
                this.state.start('AllTimeLeaderboard');
            });

    },

	update:function() {

	},

    render:function() {

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
    },

    createButton:function(game, string, x, y, w, h, callBack) {
        var button1 = game.add.button(x, y, 'blueButton', callBack, this, 2, 1, 0);
        button1.anchor.setTo(0.5, 0.5);
        button1.width = w;
        button1.height = h;

        var txt = game.add.text(button1.x -40, button1.y - 5, string, {
            font: "10pt press_start_2pregular",
            fill: "#fff",
            align: "left"
        });
    }
}


