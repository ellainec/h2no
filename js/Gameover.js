var daily;
var monthly;
var alltime;
Game.Gameover = function(game) {};

Game.Gameover.prototype = {

    create:function() {
        postScores();
        console.log(total + " " + playerName);
        this.createButton(game, "Gameover",
            100, 80,
            100, 25,
            function () {
                this.state.start('DailyLeaderboard');
            });
    },
    update:function(){

    },
    createButton:function(game, string, x, y, w, h, callBack) {
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
}

function postScores() {
    $.ajax({
        url: "db/postScore.php",
        //dataType: "json",
        data: {score: total, name: playerName},
        type: "POST",
        success: function () {
            console.log("worked");
            getScores();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("didn't work");
            console.log(jqXHR.statusText);
        }
    });
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

function getMonthlyScores() {
    $.ajax({
        url: "db/highscores.php",
        dataType: "json",
        data: {period:3},
        type: "POST",
        success: function(data) {
            monthly = data;
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR.statusText);
        }
    });
};

function getAllTimeScores() {
    $.ajax({
        url: "db/highscores.php",
        dataType: "json",
        data: {period:3},
        type: "POST",
        success: function(data) {
            alltime = data;
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR.statusText);
        }
    });
};