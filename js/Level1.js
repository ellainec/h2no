// ==================================
// GLOBAL FUNCTIONS FOR CREATING OTHER SPRITES IN GAME
// ==================================


EnemyRobot = function (index, game, x, y) {
    this.robot = game.add.sprite(x, y, 'WaterBot');
    // this is a global variable

    this.robot.anchor.setTo(0.5, 0.5);
    this.robot.name = index.toString();
    game.physics.enable(this.robot, Phaser.Physics.ARCADE);
    this.robot.body.immovable = true;
    this.robot.body.allowGravity = true;
    this.robot.body.collideWorldBounds = true;

    // tween
    this.robotTween = game.add.tween(this.robot).to({
        x: this.robot.x + 25
    }, 2000, 'Linear', true, 0, 100, true);

};

// =======================================================================================================================================
//                                   SPRINKLERS START
//
//=========================================================================================================================================
createSprinkler = function (index, game, x, y) {
    var thisSprinkler = sprinklersGroup.create(x, y, 'sprinkler');

    game.physics.enable(thisSprinkler, Phaser.Physics.ARCADE);

    //hit
    thisSprinkler.oneHit = true;
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
    var thisSprinkler2 = sprinklersGroup2.create(x, y, 'sprinkler');

    game.physics.enable(thisSprinkler2, Phaser.Physics.ARCADE);

    //hit
    thisSprinkler2.oneHit = true;
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
    var thisSprinkler3 = sprinklersGroup3.create(x, y, 'sprinkler');

    game.physics.enable(thisSprinkler3, Phaser.Physics.ARCADE);

    //hit
    thisSprinkler3.oneHit = true;
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

    thisSprinkler3.emitter.makeParticles('water', 0, 200, true);
    thisSprinkler3.emitter.start(false, 40, -1);

    thisSprinkler3.emitter2.makeParticles('water', 0, 200, true);
    thisSprinkler3.emitter2.start(false, 40, -1);

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


NPC = function (index, game, x, y) {
    this.npc = game.add.sprite(x, y, 'baddie');
    // this isa global variable

    this.npc.anchor.setTo(0.5, 0.5);
    this.npc.name = index.toString();
    game.physics.enable(this.npc, Phaser.Physics.ARCADE);
    this.npc.body.immovable = false;
    this.npc.body.allowGravity = true;
    this.npc.body.collideWorldBounds = true;

    this.npc.animations.add('left', [0, 1], 10, true);
    this.npc.animations.add('right', [2, 3], 10, true);

};

Cat = function (index, game, x, y) {
    this.cat = game.add.sprite(x, y, 'cat');

    this.cat.name = index.toString();
    game.physics.enable(this.cat, Phaser.Physics.ARCADE);
    this.cat.body.immovable = false;
    this.cat.body.allowGravity = true;
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
var sprinklersGroup2;
var boxGroup;
var npcGroup;

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
var easterEggReward = false;


// DRONE PARTS
var clouds = null;
//var jumpTimer = 0;
var locked = false;
var lockedTo = null;
var wasLocked = false;
var willJump = false;
var standing;

// SOUND EFFECTS
var jumpSound = null;
var robotDeath = null;
var buttonStomp = null;

// ==================================
// CREATE FUNCTION BELOW
// ==================================

Game.Level1.prototype = {

    create: function (game) {
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
        //                                   SPRINKLER CREATE START
        //=========================================================================================================================================

		sprinklersGroup = game.add.group();
		sprinklersGroup2 = game.add.group();
		sprinklersGroup3 = game.add.group();
		boxGroup = game.add.group();

		//CREATE NEW SPRINKLERS HERE
		//kevin - search purposes
		createSprinkler(1, game, 557, 904 + 12);
		createSprinkler(1, game, 1588, 840 + 12);
		createSprinkler(1, game, 2190, 712 + 12);
		// createSprinkler(1, game, 2705, 840 + 12); // test dont delete
		createSprinkler2(1, game, 2835, 584 + 12);
		createSprinkler(1, game, 3400, 584 + 12);
		createSprinkler2(1, game, 3600, 840 + 12);
		createSprinkler(1, game, 3855, 424 + 12);
		createSprinkler3(1, game, 4950, 840 + 12);
		createSprinkler2(1, game, 5257, 840 + 12);
		createSprinkler2(1, game, 6145, 840 + 12);
		// createSprinkler(1, game, 6436, 584 + 12); // test dont delete
		createSprinkler(1, game, 7455, 840 + 12);
		createSprinkler(1, game, 8393, 840 + 12);
		createSprinkler(1, game, 8785, 840 + 12);
		createSprinkler(1, game, 9137, 840 + 12);
		// createSprinkler2(1, game, 9673, 840 + 12);
		// createSprinkler(1, game, 11453, 840 + 12);
		createSprinkler(1, game, 13253, 840 + 12); // test dont delete
		// createSprinkler2(1, game, 13584, 840 + 12); //test dont delete
		// createSprinkler3(1, game, 14140, 840 + 12); //test dont delete
		// createSprinkler2(1, game, 15124, 584 + 12); //test dont delete
		// createSprinkler3(1, game, 15650, 584 + 12);


        this.world.bringToTop(sprinklersGroup);
        this.world.bringToTop(sprinklersGroup2);
        this.world.bringToTop(sprinklersGroup3);
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

		cat1 = new Cat(3, game, 11150, 0);
		cat1.cat.scale.setTo(0.1, 0.1);

		cat2 = new Cat(3, game, 7845, 800);
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
        // =======================================================================================================================================
        //                                   NPC START
        //=========================================================================================================================================


        npcGroup = game.add.group();

        //!!!!!!!!!!!CHRIS NEEDS TO BE THE FIRST NPC CREATED!!!!!!!!!!!!!
        createNPC(game, 7855, 800, 'chris', 200,
            "Have you seen my cat?");

        createNPC(game, 200, 880, 'npc', 200,
            "Why don't you make yourself useful and turn off some sprinklers huh?");

        createNPC(game, 3745, 550, 'npc', 200,
            "Gotcha H2NO, I’ll turn off the tap while I’m brushing my teeth!");

        createNPC(game, 5555, 900, 'npc', 300,
            "Really? Standard shower heads use 2.5 gallons of water per minute?! " +
            "I guess I should really take shorter showers, I’ll tell all my friends too. Thanks H2NO!");

        createNPC(game, 700, 900, 'npc', 200,
            "Turn off the tap while I’m scrubbing my hands with soap? That’s not a bad idea, thanks H2NO!");

        createNPC(game, 900, 900, 'npc', 200,
            "He tried to run the dishwasher with only half a load, can you believe it? " +
            "I almost lost it H2NO, what a water waster!");

        createNPC(game, 1000, 900, 'npc', 200,
            "Sorry H2NO, I’ll only water my lawn in the early morning instead of the afternoon from now on…");
        // =======================================================================================================================================
        //                                  NPC END //=========================================================================================================================================


        //////////////////////////////////////////Drones//////////////////////////////////////////
        clouds = this.add.physicsGroup(true);

        var cloud1 = new CloudPlatform(game, 10450, 860, 'platform', clouds);

        cloud1.addMotionPath([
            { x: "+300", xSpeed: 3000, xEase: "Linear", y: "+0", ySpeed: 2000, yEase: "Linear" },
            { x: "-300", xSpeed: 3000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Linear" },
        ]);

        var cloud2 = new CloudPlatform(game, 12300, 860, 'platform', clouds);
        cloud2.addMotionPath([
            { x: "+400", xSpeed: 3000, xEase: "Linear", y: "+0", ySpeed: 2000, yEase: "Linear" },
            { x: "-400", xSpeed: 3000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Linear" },
        ]);

        var cloud3 = new CloudPlatform(game, 11250, 560, 'invisibleDrone', clouds);
        cloud3.alpha = 0.01;
        cloud3.addMotionPath([
            { y: "-400", ySpeed: 6000, yEase: "Linear", x: "+0", xSpeed: 2000, xEase: "Linear" },
            { y: "+400", ySpeed: 4000, yEase: "Linear", x: "-0", xSpeed: 2000, xEase: "Linear" },
        ]);

        clouds.callAll('start');

        //////////////////////////////////////////Drones//////////////////////////////////////////

        // AUDIO STUFF
        jumpSound = this.add.audio('jump');

    },

    /////////////Drone Functions////////////


    customSep: function (player, platform) {
        if (!locked && player.body.velocity.y > 0) {
            locked = true;
            lockedTo = platform;
            //platform.playerLocked = true;
            player.body.velocity.y = 0;
        }
    },

    checkLock: function () {

        player.body.velocity.y = 0;

        //  If the player has walked off either side of the platform then they're no longer locked to it
        if (player.body.right < lockedTo.body.x || player.body.x > lockedTo.body.right) {
            this.cancelLock();
        }

    },

    cancelLock: function () {

        wasLocked = true;
        locked = false;

    },

    // ==================================
    // UPDATE FUNCTION BELOW
    // ==================================

    update: function () {
        console.log(locked)
        this.physics.arcade.collide(player, mainLayer);
        this.physics.arcade.collide(player, secretLayer);
        this.physics.arcade.collide(cat1.cat, mainLayer);
        this.physics.arcade.collide(cat2.cat, mainLayer);
        this.physics.arcade.collide(npcGroup, mainLayer);
        this.physics.arcade.collide(npcGroup, backgroundLayer);
        this.physics.arcade.overlap(player, clocks, collectClock, null, this);
        this.physics.arcade.collide(cat1.cat, clouds);
        this.physics.arcade.collide(cat2.cat, clouds);
        this.physics.arcade.collide(player, clouds, this.customSep, null, this);


        // =======================================================================================================================================
        //                                   SPRINKLER UPDATE START
        //=========================================================================================================================================
        //Collide Player with Sprinkler and SprinkerCollision
       this.physics.arcade.collide(player, sprinklersGroup, hitSprinklerFunction);
       this.physics.arcade.collide(player, sprinklersGroup2, hitSprinklerFunction);
       this.physics.arcade.collide(player, sprinklersGroup3, hitSprinklerFunction);
       this.physics.arcade.collide(player, boxGroup);

        //emitter physics
        for (var i = 0, len = sprinklersGroup.children.length; i < len; i++) {
            var sprinklerEmitter = sprinklersGroup.children[i].emitter;
            this.physics.arcade.overlap(player, sprinklerEmitter, this.resetPlayer);
        }

        for (var i = 0, len = sprinklersGroup2.children.length; i < len; i++) {
            var sprinklerEmitter = sprinklersGroup2.children[i].emitter;
            this.physics.arcade.overlap(player, sprinklerEmitter, this.resetPlayer);
        }
        /////////////////////
        ///NPC UPDATES
        /////////////////////
        for (var i = 0; i < npcGroup.children.length; i++) {
            npcGroup.children[i].body.velocity.x = 0;
        }


        for (var i = 0, len = sprinklersGroup3.children.length; i < len; i++) {
            var sprinklerEmitter = sprinklersGroup3.children[i].emitter;
            var sprinklerEmitter2 = sprinklersGroup3.children[i].emitter2;
            this.physics.arcade.overlap(player, sprinklerEmitter, this.resetPlayer);
            this.physics.arcade.overlap(player, sprinklerEmitter2, this.resetPlayer);
        }


        for (var i = 0; i < npcGroup.children.length; i++) {
            if (checkOverlap(player, npcGroup.children[i])) {
                this.world.add(npcGroup.children[i].SpeechBubble);
                npcJump(npcGroup.children[i]);
            } else {
                // Make SpeechBubble disappear
                this.world.remove(npcGroup.children[i].SpeechBubble);
            }
        }


        //emitter2 direction
        for (var i = 0, len = sprinklersGroup2.children.length; i < len; i++) {
            var sprinkler = sprinklersGroup2.children[i];
            var sprinklerEmitter = sprinklersGroup2.children[i].emitter;
            if (player.position.x > sprinkler.position.x) {
                sprinklerEmitter.setXSpeed(500, 450);
            } else {
                sprinklerEmitter.setXSpeed(-500, -450);
            }
        }


        function hitSprinklerFunction(player, sprinkler) {
            //sprinkler.animations.frame = 0;
            if (sprinkler.oneHit) {
				sprinkler.oneHit = false;
				sprinkler.emitter.destroy();
				score += sprinklerAdd;
                    if ('emitter2' in sprinkler) {
                        sprinkler.emitter2.destroy();
                    }      
				sprinkler.animations.frame = 1;
				sprinkler.body.setSize(16, 8, 25, 18);
				sprinkler.sprinklerCollision.destroy();
				player.body.velocity.y = -500;
            }

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
            if (this.button.isDown) {
                jumpNow();
            }
            if (this.joystick.properties.right) {
				player.animations.play('right');
            	moveRight();
            } else if (this.joystick.properties.left) {
				player.animations.play('left');
            	moveLeft();
            } else {
				player.animations.play('idle');
			}		
        }

        timeText.setText('Time: ' + timeLimit);
	    lifeText.setText('Lives: ' + life);
		scoreText.setText('Score: ' + score);

        this.timeUp();
		
        findCat();
        easterEgg();

        // =======================================================================================================================================
        //                                   DRONE UPDATE
        //========================================================================================================================================


        if (this.game.paused) {
            //  Because preRender still runs even if your game pauses!
            return;
        }

        //if (locked || wasLocked) {
        if (locked) {
            player.x += lockedTo.deltaX;
            player.y = lockedTo.y - 30;

           if (player.body.velocity.x !== 0)
            {
                player.body.velocity.y = 0;
            }
        }

        if (willJump) {
            willJump = false;

            if (lockedTo && lockedTo.deltaY < 0 && wasLocked) {

                //  If the platform is moving up we add its velocity to the players jump
                player.body.velocity.y -= Jump2 + (lockedTo.deltaY * 20);
            }
            else {
                player.body.velocity.y -= Jump2;
            }

            jumpTimer = game.time.now + 500;
        }

        if (wasLocked) {
            wasLocked = false;
            lockedTo.playerLocked = false;
            lockedTo = null;
        }

        //  Do this AFTER the collide check, or we won't have blocked/touching set
        standing = player.body.blocked.down || player.body.touching.down || locked;

        if (standing && cursors.up.isDown && game.time.now > jumpTimer) {
            if (locked) {
                this.cancelLock();
            }
            willJump = true;
        }

        if (locked) {
            this.checkLock();
        }

        },


    render: function() {
    },

    
	resetPlayer: function() {

        player.reset(respawnX, respawnY);
        life--;
        console.log("died");
        if (life === 0) {
            game.state.start('Gameover');
        }
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
	console.log(player.body.velocity.x);
}

function moveRight() {
	player.body.velocity.x = playerMaxSpeed;
	console.log(player.body.velocity.x);
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
        console.log(jumpTimer + "vs" + game.time.now);
    }
}

// Makes the NPC jump
function npcJump(npc) {
    if (npc.body.blocked.down) {
        npc.body.velocity.y = -300;
    }
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
        /*for(var i = 0; i < npcGroup.children.length; i++) {
            if (npcGroup.children[i].isChris) {
                npcGroup.children[i].destroy();
            }
        }*/
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
    npc.body.immovable= false;
    npc.body.allowGravity = true;
    npc.body.collideWorldBounds = true;
    npc.SpeechBubble = new SpeechBubble(game, x + 45, y, width, text);

   /* game.physics.enable(this.cat, Phaser.Physics.ARCADE);
    this.cat.body.immovable = false;
    this.cat.body.allowGravity = true;
    this.cat.body.collideWorldBounds = false;*/
    //easter egg NPC
    /*if (image == 'chris') {
        npc.isChris = true;
    } else {
        npc.isChris = false;
    }*/

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

////////////////////////////////////////////////////////////////////////////
/////////////////// Cloud Platform (Moving Platforms(drones)) //////////////

CloudPlatform = function (game, x, y, key, group) {

    if (typeof group === 'undefined') { group = game.world; }

    Phaser.Sprite.call(this, game, x, y, key);

    game.physics.arcade.enable(this);

    this.anchor.x = 0.5;

    this.body.customSeparateX = true;
    this.body.customSeparateY = true;
    this.body.allowGravity = false;
    this.body.immovable = true;

    this.playerLocked = false;

    group.add(this);

};

CloudPlatform.prototype = Object.create(Phaser.Sprite.prototype);
CloudPlatform.prototype.constructor = CloudPlatform;

CloudPlatform.prototype.addMotionPath = function (motionPath) {

    this.tweenX = this.game.add.tween(this.body);
    this.tweenY = this.game.add.tween(this.body);

    //  motionPath is an array containing objects with this structure
    //  [
    //   { x: "+200", xSpeed: 2000, xEase: "Linear", y: "-200", ySpeed: 2000, yEase: "Sine.easeIn" }
    //  ]

    for (var i = 0; i < motionPath.length; i++) {
        this.tweenX.to({ x: motionPath[i].x }, motionPath[i].xSpeed, motionPath[i].xEase);
        this.tweenY.to({ y: motionPath[i].y }, motionPath[i].ySpeed, motionPath[i].yEase);
    }

    this.tweenX.loop();
    this.tweenY.loop();

};

CloudPlatform.prototype.start = function () {

    this.tweenX.start();
    this.tweenY.start();

};

CloudPlatform.prototype.stop = function () {

    this.tweenX.stop();
    this.tweenY.stop();

};

/////////////////// Cloud Platform (Moving Platforms(drones)) //////////////
////////////////////////////////////////////////////////////////////////////