// =======================================================================================================================================
//                                   SPRINKLERS START
//
//=========================================================================================================================================
createSprinkler = function (index, game, x, y) {
    var thisSprinkler = sprinklersGroup.create(x, y, 'sprinkler');

    game.physics.enable(thisSprinkler, Phaser.Physics.ARCADE);

    //hit
    thisSprinkler.hit = false;
    thisSprinkler.name = index.toString();
    thisSprinkler.anchor.setTo(0.5, 0.6);
    thisSprinkler.scale.setTo(0.5, 0.5);
    thisSprinkler.body.immovable = true;
    thisSprinkler.body.allowGravity = false;
    thisSprinkler.body.collideWorldBounds = true;

    // Sets the Collision Size
    thisSprinkler.body.setSize(16, 8, 25, 6);
    // Sprinkler Sprite Animation
    thisSprinkler.animations.add([0], 1, true);
    var box = boxGroup.create(x, y+5, 'sprinklerCollision');
    thisSprinkler.sprinklerCollision = box;
    boxGroup.add(box);

    thisSprinkler.emitter = game.add.emitter(x, y);
    game.physics.arcade.enable(thisSprinkler.emitter, Phaser.Physics.ARCADE);
    thisSprinkler.emitter.makeParticles('water', 0, 75, true);
    thisSprinkler.emitter.start(false, 40, -1);


    thisSprinkler.emitter.y = thisSprinkler.y - 2;
    thisSprinkler.emitter.minParticleScale = 0.3;
    thisSprinkler.emitter.maxParticleScale = 0.5;
    thisSprinkler.emitter.lifespan = 3400;

    thisSprinkler.emitter.setYSpeed(-500, -450);
    thisSprinkler.emitter.setXSpeed(-75, 75);
    thisSprinkler.emitter.gravity = 400;

    // Sprinkler Collision Physics
    game.physics.arcade.enable(thisSprinkler.sprinklerCollision, Phaser.Physics.ARCADE);
    thisSprinkler.sprinklerCollision.name = index.toString();
    thisSprinkler.sprinklerCollision.anchor.setTo(0.5, 0.4);
    thisSprinkler.sprinklerCollision.scale.setTo(0.45, 0.4);
    thisSprinkler.sprinklerCollision.body.immovable = true;
    thisSprinkler.sprinklerCollision.body.allowGravity = false;
    thisSprinkler.sprinklerCollision.body.collideWorldBounds = true;

    //Sets the Sprinkler Boundary to invisible
    thisSprinkler.sprinklerCollision.alpha = 0;

    thisSprinkler.emitter.checkWorldBounce = true;
    thisSprinkler.emitter.outOfBoundsKill = true;

};

createSprinkler2 = function (index, game, x, y) {
    var thisSprinkler2 = sprinklersGroup.create(x, y, 'sprinkler');

    game.physics.enable(thisSprinkler2, Phaser.Physics.ARCADE);

    //hit
    thisSprinkler2.hit = false;
    thisSprinkler2.name = index.toString();
    thisSprinkler2.anchor.setTo(0.5, 0.6);
    thisSprinkler2.scale.setTo(0.5, 0.5);
    thisSprinkler2.body.immovable = true;
    thisSprinkler2.body.allowGravity = false;
    thisSprinkler2.body.collideWorldBounds = true;

    // Sets the Collision Size
    thisSprinkler2.body.setSize(16, 8, 25, 6);
    // Sprinkler Sprite Animation
    thisSprinkler2.animations.add([0], 1, true);
    var box = boxGroup.create(x, y+5, 'sprinklerCollision');
    thisSprinkler2.sprinklerCollision = box;

    // Emitter
    thisSprinkler2.emitter = game.add.emitter(x, y);

    thisSprinkler2.emitter.makeParticles('water', 0, 75, true);
    thisSprinkler2.emitter.start(false, 40, -1);

    thisSprinkler2.emitter.y = thisSprinkler2.y - 2;
    thisSprinkler2.emitter.minParticleScale = 0.3;
    thisSprinkler2.emitter.maxParticleScale = 0.5;
    thisSprinkler2.emitter.lifespan = 3400;


    thisSprinkler2.emitter.setYSpeed(-380, -375);
    //   this.emitter.setXSpeed(-500, -450);
    thisSprinkler2.emitter.gravity = 600;
    thisSprinkler2.emitter.name = index.toString();

    // Sprinkler Collision Physics
    game.physics.arcade.enable(thisSprinkler2.sprinklerCollision, Phaser.Physics.ARCADE);
    thisSprinkler2.sprinklerCollision.name = index.toString();
    thisSprinkler2.sprinklerCollision.anchor.setTo(0.5, 0.4);
    thisSprinkler2.sprinklerCollision.scale.setTo(0.45, 0.4);
    thisSprinkler2.sprinklerCollision.body.immovable = true;
    thisSprinkler2.sprinklerCollision.body.allowGravity = false;
    thisSprinkler2.sprinklerCollision.body.collideWorldBounds = true;

    //Sets the Sprinkler Boundary to invisible
    thisSprinkler2.sprinklerCollision.alpha = 0;

    thisSprinkler2.emitter.checkWorldBounce = true;
    thisSprinkler2.emitter.outOfBoundsKill = true;

};
createSprinkler3 = function (index, game, x, y) {
    var thisSprinkler3 = sprinklersGroup.create(x, y, 'sprinkler');

    game.physics.enable(thisSprinkler3, Phaser.Physics.ARCADE);

    //hit
    thisSprinkler3.hit = false;
    thisSprinkler3.name = index.toString();
    thisSprinkler3.anchor.setTo(0.5, 0.6);
    thisSprinkler3.scale.setTo(0.5, 0.5);
    thisSprinkler3.body.immovable = true;
    thisSprinkler3.body.allowGravity = false;
    thisSprinkler3.body.collideWorldBounds = true;

    // Sets the Collision Size
    thisSprinkler3.body.setSize(16, 8, 25, 6);
    // Sprinkler Sprite Animation
    thisSprinkler3.animations.add([0], 1, true);
    var box = boxGroup.create(x, y+5, 'sprinklerCollision');
    thisSprinkler3.sprinklerCollision = box;

    // Emitter
    thisSprinkler3.emitter = game.add.emitter(x, y);
    thisSprinkler3.emitter2 = game.add.emitter(x, y);

    thisSprinkler3.emitter.makeParticles('water', 0, 190, true);
    thisSprinkler3.emitter.start(false, 10, 10);

    thisSprinkler3.emitter2.makeParticles('water', 0, 190, true);
    thisSprinkler3.emitter2.start(false, 10, 10);

    thisSprinkler3.emitter.y = thisSprinkler3.y + 7;
    thisSprinkler3.emitter.minParticleScale = 0.3;
    thisSprinkler3.emitter.maxParticleScale = 0.5;
    thisSprinkler3.emitter.lifespan = 3200;

    thisSprinkler3.emitter2.y = thisSprinkler3.y + 7;
    thisSprinkler3.emitter2.minParticleScale = 0.3;
    thisSprinkler3.emitter2.maxParticleScale = 0.5;
    thisSprinkler3.emitter2.lifespan = 3200;

    thisSprinkler3.emitter.setYSpeed(-575, -565);
    thisSprinkler3.emitter.gravity = 1800;
    thisSprinkler3.emitter.emitX = thisSprinkler3.x - 350;

    thisSprinkler3.emitter2.setYSpeed(-575, -565);
    thisSprinkler3.emitter2.gravity = 1800;
    thisSprinkler3.emitter2.emitX = thisSprinkler3.x - 100;


    thisSprinkler3.game.add.tween(thisSprinkler3.emitter).to( { emitX: thisSprinkler3.x - 100 }, 1450, Phaser.Easing.Back.InOut, true, 0, Number.MAX_VALUE, true);

    thisSprinkler3.game.add.tween(thisSprinkler3.emitter2).to( { emitX: thisSprinkler3.x - 350 }, 1450, Phaser.Easing.Back.InOut, true, 0, Number.MAX_VALUE, true);


    thisSprinkler3.emitter.name = index.toString();

    // Sprinkler Collision Physics
    game.physics.arcade.enable(thisSprinkler3.sprinklerCollision, Phaser.Physics.ARCADE);
    thisSprinkler3.sprinklerCollision.name = index.toString();
    thisSprinkler3.sprinklerCollision.anchor.setTo(0.5, 0.4);
    thisSprinkler3.sprinklerCollision.scale.setTo(0.45, 0.4);
    thisSprinkler3.sprinklerCollision.body.immovable = true;
    thisSprinkler3.sprinklerCollision.body.allowGravity = false;
    thisSprinkler3.sprinklerCollision.body.collideWorldBounds = true;

    //Sets the Sprinkler Boundary to invisible
    thisSprinkler3.sprinklerCollision.alpha = 0;

    thisSprinkler3.emitter.checkWorldBounce = true;
    thisSprinkler3.emitter.outOfBoundsKill = true;


};


// =======================================================================================================================================
//                                   SPRINKLERS END
//
//=========================================================================================================================================

Cat = function (index, game, x, y) {
    this.cat = game.add.sprite(x, y, 'cat');

    this.cat.name = index.toString();
    game.physics.enable(this.cat, Phaser.Physics.ARCADE);
    this.cat.body.immovable = false;
    this.cat.body.allowGravity = false;
    this.cat.body.collideWorldBounds = false;
};

// ==================================
// VARIABLES BELOW
// ==================================

var enemy1;
var npc1;
var cat1;
var cat2;

var sprinklersGroup;
var boxGroup;
var npcGroup;
var sprinkler1;
//LAI FUN
var sprinklerX1 = [575, 2190, 3400, 6436, 7455, 8785, 13253];
var sprinklerY1 = [916, 724, 596, 596, 852, 852, 852];
var sprinklerHit1 = [false, false, false, false, false, false, false];
var currentSprinkler1 = 0;
var sprinkler2;

var sprinklerX2 = [2835, 3600, 5257, 6145, 8393, 9673, 13584, 15124];
var sprinklerY2 = [596, 852, 852, 852, 852, 852, 852, 596];

var sprinklerHit2 = [false, false, false, false, false, false, false, false];
var currentSprinkler2 = 0;



Game.Level1 = function (game) {

};

var map;
var layer;
var frontLayer;
var backlayer;

var player;
var playerSpeed = 40;
var playerMaxSpeed = 350;
var playerSlow = 60;
var Jump1 = 400; // NEW CONSTANT
var Jump2 = 550; // NEW CONSTANT
var maxY = 800; // NEW CONSTANT
var jumpTimer = 0;
var jumpTrue = false;
var leftTrue = false;
var rightTrue = false;
var life;
var lifeText;
var gravityWorld = 1400; // NEW CONSTANT
var initX = 100;
var initY = 900;
//var initX = 15700; // For testing
//var initY = 560    // For testing
var respawnX = 100; // NEW CONSTANT (until checkpoints)
var respawnY = 900; // NEW CONSTANT (until checkpoints)

var controls = {};
var cursors;
var mobile = false;

var playerName;

// BOSS
var bossButton;
var easterButton;
var chrisButton;

//TIMER//
var initTime = 300;
var timer;
var timeLimit;
var timeText;

// SCORE//
var sprinklerAdd = 10;
var score;
var scoreText;

//CLOCKS FOR EXTRA TIME
var clocks;
var clockAdd = 10;
var easterEggReward;

// SOUND EFFECTS
var jumpSound = null;
var robotDeath = null;
var buttonStomp = null;

//TEST SPRINKLERS//
var sprinklerX = [557, 1588];
var sprinklerY = [904 + 12, 840 + 12];
var currentSprinklerPosition = 0;
var currentSprinkler;

// ==================================
// CREATE FUNCTION BELOW
// ==================================

Game.Level1.prototype = {

    create: function (game) {
        //DEBUG
		easterEggReward = false;
		
		console.log(easterEggReward);
        game.time.advancedTiming = true;

        
        // =======================================================================================================================================
        //                                   MAP VARIABLES START
        //=========================================================================================================================================


		this.stage.backgroundColor = '#3598db';
	  	//this.stage.backgroundColor = '#000000';

		this.stage.backgroundColor = '#3598db';
		this.physics.startSystem(Phaser.Physics.ARCADE);
		this.physics.arcade.gravity.y = gravityWorld;  // SET UP NEW CONSTANT HERE!

		// add map with 'map id'
        map = this.add.tilemap('map');
	    // add tileset with 'tileset id', 'key'
        map.addTilesetImage('h2no_tilesheet_pastel', 'tiles');
			
        secretLayer = map.createLayer('secret');
		backgroundFarLayer = map.createLayer('background_far');
		backgroundLayer = map.createLayer('background');
		mainLayer = map.createLayer('main');
		foregroundLayer = map.createLayer('foreground');

		// uncomment to check layer collision boxes
		// layer.debug = true;
        mainLayer.resizeWorld();
		
		map.setCollisionBetween(0, 999, true, 'main');
		map.setCollisionBetween(0, 999, true, 'secret');


        // =======================================================================================================================================
        //                                   MAP VARIABLES START
        //=========================================================================================================================================

        // =======================================================================================================================================
        //                                   CONTROL VARIABLES START
        //=========================================================================================================================================

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

        // =======================================================================================================================================
        //                                   CONTROL VARIABLES END
        //=========================================================================================================================================

        // =======================================================================================================================================
        //                                   NPC START - GOES BEFORE PLAYER!
        //=========================================================================================================================================


        npcGroup = game.add.group();

        //!!!!!!!!!!!CHRIS NEEDS TO BE THE FIRST NPC CREATED!!!!!!!!!!!!!
        createNPC(game, 7855, 800, 'chris', 200,
            "Have you seen my cat?");

        createNPC(game, 200, 880, 'npc_b1', 200,
            "Why don't you make yourself useful and turn off some sprinklers huh?");

        createNPC(game, 3745, 550, 'npc_b2', 200,
            "Gotcha H2NO, I’ll turn off the tap while I’m brushing my teeth!");

        createNPC(game, 5555, 880, 'npc_b3', 300,
            "Really? Standard shower heads use 2.5 gallons of water per minute?! " +
            "I guess I should really take shorter showers, I’ll tell all my friends too. Thanks H2NO!");

        createNPC(game, 700, 880, 'npc_g1', 200,
            "Turn off the tap while I’m scrubbing my hands with soap? That’s not a bad idea, thanks H2NO!");

        createNPC(game, 900, 900, 'npc_g2', 200,
            "He tried to run the dishwasher with only half a load, can you believe it? " +
            "I almost lost it H2NO, what a water waster!");

        createNPC(game, 1000, 900, 'npc_g3', 200,
            "Sorry H2NO, I’ll only water my lawn in the early morning instead of the afternoon from now on…");
        // =======================================================================================================================================
        // NPC END //=========================================================================================================================================


        // =======================================================================================================================================
        //                                   PLAYER VARIABLES START
        //=========================================================================================================================================

        //assignment of playerName can't be outside in global scope
        playerName = sessionStorage.getItem("playerName");

        // Set up players
        player = this.add.sprite(initX, initY, 'h2no');
        player.anchor.setTo(0.5, 0.5);
        // Enable physics on player
        this.physics.enable(player, Phaser.Physics.ARCADE);
        // Ground and edges of the world
        player.body.collideWorldBounds = true;
        player.body.maxVelocity.y = maxY; // SET UP NEW CONSTANT
        this.camera.follow(player);

        player.animations.add('idle', [4], 10, true);
        player.animations.add('left', [0, 1, 2, 3], 10, true);
        player.animations.add('right', [5, 6, 7, 8], 10, true);
        // =======================================================================================================================================
        //                                   PLAYER VARIABLES END
        //====================================================================================================================================
        // =======================================================================================================================================
        //                                   SPRINKLER CREATE START
        //=========================================================================================================================================

		sprinklersGroup = game.add.group();
		boxGroup = game.add.group();

		//CREATE NEW SPRINKLERS HERE
		//kevin - search purposes
		createSprinkler(1, game, sprinklerX1[currentSprinkler1], sprinklerY1[currentSprinkler1]);
		sprinkler1 = sprinklersGroup.children[0];

        createSprinkler2(1, game, sprinklerX2[currentSprinkler2], sprinklerY2[currentSprinkler2]);
        sprinkler2 = sprinklersGroup.children[1];

        //createSprinkler3(1, game, sprinklerX3[currentSprinkler3], sprinklerY3[currentSprinkler3]);
        //sprinkler3 = sprinklersGroup.children[2];

        createSprinkler(1, game, 1588, 852);
        
        createSprinkler(1, game, 3855, 436);

        createSprinkler(1, game, 9137, 852);

        //kevin - maybe
        // createSprinkler(1, game, 8785, 852);

        createSprinkler3(1, game, 4950, 840 + 12);
		
        createSprinkler3(1, game, 14140, 840 + 12);

    

        this.world.bringToTop(sprinklersGroup);
        //this.world.bringToTop(sprinklersGroup2);
        //this.world.bringToTop(sprinklersGroup3);

        // =======================================================================================================================================
        //                                   SPRINKLER CREATE END
        //=========================================================================================================================================

        // =======================================================================================================================================
        //                                   GAME UI START
        //=========================================================================================================================================

		// TIMER //
		timer = game.time.create(false);
		timer.loop(1000, this.countdown, this);
		timer.start();
		timeLimit = initTime;
		timeText = game.add.text(610, 40, timeLimit, {
				font: "12pt press_start_2pregular",
				fill: "#fff",
				align: "center"
		});
		timeText.fixedToCamera = true;

		// LIFE // -- Die a certain amount of times before the game over screen pops up
		life = 10;
		lifeText = game.add.text(40, 40, life, {
				font: "12pt press_start_2pregular",
				fill: "#fff",
				align: "center"
		});
		lifeText.fixedToCamera = true;
		
		score = 0;
		scoreText = game.add.text(300, 40, score, {
				font: "12pt press_start_2pregular",
				fill: "#fff",
				align: "center"
		});
		scoreText.fixedToCamera = true;
        // =======================================================================================================================================
        //                                   GAME UI END
        //=========================================================================================================================================


		
		// =====================================
		
		
		// THIS BOSS BUTTON IS FOR TESTING PURPOSES -- 
		// WILL BE REMOVED FROM OFFICIAL GAME
		
		
		// =======================================
		
	    bossButton = this.createButton(game, "Boss", 
									   400, 350, 100, 50,
									   function () {this.state.start('BossState');});
		
		// =========================================
		
		// =====================================
		
		
		// THIS EASTEREGG BUTTON IS FOR TESTING PURPOSES -- 
		// WILL BE REMOVED FROM OFFICIAL GAME
		
		
		// =======================================
		
	    easterButton = this.createButton(game, "Cat", 
									   200, 350, 100, 50,
									   function () {player.x = 11000;
												    player.y = 0;});
		chrisButton = this.createButton(game, "Owner", 
									   600, 350, 100, 50,
									   function () {player.x = 7855
													player.y = 800;});
		
		// =========================================

		
		// CLOCKS //
		clocks = game.add.group();
		clocks.enableBody = true;
		this.createClock(300, 300);
		this.createClock(500, 300);
		this.createClock(900, 300);

        // =======================================================================================================================================
        //                                   LOLOLOL THIS EASTER EGG DOE
        //=========================================================================================================================================

		cat1 = new Cat(3, game, 11150, 174);
		cat1.cat.scale.setTo(0.1, 0.1);

		cat2 = new Cat(3, game, 7830, 814);
		cat2.cat.scale.setTo(0.1, 0.1);
		cat2.cat.alpha = 0;

		// Tweens to make cat1 disappear, and cat2 appear next to Chris
		tweenCatFound = this.add.tween(cat1.cat).to({alpha: 0}, 500, Phaser.Easing.Linear.In, false, 500);
		tweenCatReappear = this.add.tween(cat2.cat).to({alpha: 1}, 500, Phaser.Easing.Linear.In, false, 500);
		tweenCatFound.chain(tweenCatReappear);

		
        // =======================================================================================================================================
        //                                   LAYER CONTROL START
        //=========================================================================================================================================

		this.world.bringToTop(player);
		this.world.bringToTop(foregroundLayer);
        // =======================================================================================================================================
        //                                   LAYER CONTROL END
        //=========================================================================================================================================

        // AUDIO STUFF
        jumpSound = this.add.audio('jump');

    },

    // ==================================
    // UPDATE FUNCTION BELOW
    // ==================================

    update: function () {
        this.physics.arcade.collide(player, mainLayer);
        //this.physics.arcade.collide(npcGroup, mainLayer);
        //ellaine - leave comment ps - this.physics.arcade.collide(npcGroup, backgroundLayer);
        //this.physics.arcade.overlap(player, clocks, collectClock, null, this);

        // =======================================================================================================================================
        //                                   SPRINKLER UPDATE START
        //=========================================================================================================================================
        //Collide Player with Sprinkler and SprinkerCollision
        this.physics.arcade.collide(player, sprinklersGroup, hitSprinklerFunction);
        this.physics.arcade.collide(player, boxGroup);

        //emitter physics
        for (var i = 0, len = sprinklersGroup.children.length; i < len; i++) {
            var sprinkler = sprinklersGroup.children[i];
            this.physics.arcade.overlap(player, sprinkler.emitter, this.resetPlayer);
            if ('emitter2' in sprinkler) {
                this.physics.arcade.overlap(player, sprinkler.emitter2, this.resetPlayer);
            }
        }

        /////////////////////
        ///NPC UPDATES
        /////////////////////
        for (var i = 0; i < npcGroup.children.length; i++) {
            npcGroup.children[i].body.velocity.x = 0;
        }

        /* ellaine
        for (var i = 0, len = sprinklersGroup3.children.length; i < len; i++) {
            var sprinklerEmitter = sprinklersGroup3.children[i].emitter;
            var sprinklerEmitter2 = sprinklersGroup3.children[i].emitter2;
            this.physics.arcade.overlap(player, sprinklerEmitter, this.resetPlayer);
            this.physics.arcade.overlap(player, sprinklerEmitter2, this.resetPlayer);
        }
        */

        for (var i = 0; i < npcGroup.children.length; i++) {
            if (checkOverlap(player, npcGroup.children[i])) {
                this.world.add(npcGroup.children[i].SpeechBubble);
                npcJump(npcGroup.children[i]);
            } else {
                // Make SpeechBubble disappear
                this.world.remove(npcGroup.children[i].SpeechBubble);
            }
        }

        if (player.position.x > sprinkler2.x) {
            sprinkler2.emitter.setXSpeed(500, 450);
        } else {
            sprinkler2.emitter.setXSpeed(-500, -450);
        }



        function hitSprinklerFunction(player, sprinkler) {
            if (!sprinkler.hit) {
                sprinkler.hit = true;
                sprinkler.emitter.on = false;
                score += sprinklerAdd;
                if ('emitter2' in sprinkler) {
                    sprinkler.emitter2.on = false;
                }
                sprinkler.animations.frame = 1;
                sprinkler.body.setSize(16, 8, 25, 18);
                sprinkler.sprinklerCollision.kill();
                player.body.velocity.y = -500;
            }

        }

        //RECYCLE SPRINKLERS//
        if (!sprinkler1.inCamera && game.time.now > 10000) {
            if (sprinkler1.hit === true) {
                sprinklerHit1[currentSprinkler1] = true;
            }
            if (player.x > sprinkler1.x && currentSprinkler1 + 1 < sprinklerX1.length && player.body.velocity.x > 0) {
                currentSprinkler1++;
                sprinklerOn(sprinkler1, sprinklerHit1, currentSprinkler1);
            }

            if (player.x < sprinkler1.x && currentSprinkler1 > 0 && player.body.velocity.x < 0) {
                currentSprinkler1--;
                sprinklerOn(sprinkler1, sprinklerHit1, currentSprinkler1);
            }

            repositionSprinkler(sprinkler1, sprinklerX1, sprinklerY1, currentSprinkler1);
        }

        if (!sprinkler2.inCamera && game.time.now > 10000) {
            if (sprinkler2.hit === true) {
                sprinklerHit2[currentSprinkler2] = true;
            }
            if (player.x > sprinkler2.x && currentSprinkler2 + 1 < sprinklerX2.length && player.body.velocity.x > 0) {
                currentSprinkler2++;
            }

            if (player.x < sprinkler2.x && currentSprinkler2 > 0 && player.body.velocity.x < 0) {
                currentSprinkler2--;
            }
            repositionSprinkler(sprinkler2, sprinklerX2, sprinklerY2, currentSprinkler2);
            sprinklerOn(sprinkler2, sprinklerHit2, currentSprinkler2);
        }


            // =======================================================================================================================================
            //                                   SPRINKLER UPDATE END
            //========================================================================================================================================


            if ((controls.up.isDown || cursors.up.isDown || jumpTrue)
                && (player.body.onFloor() || player.body.touching.down)) {
                jumpNow();
                jumpSound.play();
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
            if ((this.button.isDown || jumpTrue) && (player.body.onFloor() || player.body.touching.down)) {
                jumpNow();
				jumpSound.play();
            }
            if (this.joystick.properties.right) {
				player.animations.play('right');
            	moveRight();
            } else if (this.joystick.properties.left) {
				player.animations.play('left');
            	moveLeft();
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


            timeText.setText('Time: ' + timeLimit);
            lifeText.setText('Lives: ' + life);
            scoreText.setText('Score: ' + score);

            this.timeUp();

            findCat();
            easterEgg();
		
		// ============================================================================
		
		// For check of change to bossState
		// ============================================================================
		
		if (player.x >= 15760 && player.y < 1050) {
			this.state.start('BossState');
		}
		
		if (player.y >= 1050) {
			this.resetPlayer();
		}

    },


    render: function() {
        game.debug.text(game.time.fps, 10, 10, "#000000");
		game.debug.spriteInfo(player, 32, 48);

    },

    
	resetPlayer: function() {

        player.reset(respawnX, respawnY);
        life--;
        console.log("died");
        if (life === 0) {
            game.state.start('Gameover');
        }

        //ellaine - RESET SPRINKLERS
        currentSprinkler1 = 0;
        currentSprinkler2 = 0;

        repositionSprinkler(sprinkler1, sprinklerX1, sprinklerY1, currentSprinkler1);
        repositionSprinkler(sprinkler2, sprinklerX2, sprinklerY2, currentSprinkler2);

        sprinklerOn(sprinkler1, sprinklerHit1, currentSprinkler1);
        sprinklerOn(sprinkler2, sprinklerHit2, currentSprinkler2);
    },
    // for checkpoint create checkx/y

    // creating buttons
    createButton: function (game, imgString, x, y, w, h, callBack) {
        var button1 = game.add.button(x, y, imgString, callBack, this, 2, 1, 0);
        button1.anchor.setTo(0.5, 0.5);
        button1.width = w;
        button1.height = h;

    },
	
    // for checkpoint create checkx/y

    countdown: function () {
        timeLimit--;
    },

    timeUp: function () {
        if (timeLimit == 0 || timeLimit < 0) {
            timer.stop();
			game.state.start('Gameover');
        }
    },
    createButton:function(game, string, x, y, w, h, callBack) {
        var button1 = game.add.button(x, y, 'button', callBack, this, 2, 1, 0);

        button1.anchor.setTo(0.5, 0.5);
        button1.width = w;
        button1.height = h;
		button1.fixedToCamera = true;
		button1.alpha = 0.5;

        var txt = game.add.text(button1.x, button1.y, string, {
            font: "10pt press_start_2pregular",
            fill: "#fff",
            align: "center"
        });
        txt.anchor.setTo(0.5, 0.5);
		txt.fixedToCamera = true;
		txt.alpha = 0.5;
		
    },
    createClock: function (x, y) {
        var clock = clocks.create(x, y, 'clock');
        clock.body.gravity = false;
    }

};


// ==================================
// GENERAL FUNCTIONS TO BE CALLED
// ==================================

function moveLeft() {
	player.body.velocity.x = -playerMaxSpeed
}

function moveRight() {
	player.body.velocity.x = playerMaxSpeed;
}

function checkOverlap(spriteA, spriteB) {
    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);
}

function jumpNow() {
    if (game.time.now > jumpTimer) {
        if (Math.abs(player.body.velocity.x) >= (playerMaxSpeed / 2)) {
            player.body.velocity.y -= Jump2;
        } else {
            player.body.velocity.y -= Jump1;
        }
        jumpTimer = game.time.now + 500;
    }
}

// Makes the NPC jump
function npcJump(npc) {
    if (npc.body.blocked.down) {
        npc.body.velocity.y = -300;
    }
}

function sprinklerOn(sprinkler, sprinklerHit, currentSprinkler) {
    if (sprinklerHit[currentSprinkler]) {
        sprinkler.emitter.on = false;
        sprinkler.animations.frame = 1;
        sprinkler.body.setSize(16, 8, 25, 18);
        sprinkler.sprinklerCollision.kill();
        sprinkler.hit = true;
    } else {
        sprinkler.emitter.on = true;
        sprinkler.animations.frame = 0;
        sprinkler.hit = false;
        sprinkler.sprinklerCollision.revive();
        sprinkler.sprinklerCollision.x = sprinkler.x;
        sprinkler.sprinklerCollision.y = sprinkler.y + 5;
    }
}



function repositionSprinkler(sprinkler, sprinklerX, sprinklerY, currentSprinkler) {
    sprinkler.x = sprinklerX[currentSprinkler];
    sprinkler.y = sprinklerY[currentSprinkler];
    sprinkler.emitter.x = sprinklerX[currentSprinkler];
    sprinkler.emitter.y = sprinklerY[currentSprinkler];
}

function collectClock(player, clock) {
    timeLimit += 5;
    clock.kill();
}

function findCat() {
    if (checkOverlap(player, cat1.cat)) {
        tweenCatFound.start();
        easterEggReward = true;
        npcGroup.children[0].SpeechBubble = new SpeechBubble(game, npcGroup.children[0].x + 45, npcGroup.children[0].y, 340,
            "Thanks for finding my cat! I am also a cat lover. But I'm also a Java Developer. And I'm a bearded man! Isn't polymorphism COOL?" +
            "I love beards.. I think you would look GREAT with one. Here, have this!");
    }
}

function easterEgg() {
    if (checkOverlap(player, npcGroup.children[0]) && easterEggReward) {
        player.loadTexture('h2no_chris', 4);
    }
}

function createNPC(game, x, y, image, width, text) {
    var npc = npcGroup.create(x,y,image);
    game.physics.enable(npc, Phaser.Physics.ARCADE);
    npc.body.immovable = false;
    npc.body.allowGravity = false;
    npc.body.collideWorldBounds = true;
    npc.SpeechBubble = new SpeechBubble(game, x + 45, y, width, text);

}


/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////SPEECH BUBBLE FUNCTION /////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
var SpeechBubble = function(game, x, y, width, text) {
    Phaser.Sprite.call(this, game, x, y);

    // Some sensible minimum defaults
    var height = 18;

    // Set up our text and run our custom wrapping routine on it
    this.bitmapText = game.make.bitmapText(x + 12, y+10, 'carrier-command', text, 12);
    SpeechBubble.wrapBitmapText(this.bitmapText, width);

    // Calculate the width and height needed for the edges
    var bounds = this.bitmapText.getLocalBounds();
    if (bounds.width + 18 > width) {
        width = bounds.width + 18;
    }
    if (bounds.height + 14 > height) {
        height = bounds.height + 14;
    }

    // Create all of our corners and edges
    this.borders = [
        game.make.tileSprite(x + 9, y + 9, width - 9, height - 9, 'bubble-border', 4),
        game.make.image(x, y, 'bubble-border', 0),
        game.make.image(x + width, y, 'bubble-border', 2),
        game.make.image(x + width, y + height, 'bubble-border', 8),
        game.make.image(x, y + height, 'bubble-border', 6),
        game.make.tileSprite(x + 9, y, width - 9, 9, 'bubble-border', 1),
        game.make.tileSprite(x + 9, y + height, width - 9, 9, 'bubble-border', 7),
        game.make.tileSprite(x, y + 9, 9, height - 9, 'bubble-border', 3),
        game.make.tileSprite(x + width, y + 9, 9, height - 9, 'bubble-border', 5)
    ];

    // Add all of the above to this sprite
    for (var b = 0, len = this.borders.length; b < len; b++) {
        this.addChild(this.borders[b]);
    }

    // Add the tail
    this.tail = this.addChild(game.make.image(x + 18, y + 3 + height, 'bubble-tail'));

    // Add our text last so it's on top
    this.addChild(this.bitmapText);
    this.bitmapText.tint = 0x111111;

    // Offset the position to be centered on the end of the tail
    this.pivot.set(x + 25, y + height + 24);
};

SpeechBubble.prototype = Object.create(Phaser.Sprite.prototype);
SpeechBubble.prototype.constructor = SpeechBubble;

SpeechBubble.wrapBitmapText = function (bitmapText, maxWidth) {
    var words = bitmapText.text.split(' '), output = "", test = "";

    for (var w = 0, len = words.length; w < len; w++) {
        test += words[w] + " ";
        bitmapText.text = test;
        bitmapText.updateText();
        if (bitmapText.textWidth > maxWidth) {
            output += "\n" + words[w] + " ";
        }
        else {
            output += words[w] + " ";
        }
        test = output;
    }

    output = output.replace(/(\s)$/gm, ""); // remove trailing spaces
    bitmapText.text = output;
    bitmapText.updateText();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////SPEECH BUBBLE FUNCTION /////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////