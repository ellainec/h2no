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
    // Adding Sprite

    // Sprinkler Physics
    game.physics.enable(this.sprinkler, Phaser.Physics.ARCADE);
    this.sprinkler.name = index.toString();
    this.sprinkler.anchor.setTo(0.5, 0.6);
    this.sprinkler.scale.setTo(0.5, 0.5);
    this.sprinkler.body.immovable = true;
    this.sprinkler.body.allowGravity = false;
    this.sprinkler.body.collideWorldBounds = true;

    // Sets the Collision Size
    this.sprinkler.body.setSize(16, 8, 25, 6);

    // Sprinkler Sprite Animation
    this.sprinkler.animations.add('on', [0], 1, true);

};

SprinklerCollisionBox = function (index, game, x, y) {
    this.sprinklerCollision = game.add.sprite(x, y, 'sprinklerCollision');

    // Sprinkler Collision Physics
    game.physics.arcade.enable(this.sprinklerCollision, Phaser.Physics.ARCADE);
    this.sprinklerCollision.name = index.toString();
    this.sprinklerCollision.anchor.setTo(0.5, 0.4);
    this.sprinklerCollision.scale.setTo(0.45, 0.4);
    this.sprinklerCollision.body.immovable = true;
    this.sprinklerCollision.body.allowGravity = false;
    this.sprinklerCollision.body.collideWorldBounds = true;


    //Sets the Sprinkler Boundary to invisible
    this.sprinklerCollision.alpha = 0;
};




SprinklerEmitter = function (index, game, x, y) {
    this.emitter = game.add.emitter(x, y);

    this.emitter.makeParticles('water', 0, 120, true);
    this.emitter.start(false, 200, -1);


    this.emitter.minParticleScale = 0.2;
    this.emitter.maxParticleScale = 0.3;
    this.emitter.lifespan = 3800;

    this.emitter.setYSpeed(-500, -450);
    this.emitter.setXSpeed(-75, 75);
    this.emitter.gravity = 400;
    this.emitter.name = index.toString();


};


SprinklerEmitter2 = function (index, game, x, y) {
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

//Sprinkler Vars
var emitter1;
var emitter2;


Game.Level1 = function (game) {


};

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
var life;
var lifeText;

var controls = {};
var cursors;
var hitSprinkler = false;
var hitSprinklerCollision = false;
var mobile = false;

var timer;

var playerName;
//TIMER//
var timer;
var timeLimit;
var timeText;

//CLOCKS FOR EXTRA TIME
var clocks;
var easterEggReward = false;


// DRONE PARTS
var stationary = null;
var clouds = null;

var facing = 'left';

var locked = false;
var lockedTo = null;
var wasLocked = false;
var willJump = false;

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
        //timer.loop(1000, updateCounter, this);


        timer.start();


        // Sprinkler & Emitter 1
        emitter1 = new SprinklerEmitter(2, game, player.x + 350, player.y + 55);
        sprinkler = new EnemySprinkler(1, game, player.x + 350, player.y + 70);
        sprinklerCollision = new SprinklerCollisionBox(1, game, player.x + 350, player.y + 70);


        // Sprinkler & Emitter 2
        emitter2 = new SprinklerEmitter2(2, game, player.x + 1800, player.y + 55);
        sprinkler2 = new EnemySprinkler(1, game, player.x + 1800, player.y + 70);
        sprinklerCollision2 = new SprinklerCollisionBox(1, game, player.x + 1800, player.y + 70);



        npc1 = new NPC(3, game, player.x + 128, player.y);

        // TIMER //
        timer = game.time.create(false);
        timer.loop(1000, this.countdown, this);
        timer.start();
        timeLimit = 200;
        timeText = game.add.text(610, 40, "500", {
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
        tweenCatFound = this.add.tween(cat1.cat).to({ alpha: 0 }, 500, Phaser.Easing.Linear.In, false, 500);
        tweenCatReappear = this.add.tween(cat2.cat).to({ alpha: 1 }, 500, Phaser.Easing.Linear.In, false, 500);
        tweenCatFound.chain(tweenCatReappear);

        this.world.bringToTop(player);


        // Sprinkler Interaction Shit
        oneHit = true;
        oneHit2 = true;
        allowBounce = true;
        allowBounce2 = true;





        //////////////////////////////////////////Drones//////////////////////////////////////////
        this.clouds = this.add.physicsGroup();

        var cloud1 = new CloudPlatform(this.game, 400, 400, 'platform', this.clouds);

        cloud1.addMotionPath([
            { x: "+300", xSpeed: 3000, xEase: "Linear", y: "+0", ySpeed: 2000, yEase: "Linear" },
            { x: "-300", xSpeed: 3000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Linear" },
        ]);

        this.clouds.callAll('start');

        //////////////////////////////////////////Drones//////////////////////////////////////////


    },


    /////////////Drone Functions////////////


    customSep: function (player, platform) {

        if (!this.locked && player.body.velocity.y > 0) {
            this.locked = true;
            this.lockedTo = platform;
            platform.playerLocked = true;

            player.body.velocity.y = 0;
        }

    },

    checkLock: function () {

        this.player.body.velocity.y = 0;

        //  If the player has walked off either side of the platform then they're no longer locked to it
        if (this.player.body.right < this.lockedTo.body.x || this.player.body.x > this.lockedTo.body.right) {
            this.cancelLock();
        }

    },

    cancelLock: function () {

        this.wasLocked = true;
        this.locked = false;

    },

    preRender: function () {

        if (this.game.paused) {
            //  Because preRender still runs even if your game pauses!
            return;
        }

        if (this.locked || this.wasLocked) {
            this.player.x += this.lockedTo.deltaX;
            this.player.y = this.lockedTo.y - 48;

            if (this.player.body.velocity.x !== 0) {
                this.player.body.velocity.y = 0;
            }
        }

        if (this.willJump) {
            this.willJump = false;

            if (this.lockedTo && this.lockedTo.deltaY < 0 && this.wasLocked) {
                //  If the platform is moving up we add its velocity to the players jump
                this.player.body.velocity.y = -500 + (this.lockedTo.deltaY * 10);
            }
            else {
                this.player.body.velocity.y = -500;
            }

            this.jumpTimer = this.time.time + 750;
        }

        if (this.wasLocked) {
            this.wasLocked = false;
            this.lockedTo.playerLocked = false;
            this.lockedTo = null;
        }

    },




    // ==================================
    // UPDATE FUNCTION BELOW
    // ==================================

    update: function () {

        //Collide Player with Sprinkler and SprinkerCollision
        var hitSprinkler = this.physics.arcade.collide(player, sprinkler.sprinkler);
        var hitSprinklerCollision = this.physics.arcade.collide(player, sprinklerCollision.sprinklerCollision);

        var hitSprinkler2 = this.physics.arcade.collide(player, sprinkler2.sprinkler);
        var hitSprinklerCollision2 = this.physics.arcade.collide(player, sprinklerCollision2.sprinklerCollision);




        this.physics.arcade.collide(player, layer);
        this.physics.arcade.collide(player, clouds);
        this.physics.arcade.overlap(player, clocks, collectClock, null, this);
        this.physics.arcade.collide(player, frontLayer);
        // this will add physics to enemy 
        // this.physics.arcade.collide(enemy1.robot, layer);
        this.physics.arcade.collide(npc1.npc, layer);
        this.physics.arcade.collide(cat1.cat, layer);
        this.physics.arcade.collide(cat2.cat, layer);
        this.physics.arcade.collide(chris1.chris, layer);

        //emitter physics
        if (emitter1.emitter !== null && this.physics.arcade.overlap(player, emitter1.emitter)) {
            this.resetPlayer();
        }

        if (emitter2.emitter !== null && this.physics.arcade.overlap(player, emitter2.emitter)) {
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


        // this line will check if player overlaps with enemy
        //        if (checkOverlap(player, enemy1.robot)) {
        //            this.resetPlayer();
        //        }

        //Emitter2 Re-Direction
        if (player.position.x > sprinkler2.sprinkler.position.x) {
            emitter2.emitter.setXSpeed(500, 450);
        } else {
            emitter2.emitter.setXSpeed(-500, -450);
        }



        // KILL EMITTERS ON SPRINKLER IMPACT *****
        if (oneHit) {
            sprinkler.sprinkler.animations.play('on');

            //Kill Emitter 1
            if (emitter1.emitter.exists) {
                if (hitSprinkler) {
                    emitter1.emitter.destroy();
                    sprinkler.sprinkler.animations.stop();
                    sprinkler.sprinkler.animations.frame = 1;
                    oneHit = false;
                    sprinkler.sprinkler.body.setSize(16, 8, 25, 18);
                    sprinklerCollision.sprinklerCollision.destroy();
                    playerBounce();
                }
            }
        }

        if (oneHit2) {
            sprinkler2.sprinkler.animations.play('on');

            //Kill Emitter 2
            if (emitter2.emitter.exists) {
                if (hitSprinkler2) {
                    emitter2.emitter.destroy();
                    sprinkler2.sprinkler.animations.stop();
                    sprinkler2.sprinkler.animations.frame = 1;
                    oneHit2 = false;
                    sprinkler2.sprinkler.body.setSize(16, 8, 25, 18);
                    sprinklerCollision2.sprinklerCollision.destroy();
                    playerBounce2();
                }
            }
        }


        // END OF KILL EMITTTERS ON SPRINKLER IMPACT *****



        // Function for Bouncing On Sprinklers
        function playerBounce() {
            if (hitSprinkler && allowBounce) {

                //BOUNCES PLAYER UP
                player.body.velocity.y = -500;
                allowBounce = false;

            } else if (player.body.touching.down && hitSprinkler) {
                player.body.velocity.y = -400;
            }
        }

        function playerBounce2() {
            if (hitSprinkler2 && allowBounce2) {

                //BOUNCES PLAYER UP
                player.body.velocity.y = -500;
                allowBounce2 = false;

            } else if (player.body.touching.down && hitSprinkler2) {
                player.body.velocity.y = -400;
            }
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


        ///////////////////Drone///////////////////

        this.physics.arcade.collide(player, clouds, this.customSep, null, this);

        //  Do this AFTER the collide check, or we won't have blocked/touching set
        // var standing = this.player.body.blocked.down || this.player.body.touching.down || this.locked;

        // this.player.body.velocity.x = 0;

        // if (this.cursors.left.isDown) {
        //     this.player.body.velocity.x = -150;

        //     if (this.facing !== 'left') {
        //         this.player.play('left');
        //         this.facing = 'left';
        //     }
        // }
        // else if (this.cursors.right.isDown) {
        //     this.player.body.velocity.x = 150;

        //     if (this.facing !== 'right') {
        //         this.player.play('right');
        //         this.facing = 'right';
        //     }
        // }
        // else {
        //     if (this.facing !== 'idle') {
        //         this.player.animations.stop();

        //         if (this.facing === 'left') {
        //             this.player.frame = 0;
        //         }
        //         else {
        //             this.player.frame = 5;
        //         }

        //         this.facing = 'idle';
        //     }
        // }

        // if (standing && this.cursors.up.isDown && this.time.time > this.jumpTimer) {
        //     if (this.locked) {
        //         this.cancelLock();
        //     }

        //     this.willJump = true;
        // }

        // if (this.locked) {
        //     this.checkLock();
        // }

        ///////////////////////Drone///////////////////////////

    },

    render: function () {
        // the numbers are the coordinates to place the text at
        // game.debug.text('TIME: ' + timeLimit, 0, 15);
        // game.debug.text(playerName, 0, 40);
        game.debug.body(sprinkler.sprinkler);
        game.debug.body(sprinkler2.sprinkler);
        game.debug.body(sprinklerCollision.sprinklerCollision);
        game.debug.body(sprinklerCollision2.sprinklerCollision);
    },
    resetPlayer: function () {
        player.reset(100, 400);
        life--;
        console.log("died");
        if (life === 0) {
            this.state.start('Gameover');
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

    countdown: function () {
        timeLimit--;
    },

    timeUp: function () {
        if (timeLimit == 0 || timeLimit < 0) {
            //change this to something else later, like gameover or minus one life
            timer.stop();
            game.state.start('Gameover');
        }
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

function collectClock(player, clock) {
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