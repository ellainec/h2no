
var game = new Phaser.Game(800, 400, Phaser.CANVAS, 'Setup');

game.state.add('Boot', Game.Boot);
game.state.add('Preloader', Game.Preloader);
game.state.add('MainMenu', Game.MainMenu);
game.state.add('Level1', Game.Level1);
game.state.add('Level1mobile', Game.Level1mobile);
game.state.add('BossState', Game.BossState);
game.state.add('Gameover', Game.Gameover);
game.state.add('Win', Game.Win);
game.state.add('DailyLeaderboard', Game.DailyLeaderboard);
game.state.add('MonthlyLeaderboard', Game.MonthlyLeaderboard);
game.state.add('AllTimeLeaderboard', Game.AllTimeLeaderboard);


game.state.start('Boot');