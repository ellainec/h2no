var waterFloor;
var platforms;
var platformA;
var platformB;
var platformC;
var boss;
var bossButton;
var faucetGroup;
var bossCollision;
var onPlatform;
var onBoss;
var spring;

var jumpSound;
var smallJumpSound;
var bigJumpSound;
var robotDeath;
var buttonStomp;
var springSound;

var waterTweenA;
var platformTweenA;
var waterTweenB;
var platformTweenB;
var waterTweenC;
var platformTweenC;

var springTweenA;
var springTweenB;
var springTweenC;

var bossPlayerSpawnX;
var bossPlayerSpawnY;

var bossAdd = 1000;

Game.BossState = function (game) { };

Game.BossState.prototype = {
		
	// ========================================================================
	// CREATE FUNCTION HERE


	// ========================================================================
	create: function () {
		
		this.physics.startSystem(Phaser.Physics.ARCADE);
		
		
		// ========================================================================
		// MAP VAR START 
		
		// ========================================================================
		map = this.add.tilemap('boss_map');
        map.addTilesetImage('tiles', 'tileSheet');

        layerMain = map.createLayer(0);
        layerMain.resizeWorld();

        map.setCollisionBetween(1, 999, true);
		
		// ========================================================================
		// MAP VAR END
		
		
		// PLAYER VAR START
		// ========================================================================
		bossPlayerSpawnX = 360;
		bossPlayerSpawnY = 60;
		
		player = this.add.sprite(bossPlayerSpawnX, bossPlayerSpawnY, 'h2no');
		player.anchor.setTo(0.5, 0.5);
		// player.animations.add('idle',[0, 1], 1, true); (make a sprite sheet)
		// Enable physics on player
		this.physics.enable(player, Phaser.Physics.ARCADE);
		// Ground and edges of the world
		player.body.collideWorldBounds = true;
		player.body.gravity.y = 600;
		
		player.animations.add('idle', [4], 10, true);
		player.animations.add('left', [0, 1, 2, 3], 10, true);
		player.animations.add('right', [5, 6, 7, 8], 10, true);
		
		// ========================================================================
		// PLAYER VAR END
		
		
		// SOUND START
		// ========================================================================
		
		jumpSound = this.add.audio('jump');
        smallJumpSound = this.add.audio('jumpSmall');
        bigJumpSound = this.add.audio('jumpBig');
        robotDeath = this.add.audio('robotDeath');
        buttonStomp = this.add.audio('buttonStomp');
        springSound = this.add.audio('spring');
		
		// ========================================================================
		// SOUND END
		
		
		
		// CONTROLS START
		// ========================================================================
		
		controls = {
			up: this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR),
		};
		cursors = this.input.keyboard.createCursorKeys();
	    
		if (!game.device.desktop) {
		mobile = true;
		this.gamepad = this.game.plugins.add(Phaser.Plugin.VirtualGamepad);
		this.joystick = this.gamepad.addJoystick(100, 325, 1, 'gamepad');
		this.button = this.gamepad.addButton(700, 325, 0.8, 'gamepad');
		}
		
		// ========================================================================
		
		// CONTROLS END
		
		
		// UI TEXT START
		
		// ========================================================================
		timer = game.time.create(false);
		timer.loop(1000, this.countdown, this);
		timer.start();
		timeText = game.add.text(610, 40, timeLimit, {
				font: "12pt press_start_2pregular",
				fill: "#fff",
				align: "center"
		});
		timeText.fixedToCamera = true;
		lifeText = game.add.text(40, 40, life, {
			font: "12pt press_start_2pregular",
			fill: "#fff",
			align: "center"
		});
		lifeText.fixedToCamera = true;
		scoreText = game.add.text(300, 40, score, {
				font: "12pt press_start_2pregular",
				fill: "#fff",
				align: "center"
		});
		scoreText.fixedToCamera = true;
		
		// =======================================================================
		
		// UI TEXT END
		
		// MAP VARS
		
		// =======================================================================
		platforms = this.add.group();
        platforms.enableBody = true;

        platformA = platforms.create(430, 476, 'grey');
        platformA.width = 32;
        platformA.height = 8;
        platformA.body.immovable = true;

        platformB = platforms.create(510, 476, 'grey');
        platformB.width = 32;
        platformB.height = 8;
        platformB.body.immovable = true;

        platformC = platforms.create(590, 476, 'grey');
        platformC.width = 32;
        platformC.height = 8;
        platformC.body.immovable = true;

        bossButton = this.add.sprite(687, 436, 'grey');
        this.physics.arcade.enable(bossButton, Phaser.Physics.ARCADE);
        bossButton.width = 24;
        bossButton.height = 6;
        bossButton.alpha = 0;
        bossButton.body.immovable = true;
        // bossButton.body.moves = false;

        faucetGroup = this.add.group();
        faucetGroup.enableBody = true;

        bossCollision = faucetGroup.create(658, 446, 'grey');
        bossCollision.width = 24;
        bossCollision.height = 32;
        bossCollision.alpha = 0;
        bossCollision.body.immovable = true;

        boss = this.add.sprite(656, 430, 'faucet');

        spring = this.add.sprite(598, 260, 'spring');
        this.physics.arcade.enable(spring, Phaser.Physics.ARCADE);
        spring.width = 16;
        spring.height = 16;
        spring.body.immovable = true;

        waterFloor = this.add.sprite(0, 480, 'blue');
        this.physics.arcade.enable(waterFloor, Phaser.Physics.ARCADE);
        waterFloor.width = window.screen.width;
        waterFloor.height = window.screen.height;
        waterFloor.alpha = 0.8;
		// ========================================================================
		
		// MAP VARS END
		
		// TWEENS START
		
		// ========================================================================

        waterTweenA = this.add.tween(waterFloor).to({y: waterFloor.world.y + 50}, 2000, Phaser.Easing.Linear.In, false, 500);
        platformTweenA = this.add.tween(platforms).to({y: 50}, 2000, Phaser.Easing.Linear.In, false, 500);
		
        waterTweenB = this.add.tween(waterFloor).to({y: waterFloor.world.y + 150}, 2000, Phaser.Easing.Linear.In, false, 500);
        platformTweenB = this.add.tween(platforms).to({y: 150}, 2000, Phaser.Easing.Linear.In, false, 500);
		
        waterTweenC = this.add.tween(waterFloor).to({y: waterFloor.world.y + 300 + 300}, 3000, Phaser.Easing.Linear.In, false, 500);
        platformTweenC = this.add.tween(platforms).to({y: 300 + 300}, 3000, Phaser.Easing.Linear.In, false, 500);

        springTweenA = this.add.tween(spring).to({y: waterFloor.world.y + 30}, 2000, Phaser.Easing.Bounce.Out, false, 2000);
		
        springTweenB = this.add.tween(spring).to({y: waterFloor.world.y + 130}, 2000, Phaser.Easing.Linear.In, false, 500);
		
        springTweenC = this.add.tween(spring).to({y: waterFloor.world.y + 280 + 300}, 3000, Phaser.Easing.Linear.In, false, 500);
		
		// ========================================================================
		// TWEENS END
		
		// ========================================================================
		
		this.lockCamera();
		

		
	},
		
	// ========================================================================
	// UPDATE FUNCTION HERE!


	// ========================================================================
	update: function () {
		
		// ========================================================================
		// PHYSICS 
		
		// ========================================================================
		
		this.physics.arcade.collide(player, layerMain);
		this.physics.arcade.collide(platforms, layerMain);
		this.physics.arcade.collide(platforms, waterFloor);
		onPlatform = this.physics.arcade.collide(player, platforms);
        onFaucet = this.physics.arcade.collide(player, faucetGroup);
        onButton = this.physics.arcade.collide(player, bossButton);
        onSpring = this.physics.arcade.collide(player, spring);

		
		// ========================================================================
		// CONTROL MOVEMENT PHYSICS
		
		// ========================================================================
		if ((controls.up.isDown || cursors.up.isDown || jumpTrue)
            && (player.body.onFloor() || player.body.touching.down)) {
            jumpNow();
        }

        // controls
        if (cursors.left.isDown || leftTrue) {
            moveLeft();
            player.animations.play('left');
        } else if (cursors.right.isDown || rightTrue) {
            moveRight();
            player.animations.play('right');
        } else {
            if (player.body.velocity.x >= playerSlow) {
                player.body.velocity.x -= playerSlow;
            } else if (player.body.velocity.x < -playerSlow) {
                player.body.velocity.x += playerSlow;
            } else {
                player.body.velocity.x = 0;
            }
            player.animations.play('idle');
        }

		if (mobile) {
            if (this.button.isDown) {
                jumpNow();
            }
            if (this.joystick.properties.right) {
            	moveRight();
				player.animations.play('right');
            } else if (this.joystick.properties.left) {
            	moveLeft();
				player.animations.play('left');
            } else {
				if (player.body.velocity.x >= playerSlow) {
					player.body.velocity.x -= playerSlow;
				} else if (player.body.velocity.x < -playerSlow) {
					player.body.velocity.x += playerSlow;
				} else {
					player.body.velocity.x = 0;
				}
				player.animations.play('idle');
			}		
        }
		
		// ========================================================================
		// UI TEXT
		
		// ========================================================================

        timeText.setText('Time: ' + timeLimit);
		lifeText.setText('Lives: ' + life);
		scoreText.setText('Score: ' + score);
		this.timeUp();
		
		// ========================================================================
		// FUNCTIONS
		
		
		// ========================================================================
		this.stompButton();

        this.touchWaterFloor();

        this.onSpring();
	},
		
	// ========================================================================
	// LOCKS CAMERA TO THE BOSS SCENE


	// ========================================================================
	lockCamera: function () {

        this.camera.x = 336;
        this.camera.y = 336;
    },
		
	// ========================================================================
	// COUNTDOWN CALLED FOR TIMER LOOP


	// ========================================================================
    countdown: function(){
        timeLimit--;
    },
		
	// ========================================================================
	// TIME UP CALLED WHEN TIME RUNS OUT


	// ========================================================================
	timeUp: function(){
        if (timeLimit == 0 || timeLimit < 0) {
            //change this to something else later, like gameover or minus one life
            timer.stop();
			game.state.start('Gameover');
        }
    },
		
	// ========================================================================
	// RESET PLAYER: CALLED WHEN PLAYER DIES


	// ========================================================================
    resetPlayer: function () {
        player.reset(bossPlayerSpawnX, bossPlayerSpawnY);
		life--;
	    console.log("died");
	    if (life === 0) {
		    game.state.start('Gameover');
	    }
    },

	// ========================================================================
	// Checks if player touches the water, if it true, resetPlayer


	// ========================================================================

    touchWaterFloor: function () {
        if (this.checkOverlap(player, waterFloor)) {
            this.resetPlayer();
        }

    },

	// ========================================================================
	// Checks if stomped on the button for faucet, if true, calls on tweens and
	// sends player flying back to start


	// ========================================================================

    stompButton: function () {
        if (onButton) {
            if (boss.frame != 3) {
                player.body.velocity.x = -1000;
                player.body.velocity.y = -400;
                boss.frame += 1;
                buttonStomp.play();
            }
            if (boss.frame == 1) {
                this.lowerWaterA();
				score += bossAdd;
            } else if (boss.frame == 2) {
                this.lowerWaterB();
				score += bossAdd;
            } else if (boss.frame == 3) {
                this.lowerWaterC();
				score += bossAdd;
            }
        }
    },

	// ========================================================================
	// SPRING FUNCTIONALITY


	// ========================================================================

    onSpring: function () {
        if (onSpring) {
            player.body.velocity.x = 100;
            player.body.velocity.y = -800;
            springSound.play();
        }
    },

	// ========================================================================
	// TWEEN FUNCTIONS


	// ========================================================================

    lowerWaterA: function () {
        waterTweenA.start();
        platformTweenA.start();
        springTweenA.start();
    },

    lowerWaterB: function () {
        waterTweenB.start();
        platformTweenB.start();
        springTweenB.start();
    },

    lowerWaterC: function () {
        waterTweenC.start();
        platformTweenC.start();
        springTweenC.start();
        // game.state.start('win');
        // this.camera.follow(player);
    },

	// ========================================================================
	// CHECK OVERLAP FUNCTION


	// ========================================================================

    checkOverlap: function (sprite1, sprite2) {
        return Phaser.Rectangle.intersects(sprite1.getBounds(), sprite2.getBounds());
    }
		
}