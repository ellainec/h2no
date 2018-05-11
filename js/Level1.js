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

EnemySprinkler = function (index, game, x, y) {
    this.sprinkler = game.add.sprite(x, y, 'sprinkler');
    // adding sprite
    
    //Sprinkler Physics
    this.sprinkler.anchor.setTo(0.5, 0.5);
    this.sprinkler.name = index.toString();
    game.physics.enable(this.sprinkler, Phaser.Physics.ARCADE);
    this.sprinkler.body.immovable = true;
    this.sprinkler.body.setSize(5, 20, 5, 2);
    this.sprinkler.body.allowGravity = false;
    this.sprinkler.body.collideWorldBounds = true;

};

SprinklerEmitter = function(index, game, x, y) {
  this.emitter = game.add.emitter(x, y);

	this.emitter.makeParticles('diamond', 0, 45, true);
	this.emitter.start(false, 45, 5);


	this.emitter.minParticleScale = 0.15;
	this.emitter.maxParticleScale = 0.3;
	this.emitter.lifespan = 3200;

	this.emitter.setYSpeed(-600, -550);
  this.emitter.setXSpeed(-75, 75);
  this.emitter.gravity = 900;
	this.emitter.name = index.toString();
	this.emitter.enableBody = true;

};

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

}


// ==================================
// VARIABLES BELOW
// ==================================

var enemy1;
var npc1;

//Sprinkler Vars
var emitter1;
var sprinkler;

Game.Level1 = function (game) { };

var map;
var layer;
var frontLayer;
var backlayer;

var player;
var controls = {};
var cursors;
var playerSpeed = 450;
var jumpTimer = 0;
var jumpTrue = false;
var leftTrue = false;
var rightTrue = false;
var hitSprinkler = false;
var mobile = false;


// ==================================
// CREATE FUNCTION BELOW
// ==================================

Game.Level1.prototype = {

    create: function (game) {
        this.stage.backgroundColor = '#3598db';
			//this.stage.backgroundColor = '#000000';

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
        player = this.add.sprite(100, 400, 'WaterBot');
        player.anchor.setTo(0.5, 0.5);
        // player.animations.add('idle',[0, 1], 1, true); (make a sprite sheet)
        // Enable physics on player
        this.physics.enable(player, Phaser.Physics.ARCADE);
        // Ground and edges of the world
        player.body.collideWorldBounds = true;
        player.body.maxVelocity.y = 800;
        this.camera.follow(player);


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
        // enemy1 = new EnemyRobot(0, game, player.x + 400, player.y - 200);
			
        sprinkler = new EnemySprinkler(1, game, player.x + 350, player.y + 70);
        emitter1 = new SprinklerEmitter(2, game, player.x + 350, player.y + 55);

        npc1 = new NPC(3, game, player.x + 128, player.y);
			

    },
	
	
// ==================================
// UPDATE FUNCTION BELOW
// ==================================

    update: function () {


         //Collide Player with Sprinkler
       this.physics.arcade.collide(player, sprinkler.sprinkler);
       this.physics.arcade.collide(player, layer);
			this.physics.arcade.collide(player, frontLayer);
			// this will add physics to enemy 
			// this.physics.arcade.collide(enemy1.robot, layer);
			 this.physics.arcade.collide(npc1.npc, layer);
			
        // //Collide Player with Sprinkler
       hitSprinkler = checkOverlap(player, sprinkler.sprinkler);

        //emitter physics
       if(emitter1.emitter !== null && this.physics.arcade.overlap(player, emitter1.emitter)) {
         this.resetPlayer();
       }

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

        if (cursors.left.isDown || leftTrue) {
            moveLeft();
        }

        if (cursors.right.isDown || rightTrue) {
            moveRight();
        }
        
			
			// this line will check if player overlaps with enemy
//        if (checkOverlap(player, enemy1.robot)) {
//            this.resetPlayer();
//        }
			
			if (emitter1.emitter.exists) {
				if (hitSprinkler) {
				emitter1.emitter.destroy();
				}	
			}
			
			
			
        

			if (mobile) {
        if (this.joystick.properties.right) {
            moveRight();
        }

        if (this.joystick.properties.left) {
            moveLeft();
        }

        if (this.button.isDown) {
            jumpNow();
        }

				
			}

    },
    resetPlayer: function () {
        player.reset(100, 400);
    },
    // for checkpoint create checkx/y

    // creating buttons
    createButton: function (game, imgString, x, y, w, h, callBack) {
        var button1 = game.add.button(x, y, imgString, callBack, this, 2, 1, 0);

        button1.anchor.setTo(0.5, 0.5);
        button1.width = w;
        button1.height = h;
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