
var game = new Phaser.Game(800, 400, Phaser.CANVAS, 'Setup');

game.state.add('Boot', Game.Boot);
game.state.add('Preloader', Game.Preloader);
game.state.add('MainMenu', Game.MainMenu);
game.state.add('Level1', Game.Level1);
game.state.add('Boss', Game.Boss);
game.state.add('Gameover', Game.Gameover);
game.state.add('DailyLeaderboard', Game.DailyLeaderboard);
game.state.add('MonthlyLeaderboard', Game.MonthlyLeaderboard);
game.state.add('AllTimeLeaderboard', Game.AllTimeLeaderboard);


game.state.start('Boot');