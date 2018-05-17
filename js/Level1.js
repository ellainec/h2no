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
    thisSprinkler.emitter.minParticleScale = 0.2;
    thisSprinkler.emitter.maxParticleScale = 0.3;
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
    thisSprinkler2.emitter.minParticleScale = 0.2;
    thisSprinkler2.emitter.maxParticleScale = 0.3;
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
    thisSprinkler3.emitter.minParticleScale = 0.2;
    thisSprinkler3.emitter.maxParticleScale = 0.3;
    thisSprinkler3.emitter.lifespan = 3200;

    thisSprinkler3.emitter2.y = thisSprinkler3.y + 7;
    thisSprinkler3.emitter2.minParticleScale = 0.2;
    thisSprinkler3.emitter2.maxParticleScale = 0.3;
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



/*createEmitter2 = function(index, game, x, y) {
    this.emitter = game.add.emitter(x, y);
  
      this.emitter.makeParticles('water', 0, 120, true);
      this.emitter.start(false, 200, -1);


      this.emitter.minParticleScale = 0.2;
      this.emitter.maxParticleScale = 0.3;
      this.emitter.lifespan = 3800;
  
      this.emitter.setYSpeed(-380, -375);
    //   this.emitter.setXSpeed(-500, -450);
      this.emitter.gravity = 600;
      this.emitter.name = index.toString();
      this.emitter.setXSpeed(500, 450);
      this.emitter.setXSpeed(500, 450);
  };*/

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

Chris = function (index, game, x, y) {
    this.chris = game.add.sprite(x, y, 'chris');
    this.chris.name = index.toString();
    game.physics.enable(this.chris, Phaser.Physics.ARCADE);
    this.chris.body.immovable = false;
    this.chris.body.allowGravity = true;
    this.chris.body.collideWorldBounds = true;
};

// ==================================
// VARIABLES BELOW
// ==================================

var enemy1;
var npc1;
var cat1;
var cat2;
var chris1;

var sprinklersGroup;
var sprinklersGroup2;
var boxGroup;

Game.Level1 = function (game) { };

var map;
var layer;
var frontLayer;
var backlayer;

var player;
var playerSpeed = 20;
var playerMaxSpeed = 450;
var playerSlow = 40;
var jumpTimer = 0;
var jumpTrue = false;
var leftTrue = false;
var rightTrue = false;
var life;
var lifeText;

var controls = {};
var cursors;
var mobile = false;

var playerName;

// BOSS
var bossButton;

//TIMER//
var timer;
var timeLimit;
var timeText;

//CLOCKS FOR EXTRA TIME
var clocks;
var easterEggReward = false;


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

		// Set up player
		player = this.add.sprite(100, 400, 'h2no');
		player.anchor.setTo(0.5, 0.5);
		// player.animations.add('idle',[0, 1], 1, true); (make a sprite sheet)
		// Enable physics on player
		this.physics.enable(player, Phaser.Physics.ARCADE);
		// Ground and edges of the world
		player.body.collideWorldBounds = true;
		player.body.maxVelocity.y = 800;
		this.camera.follow(player);

		player.animations.add('idle', [4], 10, true);
		player.animations.add('left', [0, 1, 2, 3], 10, true);
		player.animations.add('right', [5, 6, 7, 8], 10, true);
        // =======================================================================================================================================
        //                                   PLAYER VARIABLES END
        //=========================================================================================================================================

        // =======================================================================================================================================
        //                                   MAP VARIABLES START
        //=========================================================================================================================================


		this.stage.backgroundColor = '#3598db';
	  	//this.stage.backgroundColor = '#000000';

		this.stage.backgroundColor = '#3598db';
		this.physics.startSystem(Phaser.Physics.ARCADE);
		this.physics.arcade.gravity.y = 1400;

			// add map with 'map id'
		map = this.add.tilemap('map');
				// add tileset with 'tileset id', 'key'
		map.addTilesetImage('h2no_tilesheet', 'tiles');
			
		bossStateLayer = map.createLayer('boss_state_layer');
		elevationBackgroundLayer = map.createLayer('elevation_background_layer');
		treeLayer = map.createLayer('tree_layer');
		leavesLayer = map.createLayer('leaves_layer');
		branchLayer = map.createLayer('branch_layer');
		appleLayer = map.createLayer('apple_layer');
		floorBackgroundLayer = map.createLayer('floor_background_layer');
		elevationRightLayer = map.createLayer('elevation_right_layer');
		elevationLeftLayer = map.createLayer('elevation_left_layer');
		fenceLayer = map.createLayer('fence_layer');
		carLayer = map.createLayer('car_layer');
		elevationLayer = map.createLayer('elevation_layer');
		houseWallLayer = map.createLayer('house_wall_layer');
		houseDoorWindowLayer = map.createLayer('house_door_window_layer');
		houseRoofLayer = map.createLayer('house_roof_layer');
		grassBackgroundLayer = map.createLayer('grass_background_layer');
		mainLayer = map.createLayer('main_layer');
		grassForegroundFloorLayer = map.createLayer('grass_foreground_layer_floor');
		grassForegroundRightLayer = map.createLayer('grass_foreground_layer_right');
		grassForegroundLeftLayer = map.createLayer('grass_foreground_layer_left');
		waterLayer = map.createLayer('water_layer');

		// uncomment to check layer collision boxes
		// layer.debug = true;
		mainLayer.resizeWorld();



		map.setCollisionBetween(0, 999, true, 'main_layer');
		map.setCollisionBetween(0, 999, true, 'house_roof_layer');
		map.setCollisionBetween(0, 999, true, 'elevation_layer');

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
            createSprinkler(1, game, 467, 1256 + 12);
            createSprinkler(1, game, 1465, 1202);
            createSprinkler(1, game, 2192, 1064 + 12);
            createSprinkler2(1, game, 2835, 936 + 12);
            createSprinkler(1, game, 2705, 1192 + 12);
            createSprinkler(1, game, 3400, 936 + 12);
            createSprinkler(1, game, 3855, 776 + 12);
            createSprinkler2(1, game, 3600, 1192 + 12);
            createSprinkler3(1, game, 4757, 1192 + 12);
            createSprinkler2(1, game, 5257, 1192 + 12);
            createSprinkler2(1, game, 6226, 1192 + 12);
            createSprinkler(1, game, 6984, 936 + 12);
            createSprinkler(1, game, 6436, 936 + 12);
            createSprinkler(1, game, 6367, 616 + 12);
            createSprinkler3(1, game, 7441, 1192 + 12);
            createSprinkler(1, game, 8393, 1192 + 12);
            createSprinkler(1, game, 9414, 1192 + 12);
    

        this.world.bringToTop(sprinklersGroup);
        this.world.bringToTop(sprinklersGroup2);
        this.world.bringToTop(sprinklersGroup3);
        // =======================================================================================================================================
        //                                   SPRINKLER CREATE END
        //=========================================================================================================================================
		npc1 = new NPC(3, game, player.x + 128, player.y);

        // =======================================================================================================================================
        //                                   GAME UI START
        //=========================================================================================================================================

		// TIMER //
		timer = game.time.create(false);
		timer.loop(1000, this.countdown, this);
		timer.start();
		timeLimit = 200;
		timeText = game.add.text(610, 40, timeLimit, {
				font: "12pt press_start_2pregular",
				fill: "#fff",
				align: "center"
		});
		timeText.fixedToCamera = true;

		// LIFE // -- Die a certain amount of times before the game over screen pops up
		life = 3;
		lifeText = game.add.text(40, 40, life, {
				font: "12pt press_start_2pregular",
				fill: "#fff",
				align: "center"
		});
		lifeText.fixedToCamera = true;
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

		
		// CLOCKS //
		clocks = game.add.group();
		clocks.enableBody = true;
		this.createClock(300, 300);
		this.createClock(500, 300);
		this.createClock(900, 300);

        // =======================================================================================================================================
        //                                   LOLOLOL THIS EASTER EGG DOE
        //=========================================================================================================================================

		chris1 = new Chris(3, game, 4950, 0);
		chris1.chris.scale.setTo(0.2, 0.2);

		cat1 = new Cat(3, game, 8500, 0);
		cat1.cat.scale.setTo(0.1, 0.1);

		cat2 = new Cat(3, game, 4950, 0);
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
		this.world.bringToTop(grassForegroundFloorLayer);
		this.world.bringToTop(grassForegroundRightLayer);
		this.world.bringToTop(grassForegroundLeftLayer);
		this.world.bringToTop(waterLayer);
        // =======================================================================================================================================
        //                                   LAYER CONTROL END
        //=========================================================================================================================================

    },
	
	
// ==================================
// UPDATE FUNCTION BELOW
// ==================================

    update: function () {


        //>>>>>>> Testing
        this.physics.arcade.collide(player, mainLayer);
        this.physics.arcade.collide(player, houseRoofLayer);
        this.physics.arcade.collide(player, elevationLayer);
        // this will add physics to enemy
        // this.physics.arcade.collide(enemy1.robot, layer);
        this.physics.arcade.collide(npc1.npc, mainLayer);
        this.physics.arcade.collide(cat1.cat, mainLayer);
        this.physics.arcade.collide(cat2.cat, mainLayer);
        this.physics.arcade.collide(chris1.chris, mainLayer);

        this.physics.arcade.collide(player, mainLayer);
        this.physics.arcade.overlap(player, clocks, collectClock, null, this);

        // =======================================================================================================================================
        //                                   SPRINKLER UPDATE START
        //=========================================================================================================================================
        //Collide Player with Sprinkler and SprinkerCollision
       this.physics.arcade.collide(player, sprinklersGroup, hitSprinklerFunction);
       this.physics.arcade.collide(player, sprinklersGroup2, hitSprinklerFunction);
       this.physics.arcade.collide(player, sprinklersGroup3, hitSprinklerFunction);
       this.physics.arcade.collide(player, boxGroup);

       //var hitSprinklerCollision2 = this.physics.arcade.collide(player, sprinklerCollision2.sprinklerCollision);


        //emitter physics
        for (var i = 0, len = sprinklersGroup.children.length; i < len; i++) {
            var sprinklerEmitter = sprinklersGroup.children[i].emitter;
            this.physics.arcade.overlap(player, sprinklerEmitter, this.resetPlayer);
        }

        for (var i = 0, len = sprinklersGroup2.children.length; i < len; i++) {
            var sprinklerEmitter = sprinklersGroup2.children[i].emitter;
            this.physics.arcade.overlap(player, sprinklerEmitter, this.resetPlayer);
        }

        for (var i = 0, len = sprinklersGroup3.children.length; i < len; i++) {
            var sprinklerEmitter = sprinklersGroup3.children[i].emitter;
            var sprinklerEmitter2 = sprinklersGroup3.children[i].emitter2;
            this.physics.arcade.overlap(player, sprinklerEmitter, this.resetPlayer);
            this.physics.arcade.overlap(player, sprinklerEmitter2, this.resetPlayer);
        }


       this.physics.arcade.collide(player, mainLayer);
       this.physics.arcade.overlap(player, clocks, collectClock, null, this);
			this.physics.arcade.collide(player, frontLayer);
			// this will add physics to enemy 
			// this.physics.arcade.collide(enemy1.robot, layer);
			 this.physics.arcade.collide(npc1.npc, mainLayer);
			 this.physics.arcade.collide(cat1.cat, mainLayer);
			 this.physics.arcade.collide(cat2.cat, mainLayer);
			 this.physics.arcade.collide(chris1.chris, mainLayer);

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



        //if(emitter1.emitter !== null && this.physics.arcade.overlap(player, emitter1.emitter)) {
        //  this.resetPlayer();
        //}

        /*if(emitter2.emitter !== null && this.physics.arcade.overlap(player, emitter2.emitter)) {
          this.resetPlayer();
        }*/
			// this line will check if player overlaps with enemy
//        if (checkOverlap(player, enemy1.robot)) {
//            this.resetPlayer();
//        }

        //TEST FUNCTION
        function hitSprinklerFunction(player, sprinkler) {
            //sprinkler.animations.frame = 0;
            if (sprinkler.oneHit) {
                    sprinkler.oneHit = false;
                    sprinkler.emitter.destroy();
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

        npc1.npc.body.velocity.x = 0;


        // NPC will jump if player stands on it
        if (checkOverlap(player, npc1.npc)) {
            npcJump();
        }

        // NPC will face the direction of the player
        if (!checkOverlap(player, npc1.npc)) {

            if (player.world.x > npc1.npc.world.x) {
                npc1.npc.frame = 2;
            } else {
                npc1.npc.frame = 1;
            }
        }

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
							player.animations.play('idle');
						}		
        }

        timeText.setText('Time: ' + timeLimit);
	    lifeText.setText('Lives: ' + life);

        this.timeUp();

        
        findCat();
        easterEgg();

    },

    render: function() {
        game.debug.body(player);
        game.debug.spriteInfo(player);
    },
    resetPlayer: function () {
        player.reset(100, 400);
		life--;
	    console.log("died");
	    if (life === 0) {
		    game.state.start('Gameover');
	    }
    },

    // for checkpoint create checkx/y

    countdown: function(){
        timeLimit--;
    },

    timeUp: function(){
        if (timeLimit == 0 || timeLimit < 0) {
            //change this to something else later, like gameover or minus one life
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
    createClock: function(x, y) {
        var clock = clocks.create(x, y, 'clock');
        clock.body.gravity = false;
    }

};


// ==================================
// GENERAL FUNCTIONS TO BE CALLED
// ==================================

function moveLeft() {
    if (player.body.velocity.x > -playerMaxSpeed) {
        player.body.velocity.x -= playerSpeed;
    } else {
        player.body.velocity.x = -playerMaxSpeed;
    }
}

function moveRight() {
    if (player.body.velocity.x < playerMaxSpeed) {
        player.body.velocity.x += playerSpeed;
    } else {
        player.body.velocity.x = playerMaxSpeed;
    }
}

function checkOverlap(spriteA, spriteB) {
    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);
}

function jumpNow() {
    if (game.time.now > jumpTimer) {
        if (Math.abs(player.body.velocity.x) >= 125) {
                player.body.velocity.y -= 600;
            } else {
                player.body.velocity.y -= 1000;
            }
        jumpTimer = game.time.now + 750;
    }
}

// Makes the NPC jump
function npcJump() {
    if (npc1.npc.body.blocked.down) {
        npc1.npc.body.velocity.y = -300;
        
        let face;
        if (player.world.x < npc1.npc.world.x) {
            face = 'left';
        } else {
            face = 'right';
        }
        npc1.npc.animations.play(face);
    }
}

function collectClock(player, clock){
    timeLimit += 5;
    clock.kill();
}

function findCat() {
    if (checkOverlap(player, cat1.cat)) {
        tweenCatFound.start();
        easterEggReward = true;
    }
}

function easterEgg() {
    if (checkOverlap(player, chris1.chris) && easterEggReward) {
        player.loadTexture('WaterBotSkin');
    }
}

