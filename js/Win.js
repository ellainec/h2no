var completeTotalScore;
var completeTotalScoreText;
var finalLifeText;
var finalScoreText;
var finalTimeText;

Game.Win = function(game) {};

Game.Win.prototype = {

    create:function() {
		gameover = true;
		this.createButton(game, "CONGRATULATIONS!", 400, 100,
				500, 80,
				function () {
						this.state.start('DailyLeaderboard');
				});

        completeTotalScore = (function() {
            var totalScore = (lives.value() * 100) + score.value() + (timeLimit.value() * 10);
            function a() {
            }
            return {
                value: function() {
                    return totalScore;
                }
            };
        })();

		finalLifeText = game.add.text(400, 225, lives.value(), {
				font: "12pt press_start_2pregular",
				fill: "#fff",
				align: "center"
		});
		finalScoreText = game.add.text(400, 250, score.value(), {
				font: "12pt press_start_2pregular",
				fill: "#fff",
				align: "center"
		});
		finalTimeText = game.add.text(400, 275, timeLimit.value(), {
				font: "12pt press_start_2pregular",
				fill: "#fff",
				align: "center"
		});
		completeTotalScoreText = game.add.text(400, 300, completeTotalScore.value(), {
				font: "12pt press_start_2pregular",
				fill: "#fff",
				align: "center"
		});
        (function() {
            //console.log("ajax");
            $.ajax({
                url: "../db/postScore.php",
                dataType: "json",
                data: {name: playerName, score: 10, period:1},
                type: "POST",
                success: function(data) {
                    weekly = data[0];
                    monthly = data[1];
                    alltime = data[2];
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(jqXHR.statusText);
                }
            });
        })();
    },
    update:function(){
		finalLifeText.setText('Lives Left: ' + lives.value() + ' x 100');
		finalScoreText.setText('Score: ' + score.value());
		finalTimeText.setText('Time Life: ' + timeLimit.value() + ' x 10');
		completeTotalScoreText.setText('You Scored: ' + completeTotalScore.value());

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
};
