
var game = new Phaser.Game(800, 400, Phaser.CANVAS, 'Setup');

game.state.add('Boot', Game.Boot);
game.state.add('Preloader', Game.Preloader);
game.state.add('MainMenu', Game.MainMenu);
game.state.add('Level1', Game.Level1);
game.state.add('Leaderboard', Game.Leaderboard);

game.state.start('Boot');