var daily;
var monthly;
var alltime;
Game.Gameover = function(game) {};

Game.Gameover.prototype = {

    create: function () {
        console.log(timeLimit + " " + playerName);
        gameover = true;
        this.createButton(game, "Game Over", 400, 200,
            300, 80,
            function () {
                this.state.start('DailyLeaderboard');
            });
    },
    update: function () {

    },
    createButton: function (game, string, x, y, w, h, callBack) {
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
    }

};
