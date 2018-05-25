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
var bossHP;

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

//var bossAdd = 1000;
var bossAlive;

//var finalBossScore;

var emitter;
var emitter2;
var emitter3;
var faucetEmitter;

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
        map.addTilesetImage('h2no_boss', 'tileSheet');

        backgroundFarLayer = map.createLayer('background_far');
        backgroundLayer = map.createLayer('background');
        mainLayer = map.createLayer('main');
        foregroundLayer = map.createLayer('foreground');
        mainLayer.resizeWorld();

        map.setCollisionBetween(1, 999, true, 'main');
		
		// ========================================================================
		// MAP VAR END
		
		
		// PLAYER VAR START
		// ========================================================================
		bossPlayerSpawnX = 575;
		bossPlayerSpawnY = 785;
		
		if (easterEggReward) {
			player = this.add.sprite(bossPlayerSpawnX, bossPlayerSpawnY, 'h2no_chris');
		} else {
			player = this.add.sprite(bossPlayerSpawnX, bossPlayerSpawnY, 'h2no');
		}
		
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
        robotDeath = this.add.audio('robotDeath');
        buttonStomp = this.add.audio('buttonStomp');
        springSound = this.add.audio('spring');
		
		// ========================================================================
		// SOUND END
		
		// UI TEXT START
		
		// ========================================================================
		timer = game.time.create(false);
		timer.loop(1000, this.countdown, this);
		timer.start();
		timeText = game.add.text(610, 40, timeLimit.value(), {
				font: "12pt press_start_2pregular",
				fill: "#fff",
				align: "center"
		});
		timeText.fixedToCamera = true;
		lifeText = game.add.text(40, 40, lives.value(), {
			font: "12pt press_start_2pregular",
			fill: "#fff",
			align: "center"
		});
		lifeText.fixedToCamera = true;
		scoreText = game.add.text(300, 40, score.value(), {
				font: "12pt press_start_2pregular",
				fill: "#fff",
				align: "center"
		});
		scoreText.fixedToCamera = true;
		
		// =======================================================================
		
		// UI TEXT END
		
		// MAP VARS
		
		// =======================================================================

		// Emitters
		emitter1 = game.add.emitter(1280, 526);
		emitter1.makeParticles('water', 0, 60, true);
		emitter1.start(true, 50, -1);
		emitter1.minParticleScale = 0.3;
		emitter1.maxParticleScale = 0.4;
		emitter1.lifespan = 4000;
		emitter1.setXSpeed(-25, 25);
		emitter1.setYSpeed(-600, -600);
		emitter1.gravity = 2000;
		emitter1.alpha = 0.5;

		emitter2 = game.add.emitter(1560, 526);
		emitter2.makeParticles('water', 0, 60, true);
		emitter2.start(true, 50, -1);
		emitter2.minParticleScale = 0.3;
		emitter2.maxParticleScale = 0.4;
		emitter2.lifespan = 4000;	
		emitter2.setXSpeed(-25, 25);
		emitter2.setYSpeed(-600, -600);
		emitter2.gravity = 2000;
		emitter2.alpha = 0.5;

		emitter3 = game.add.emitter(1280, 626);
		emitter3.makeParticles('water', 0, 500, true);
		emitter3.start(true, 50, -1);
		emitter3.bringToTop = true;
		emitter3.minParticleScale = 0.3;
		emitter3.maxParticleScale = 0.4;
		emitter3.lifespan = 3200;
		emitter3.setXSpeed(-5, 5);
		emitter3.setYSpeed(-355, -355);
		emitter3.gravity = 2000;
		emitter3.emitX = 1300;

		game.add.tween(emitter3).to( { emitX: 1540 }, 1850, Phaser.Easing.Back.InOut, true, 0, Number.MAX_VALUE, true);
		
		// Faucet Emitter
		faucetEmitter = game.add.emitter(1740, 480);
		faucetEmitter.makeParticles('water', 0, 200, true);
		faucetEmitter.start(false, 50, -1);
		faucetEmitter.minParticleScale = 0.8;
		faucetEmitter.maxParticleScale = 1;
		faucetEmitter.lifespan = 1000;
		faucetEmitter.setYSpeed(175, 165);
		faucetEmitter.setXSpeed(30, -30);
		faucetEmitter.gravity = 350;

		faucetTweenA = this.add.tween(faucetEmitter).to({minParticleScale: 0.4, maxParticleScale: 0.6}, 3000, Phaser.Easing.Linear.In, false, 500);
		faucetTweenB = this.add.tween(faucetEmitter).to({minParticleScale: 0.2, maxParticleScale: 0.4}, 3000, Phaser.Easing.Linear.In, false, 500);
		faucetTweenC = this.add.tween(faucetEmitter).to({minParticleScale: 0, maxParticleScale: 0}, 500, Phaser.Easing.Linear.In, false, 500);

		// Platforms
		platforms = this.add.group();
        platforms.enableBody = true;

		let xStartPos = 1180;
		let yStartPos = 475;
		let raftGap = 140;

		for (let amount = 4; amount > 0; amount--) {
			let platform = platforms.create(xStartPos, yStartPos, 'raft');
			platform.body.immovable = true;
			xStartPos += raftGap; 
		}

		// Boss
        bossButton = this.add.sprite(1780, 435, 'grey');
        this.physics.arcade.enable(bossButton, Phaser.Physics.ARCADE);
        bossButton.width = 32;
        bossButton.height = 32;
        bossButton.alpha = 0;
        bossButton.body.immovable = true;
        // bossButton.body.moves = false;

        faucetGroup = this.add.group();
        faucetGroup.enableBody = true;

        bossCollision = faucetGroup.create(1720, 450, 'grey');
        bossCollision.width = 128;
        bossCollision.height = 48;
        bossCollision.alpha = 0;
        bossCollision.body.immovable = true;

		boss = this.add.sprite(1706, 400, 'faucet');
		boss.width = 128;
		boss.height = 128;
		bossAlive = false;
		bossHP = 3;

		// Spring
        spring = this.add.sprite(1608, 100, 'spring');
        this.physics.arcade.enable(spring, Phaser.Physics.ARCADE);
		spring.body.immovable = true;
		spring.width = 48;
		spring.height = 48;

		// Water Floor
        waterFloor = this.add.sprite(1070, 480, 'cyan');
        this.physics.arcade.enable(waterFloor, Phaser.Physics.ARCADE);
        waterFloor.width = 800;
        waterFloor.height = 400;
		waterFloor.alpha = 0.5;
		
		// Ladder
		ladder = this.add.sprite(870, 415, 'blue');
		this.physics.arcade.enable(ladder, Phaser.Physics.ARCADE);
		ladder.width = 20;
		ladder.height = 500;
		ladder.alpha = 0;
		ladder.body.immovable = true;

		// Camera Boundary
		cameraBoundary = this.add.sprite(1055, 320, 'blue');
		this.physics.arcade.enable(cameraBoundary, Phaser.Physics.ARCADE);
		cameraBoundary.width = 1;
		cameraBoundary.height = 96;
		cameraBoundary.alpha = 0;
		cameraBoundary.body.immovable = true;
		cameraBoundary.body.moves = false;

		// ========================================================================
		
		// MAP VARS END
		
		// TWEENS START
		
		// ========================================================================

        waterTweenA = this.add.tween(waterFloor).to({y: waterFloor.world.y + 50}, 2000, Phaser.Easing.Linear.In, false, 500);
        platformTweenA = this.add.tween(platforms).to({y: 50}, 2000, Phaser.Easing.Linear.In, false, 500);
		
        waterTweenB = this.add.tween(waterFloor).to({y: waterFloor.world.y + 150}, 2000, Phaser.Easing.Linear.In, false, 500);
        platformTweenB = this.add.tween(platforms).to({y: 150}, 2000, Phaser.Easing.Linear.In, false, 500);
		
        waterTweenC = this.add.tween(waterFloor).to({y: waterFloor.world.y + 300 + 300}, 1000, Phaser.Easing.Linear.In, false, 500);
        platformTweenC = this.add.tween(platforms).to({y: 300 + 300}, 3000, Phaser.Easing.Linear.In, false, 500);

		bossAnimationTween = this.add.tween(boss).to({frame: 0}, 1000, Phaser.Easing.Linear.In, false, 1000);

		springAnimationTween = this.add.tween(spring).to({frame: 0}, 1000, Phaser.Easing.Linear.In, false, 1000);

        springTweenA = this.add.tween(spring).to({y: waterFloor.world.y - 2}, 2000, Phaser.Easing.Bounce.Out, false, 2000);
		
        springTweenB = this.add.tween(spring).to({y: waterFloor.world.y + 98}, 2000, Phaser.Easing.Linear.In, false, 500);
		
        springTweenC = this.add.tween(spring).to({y: waterFloor.world.y + 264 + 286}, 3000, Phaser.Easing.Linear.In, false, 500);
		
		cameraLockTween = this.add.tween(this.camera).to({x: 1056, y: 300}, 1000, Phaser.Easing.Linear.In, false, 0);

		// ========================================================================
		// TWEENS END
		
		// ========================================================================
		
		// this.lockCamera();
		this.camera.follow(player);
		
		this.world.bringToTop(mainLayer);
		this.world.bringToTop(foregroundLayer);
		this.world.bringToTop(timeText);
		this.world.bringToTop(scoreText);
		this.world.bringToTop(lifeText);

		if (!game.device.desktop) {
			mobile = true;
			this.gamepad = this.game.plugins.add(Phaser.Plugin.VirtualGamepad);
			this.joystick = this.gamepad.addJoystick(100, 325, 1, 'gamepad');
			this.button = this.gamepad.addButton(700, 325, 0.8, 'gamepad');
		}
		
	},
		
	// ========================================================================
	// UPDATE FUNCTION HERE!


	// ========================================================================
	update: function () {
		
		// ========================================================================
		// PHYSICS 
		
		// ========================================================================
		
		this.physics.arcade.collide(player, mainLayer);
		this.physics.arcade.collide(platforms, mainLayer);
		this.physics.arcade.collide(platforms, waterFloor);
		onPlatform = this.physics.arcade.collide(player, platforms);
        onFaucet = this.physics.arcade.collide(player, faucetGroup);
        onButton = this.physics.arcade.collide(player, bossButton);
        onSpring = this.physics.arcade.collide(player, spring);

		//emitter physics
		if(game.physics.arcade.overlap(player, emitter1)) {
			this.resetPlayer();
		}

		if(game.physics.arcade.overlap(player, emitter2)) {
			this.resetPlayer();
		}
		
		// Emitter3 Physics
		if (game.physics.arcade.overlap(player, emitter3)) {
			this.resetPlayer();
		}

		// ========================================================================
		// MOBILE CONTROL MOVEMENT PHYSICS WITH JOYSTICK
		
		// ========================================================================


		if (mobile) {
            if (this.button.isDown && (player.body.onFloor() 
				|| (player.body.touching.down && onPlatform)
				|| (player.body.touching.down && onFaucet))) {
				if (Math.abs(player.body.velocity.x) == 125) {
					player.body.velocity.y = -275;
					jumpSound.play();
				} else if (Math.abs(player.body.velocity.x) == 175) {
					player.body.velocity.y = -300;
					jumpSound.play();
				} else {
					player.body.velocity.y = -250;
					jumpSound.play();
				}
            }
			if (this.joystick.properties.left 
			&& player.body.velocity.x > -125 
			&& !player.body.blocked.left) {
				player.body.velocity.x -= 5;
				player.animations.play('left');
			}
			if (this.joystick.properties.right
			&& player.body.velocity.x < 125 
			&& !player.body.blocked.right) {
				player.body.velocity.x += 5;
				player.animations.play('right');
			}

			if (!this.joystick.properties.left 
			&& !this.joystick.properties.right) {
				if (player.body.velocity.x > 0) {
					player.body.velocity.x -= 5;
				}
				if (player.body.velocity.x < 0) {
					player.body.velocity.x += 5;
				}
				if (player.body.velocity.x == 0) {
					player.animations.play('idle');
				}
			}			
        }
		
		// ========================================================================
		// UI TEXT
		
		// ========================================================================

        timeText.setText('Time: ' + timeLimit.value());
		lifeText.setText('Lives: ' + lives.value());
		scoreText.setText('Score: ' + score.value());
		this.timeUp();
		
		// ========================================================================
		// FUNCTIONS
		
		
		// ========================================================================
		this.controls();

		this.climbLadder();
		if (bossHP > 0) {
			this.lockCamera();
		}
		
		this.stompButton();

        this.touchWaterFloor();

		this.onSpring();
		
		this.winGame();
	},

	controls: function () {
		if (!mobile) {
			if (!(cursors.left.isDown || leftTrue) 
			&& !(cursors.right.isDown || rightTrue)) {
				if (player.body.velocity.x > 0) {
					player.body.velocity.x -= 5;
				}
				if (player.body.velocity.x < 0) {
					player.body.velocity.x += 5;
				}
				if (player.body.velocity.x == 0) {
					player.animations.play('idle');
				}
			}

			if ((cursors.left.isDown || leftTrue) 
				&& player.body.velocity.x > -125 
				&& !player.body.blocked.left) {
				player.body.velocity.x -= 5;
				player.animations.play('left');
			}
			if ((cursors.right.isDown || rightTrue) 
				&& player.body.velocity.x < 125 
				&& !player.body.blocked.right) {
				player.body.velocity.x += 5;
				player.animations.play('right');
			}


			if ((controls.up.isDown || cursors.up.isDown || jumpTrue)
				&& (player.body.onFloor() 
				|| (player.body.touching.down && onPlatform)
				|| (player.body.touching.down && onFaucet))) {
				if (Math.abs(player.body.velocity.x) == 125) {
					player.body.velocity.y = -275;
					jumpSound.play();
				} else if (Math.abs(player.body.velocity.x) == 175) {
					player.body.velocity.y = -300;
					jumpSound.play();
				} else {
					player.body.velocity.y = -250;
					jumpSound.play();
				}
			}
		}
		
		// TODO: When reaching player.x = 848, player.y = 640, start win state!
		// if (player.y > 635) {
			// this.state.start('Win');
		// }
		
        // console.log(player.body.velocity.x);
    },
	render: function() {
		// game.debug.spriteInfo(player, 32, 48);
	},

	// ========================================================================
	// LOCKS CAMERA TO THE BOSS SCENE


	// ========================================================================
	lockCamera: function () {
		if (player.world.x > 1060) {
			this.camera.follow(null);
			cameraLockTween.start();
			this.physics.arcade.collide(player, cameraBoundary);
		}
    },
		
	// ========================================================================
	// COUNTDOWN CALLED FOR TIMER LOOP


	// ========================================================================
    countdown: function(){
        timeLimit.decrement();
    },
		
	// ========================================================================
	// TIME UP CALLED WHEN TIME RUNS OUT


	// ========================================================================
	timeUp: function(){
        if (timeLimit.value() == 0 || timeLimit.value() < 0) {
            //change this to something else later, like gameover or minus one life
            timer.stop();
			game.state.start('Gameover');
        }
    },
		
	// ========================================================================
	// RESET PLAYER: CALLED WHEN PLAYER DIES


	// ========================================================================
    resetPlayer: function () {
		let resetX = 1080;
		let resetY = 360;
		robotDeath.play();
        player.reset(resetX, resetY);
		lives.decrement();
	    console.log("died");
	    if (lives.value() === 0) {
		    game.state.start('Gameover');
	    }
    },

	climbLadder: function () {
		if (this.checkOverlap(player, ladder)) {
            player.body.velocity.y = -200;
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
			if (bossHP > 0) {
				boss.frame = 1;
				if (bossHP > 1) {
					player.body.velocity.x = -1500;
					player.body.velocity.y = -500;
				} else {
					player.body.velocity.x = -500;
					player.body.velocity.y = -500;
				}
					bossHP -= 1;
					buttonStomp.play();
					bossAnimationTween.start();
					// if (waterFloor.y == )
			}
			if (bossHP === 2) {
				this.lowerWaterA();
				//score += bossAdd;
				score.bossAdd();

				emitter1.on = true;
				emitter2.on = true;

				faucetTweenA.start();

			} else if (bossHP === 1) {
				this.lowerWaterB();
				//score += bossAdd;
                //finalBossScore = score;

				score.bossAdd();
				//finalBossScore = score.value();

				emitter1.on = false;
				emitter2.on = false;
				emitter3.on = true;

				faucetTweenB.start();

			} else if (bossHP === 0) {
				this.lowerWaterC();
				//score = finalBossScore + bossAdd;
                score.bossAdd();
				emitter3.on = false;

				faucetTweenC.start();
			}
		}
	},

	// ========================================================================
	// SPRING FUNCTIONALITY


	// ========================================================================

    onSpring: function () {
        if (onSpring) {
			springSound.play();
			spring.frame = 1;
            player.body.velocity.x = 500;
            player.body.velocity.y = -800;
			springAnimationTween.start();
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
		this.camera.follow(player);
    },

	// ========================================================================
	// CHECK OVERLAP FUNCTION


	// ========================================================================

    checkOverlap: function (sprite1, sprite2) {
        return Phaser.Rectangle.intersects(sprite1.getBounds(), sprite2.getBounds());
	},
	
	winGame: function () {
		if (waterFloor.world.y == 1080) {
			game.state.start('Win');
		}
	}
}