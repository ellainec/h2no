EnemyRobot = function (index, game, x, y) {
    this.robot = game.add.sprite(x, y, 'WaterBot');
    // this is a global variable

    this.robot.anchor.setTo(0.5, 0.5);
    this.robot.name = index.toString();
    game.physics.enable(this.robot, Phaser.Physics.ARCADE);
    this.robot.body.immovable = true;
    this.robot.body.allowGravity = false;
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

     this.emitter.makeParticles('diamond');
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

var enemy1;

//Sprinkler Vars
var emitter;
var sprinkler;

Game.Level1 = function (game) { };

var map;
var layer;

var player;
var controls = {};
var cursors;
var playerSpeed = 450;
var jumpTimer = 0;
var jumpTrue = false;
var leftTrue = false;
var rightTrue = false;
var hitSprinkler = false;



Game.Level1.prototype = {

    create: function (game) {
        this.stage.backgroundColor = '#3598db';

        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.physics.arcade.gravity.y = 1600;

        // add map with 'map id, tileheight/width'
        map = this.add.tilemap('map', 64, 64);
        map.addTilesetImage('tileset');
        layer = map.createLayer(0);
        layer.resizeWorld();
        map.setCollisionBetween(0, 5);
        //map.setTileIndexCallback(6, this.resetPlayer, this);
        map.setTileIndexCallback(7, this.resetPlayer, this);
        map.setTileIndexCallback(8, this.resetPlayer, this);
        map.setTileIndexCallback(9, this.resetPlayer, this);

        // Set up player
        player = this.add.sprite(100, 1200, 'WaterBot');
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
        

        enemy1 = new EnemyRobot(0, game, player.x + 400, player.y - 200);
        sprinkler = new EnemySprinkler(1, game, player.x + 350, player.y +100);
        emitter = new SprinklerEmitter(2, game, player.x + 350, player.y +55);



    },

    update: function () {


         //Collide Player with Sprinkler
        this.physics.arcade.collide(player, sprinkler.sprinkler);
        this.physics.arcade.collide(player, layer);

        // //Collide Player with Sprinkler
        hitSprinkler = this.physics.arcade.collide(player, sprinkler.sprinkler);

        //emitter physics
    //    if(game.physics.arcade.overlap(player, emitter.emitter)) {
    //     this.resetPlayer();
    //   }

        //Kill Emitter
        if (hitSprinkler) {
            emitter.emitter.destroy(true);
        }

        // END OF EMITTER STUFF


        player.body.velocity.x = 0;



        if ((controls.up.isDown || jumpTrue)
            && (player.body.onFloor() || player.body.touching.down)) {
            jumpNow();
        }

        if (cursors.left.isDown || leftTrue) {
            moveLeft();
        }

        if (cursors.right.isDown || rightTrue) {
            moveRight();
        }
        
        if (checkOverlap(player, enemy1.robot)) {
            this.resetPlayer();
        }
        

        



    },
    resetPlayer: function () {
        player.reset(100, 1200);
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
