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
    thisSprinkler.emitter.makeParticles('water', 0, 120, true);
    thisSprinkler.emitter.start(false, 200, -1);

    thisSprinkler.emitter.minParticleScale = 0.2;
    thisSprinkler.emitter.maxParticleScale = 0.3;
    thisSprinkler.emitter.lifespan = 3800;

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

    thisSprinkler2.emitter.makeParticles('water', 0, 120, true);
    thisSprinkler2.emitter.start(false, 200, -1);


    thisSprinkler2.emitter.minParticleScale = 0.2;
    thisSprinkler2.emitter.maxParticleScale = 0.3;
    thisSprinkler2.emitter.lifespan = 3800;

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
var playerSpeed = 450;
var jumpTimer = 0;
var jumpTrue = false;
var leftTrue = false;
var rightTrue = false;

var controls = {};
var cursors;
var mobile = false;

// number of seconds to start counting down from
var total = 500;

var playerName;
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
			//assignment of playerName can't be outside in global scope
			playerName = sessionStorage.getItem("playerName");

			this.stage.backgroundColor = '#3598db';
	  	//this.stage.backgroundColor = '#000000';

			this.stage.backgroundColor = '#3598db';
			this.physics.startSystem(Phaser.Physics.ARCADE);
			this.physics.arcade.gravity.y = 1400;

			// add map with 'map id'
      map = this.add.tilemap('map');
			// add tileset with 'tileset id', 'key'
      map.addTilesetImage('Tileset', 'tiles');
			
			backlayer = map.createLayer('BG');
			backlayer.alpha = 0.5;
      layer = map.createLayer('Layer1');
			frontLayer = map.createLayer('layer2');
			frontLayer.alpha = 0.7;
			// uncomment to check layer collision boxes
			// layer.debug = true;
      layer.resizeWorld();
			
			
			map.setCollisionBetween(0, 3, true, 'Layer1');
			map.setCollisionBetween(32, 35, true, 'Layer1');

			map.setTileIndexCallback(4, this.resetPlayer, this, 'Layer1');
			map.setTileIndexCallback(5, this.resetPlayer, this, 'Layer1');
			map.setTileIndexCallback(6, this.resetPlayer, this, 'Layer1');
			map.setTileIndexCallback(12, this.resetPlayer, this, 'Layer1');
			map.setTileIndexCallback(13, this.resetPlayer, this, 'Layer1');

			map.setTileIndexCallback(4, this.resetPlayer, this, 'layer2');
			map.setTileIndexCallback(5, this.resetPlayer, this, 'layer2');
			map.setTileIndexCallback(6, this.resetPlayer, this, 'layer2');
			map.setTileIndexCallback(12, this.resetPlayer, this, 'layer2');
			map.setTileIndexCallback(13, this.resetPlayer, this, 'layer2');


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

			// This is a test to add an extra enemy sprite into game

			timer = game.time.create(false);

			// this says that the updateCounter function will execute every 1000ms
			timer.loop(1000, updateCounter, this);
            timer.start();

        // =======================================================================================================================================
        //                                   SPRINKLER CREATE START
        //=========================================================================================================================================

            sprinklersGroup = game.add.group();
            sprinklersGroup2 = game.add.group();
            boxGroup = game.add.group();

            //CREATE NEW SPRINKLERS HERE
            createSprinkler(1, game, player.x + 350, player.y + 70);
            createSprinkler2(1, game, player.x + 1800, player.y + 70);
            createSprinkler(1, game, player.x + 2000, player.y + 70);
            createSprinkler2(1, game, player.x + 2500, player.y + 70);


        this.world.bringToTop(sprinklersGroup);
        this.world.bringToTop(sprinklersGroup2);
        // =======================================================================================================================================
        //                                   SPRINKLER CREATE END
        //=========================================================================================================================================
			npc1 = new NPC(3, game, player.x + 128, player.y);

			// TIMER //
			timer = game.time.create(false);
			timer.loop(1000, this.countdown, this);
			timer.start();
			timeLimit = 500;
			timeText = game.add.text(680, 40, "120", {
					font: "12pt press_start_2pregular",
					fill: "#fff",
					align: "center"
			});
			timeText.fixedToCamera = true;

			// CLOCKS //
			clocks = game.add.group();
			clocks.enableBody = true;
			this.createClock(300, 300);
			this.createClock(500, 300);
			this.createClock(900, 300);

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

            this.world.bringToTop(player);


    },
	
	
// ==================================
// UPDATE FUNCTION BELOW
// ==================================

    update: function () {

//<<<<<<< HEAD
//         //Collide Player with Sprinkler
//      this.physics.arcade.collide(player, sprinkler.sprinkler);
//      this.physics.arcade.collide(player, layer);
//      this.physics.arcade.overlap(player, clocks, collectClock, null, this);
//=======

        //>>>>>>> Testing
        this.physics.arcade.collide(player, frontLayer);
        // this will add physics to enemy
        // this.physics.arcade.collide(enemy1.robot, layer);
        this.physics.arcade.collide(npc1.npc, layer);
        this.physics.arcade.collide(cat1.cat, layer);
        this.physics.arcade.collide(cat2.cat, layer);
        this.physics.arcade.collide(chris1.chris, layer);

        this.physics.arcade.collide(player, layer);
        this.physics.arcade.overlap(player, clocks, collectClock, null, this);

        // =======================================================================================================================================
        //                                   SPRINKLER UPDATE START
        //=========================================================================================================================================
        //Collide Player with Sprinkler and SprinkerCollision
       this.physics.arcade.collide(player, sprinklersGroup, hitSprinklerFunction);
       this.physics.arcade.collide(player, sprinklersGroup2, hitSprinklerFunction);
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
                    sprinkler.animations.frame = 1;
                    sprinkler.body.setSize(16, 8, 25, 18);
                    sprinkler.sprinklerCollision.destroy();
                    player.body.velocity.y = -500;
            }
        }

        // =======================================================================================================================================
        //                                   SPRINKLER UPDATE END
        //========================================================================================================================================

        player.body.velocity.x = 0;
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

        timeText.setText(timeLimit);

        this.timeUp();

        
        findCat();
        easterEgg();

    },

    render: function() {
        // the numbers are the coordinates to place the text at
        game.debug.text('TIME: ' + total, 0, 15);
        game.debug.text(playerName, 0, 40);
    },
    resetPlayer: function () {
        console.log("died");
        //this.state.start("Gameover");
        player.reset(100, 400);
      
    },

    // for checkpoint create checkx/y

    // creating buttons
    createButton: function (game, imgString, x, y, w, h, callBack) {
        var button1 = game.add.button(x, y, imgString, callBack, this, 2, 1, 0);
        button1.anchor.setTo(0.5, 0.5);
        button1.width = w;
        button1.height = h;
    },

    countdown: function(){
        timeLimit--;
    },

    timeUp: function(){
        if (timeLimit == 0 || timeLimit < 0) {
            //change this to something else later, like gameover or minus one life
             timer.stop();
        }
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
    player.body.velocity.x -= playerSpeed;
}

function moveRight() {
    player.body.velocity.x += playerSpeed;
}

function checkOverlap(spriteA, spriteB) {
    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);
}

function jumpNow() {
    if (game.time.now > jumpTimer) {
        player.body.velocity.y -= 600;
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


function updateCounter() {
    total--;
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

