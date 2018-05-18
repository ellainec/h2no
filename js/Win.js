var daily;
var monthly;
var alltime;

var completeTotalScore;
var completeTotalScoreText;
Game.Win = function(game) {};

Game.Win.prototype = {

    create:function() {
		postScores();
		console.log(timeLimit + " " + playerName);
		gameover = true;
		this.createButton(game, "CONGRATULATIONS!", 400, 100,
				500, 80,
				function () {
						this.state.start('DailyLeaderboard');
				});
		completeTotalScore = (life * 100) + score + (timeLimit * 10);
		completeTotalScoreText = game.add.text(400, 300, completeTotalScore, {
				font: "12pt press_start_2pregular",
				fill: "#fff",
				align: "center"
		});
    },
    update:function(){
		completeTotalScoreText.setText('You Scored: ' + completeTotalScore);

    },
    createButton:function(game, string, x, y, w, h, callBack) {
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
}

function getScores() {
    $.ajax({
        url: "db/highscores.php",
        dataType: "json",
        data: {period:1},
        type: "POST",
        success: function(data) {
            daily = data[0];
            monthly = data[1];
            alltime = data[2];
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR.statusText);
        }
    });
};
