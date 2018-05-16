// load in assets and set up loading screen
Game.Preloader = function(game) {
    
    this.preloaderBar = null;
};

Game.Preloader.prototype = {
    preload:function() {
        
        //LOAD ALL ASSETS
        
      this.load.image('blueButton', 'assets/buttons/blue_button.png');

			this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			// load player sprite
			this.load.image('WaterBot', 'assets/WaterBot.png');
			this.load.image('WaterBotSkin', 'assets/WaterBotSkin.png');
			// load map
			this.load.tilemap('map', 'assets/tilemaps/maps/level1_v3.json', null, Phaser.Tilemap.TILED_JSON);        
			// load tiles
			this.load.image('tiles', 'assets/tiles/h2no_tilesheet.png');

			this.load.image('buttonLeft', 'assets/buttons/arrowLeft.png');
			this.load.image('buttonJump', 'assets/buttons/arrowUp.png');
			this.load.image('buttonRight', 'assets/buttons/arrowRight.png');

			this.load.image('logo', 'assets/logo.png');
			this.load.image('button', 'assets/Button.png');

			this.load.spritesheet('baddie', 'assets/baddie.png', 32, 32, 4);
			this.load.spritesheet('chris', 'assets/chris.png');
			this.load.spritesheet('cat', 'assets/cat.png');
			this.load.spritesheet('h2no', 'assets/characters/H2NObit.png', 32, 48);
			this.load.spritesheet('gamepad', 'assets/gamepad/gamepad_spritesheet.png', 100, 100);
        	this.load.image('water', 'assets/water.png');
			this.load.spritesheet('sprinkler', 'assets/sprinklerSprite.png', 64, 64);
			this.load.image('sprinklerCollision', 'assets/sprinkler_on.png', 64, 64);
			this.load.image('clock', 'assets/clock.png');

			// drone
			this.load.image('platform', 'assets/droneTwo.png');
        
    },
    
    create:function() {
        this.state.start('MainMenu');
    }
    
    
}