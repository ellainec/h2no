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
		this.load.spritesheet('h2no_chris', 'assets/characters/H2NObit_chris.PNG', 32, 48);
		// load map
		this.load.tilemap('map', 'assets/tilemaps/maps/level1_v4.json', null, Phaser.Tilemap.TILED_JSON);        
		// load tiles
		this.load.image('tiles', 'assets/tiles/h2no_tilesheet_pastel.png');

		this.load.image('buttonLeft', 'assets/buttons/arrowLeft.png');
		this.load.image('buttonJump', 'assets/buttons/arrowUp.png');
		this.load.image('buttonRight', 'assets/buttons/arrowRight.png');

		this.load.image('logo', 'assets/logo.png');
		this.load.image('button', 'assets/Button.png');

		this.load.spritesheet('baddie', 'assets/baddie.png', 32, 32, 4);
		this.load.image('chris', 'assets/tinychris.png');
		this.load.spritesheet('cat', 'assets/cat.png');
		this.load.spritesheet('h2no', 'assets/characters/H2NObit.png', 32, 48);
		this.load.spritesheet('gamepad', 'assets/gamepad/gamepad_spritesheet.png', 100, 100);
		this.load.image('water', 'assets/water.png');
		this.load.spritesheet('sprinkler', 'assets/sprinklerSprite.png', 64, 64);
		this.load.image('sprinklerCollision', 'assets/sprinkler_on.png', 64, 64);
		this.load.image('clock', 'assets/clock.png');

	  
	    // ==========================
	    // THIS IS FOR THE BOSS STAGE 
	    // ==========================
	  
		this.load.image('blue', 'assets/img/blue.png');
		this.load.image('grey', 'assets/img/grey.png');
		this.load.image('spring', 'assets/img/spring.png');

		this.load.spritesheet('dude', 'assets/img/dude.png', 32, 48);
		this.load.spritesheet('faucet', 'assets/img/faucet.png', 64, 64);
		this.load.image('tileSheet', 'assets/img/tiles.png');
		this.load.tilemap('boss_map', 'assets/map/boss_map.json', null, Phaser.Tilemap.TILED_JSON);

		this.load.audio('jumpSmall', 'assets/audio/effects/jump_small.wav');
		this.load.audio('jump', 'assets/audio/effects/jump.wav');
		this.load.audio('jumpBig', 'assets/audio/effects/jump_big.wav');
		this.load.audio('robotDeath', 'assets/audio/effects/robot_death.wav');
		this.load.audio('buttonStomp', 'assets/audio/effects/button_stomp.wav');
		this.load.audio('spring', 'assets/audio/effects/spring.wav');

	  
	    // ==========================
	    // THIS IS FOR NPC
	    // ==========================
	  
		
		this.load.image('npc_b1', 'assets/npc_boy1.png');
		this.load.image('npc_b2', 'assets/npc_boy2.png');
		this.load.image('npc_b3', 'assets/npc_boy3.png');
		this.load.image('npc_g1', 'assets/npc_girl1.png');
		this.load.image('npc_g2', 'assets/npc_girl2.png');
		this.load.image('npc_g3', 'assets/npc_girl3.png');
		this.load.spritesheet('bubble-border', 'assets/bubble-border-noshadow.png', 9, 9);
		this.load.image('bubble-tail', 'assets/bubble-tail-noshadow.png');
		this.load.bitmapFont('carrier-command', 'font/carrier_command.png', 'font/carrier_command.xml');

	    // ==========================
	    // THIS IS FOR DRONES
	    // ==========================

		this.load.image('platform', 'assets/drone.png');
        this.load.image('invisibleDrone', 'assets/bluedrone.png');
        this.load.start();
    },
    
    create:function() {
        this.state.start('MainMenu');
    }
    
    
}