

var highScore;
//var period = 1;
//var name = "Kevin";
//var score = 170;
var scoreText;

$(document).ready(function() {
    $.ajax({
        url: "../db/highscores.php",
        dataType: "json",
        type: "POST",
        success: function(data) {
            highScore = data;
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR.statusText);
        }
    });

});

Game.Leaderboard = function(game) {
};

Game.Leaderboard.prototype = {
	create:function() {
        this.createMainButton(game, "MainMenu",
            game.world.centerX + 300,
            game.world.centerY - 175,
            180, 50,
            function () {
                this.state.start('MainMenu');
            });
        scoreText= game.add.text(16, 40, "Rank:", { fontSize: '12px', fill: '#FFFFFF' });
        scoreText= game.add.text(80, 40, "Name:", { fontSize: '12px', fill: '#FFFFFF' });
        scoreText= game.add.text(300, 40, "Score:", { fontSize: '12px', fill: '#FFFFFF' });
        for (var i = 0, y = 40; i <10; i++, y+= 30) {
            scoreText = game.add.text(16, 40+y, i+1, { fontSize: '12px', fill: '#FFFFFF' });
            scoreText = game.add.text(80, 40+y, highScore[i]['name'], { fontSize: '12px', fill: '#FFFFFF' });
            scoreText = game.add.text(300, 40+y, highScore[i]['score'], { fontSize: '12px', fill: '#FFFFFF' });
        }
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