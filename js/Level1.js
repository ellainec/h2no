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

}

var enemy1;

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

//Sprinkler Vars
var emitter;
var sprinkler;

Game.Level1.prototype = {

    create: function (game) {
        this.stage.backgroundColor = '#3598db'

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

        //ADD SPRINKLER STUFF HERE **




        controls = {
            up: this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR),
        };
        cursors = this.input.keyboard.createCursorKeys();
        

        if (!game.device.desktop) {
            // jump Button only appears for mobile devices
            jumpButton = game.add.button(game.canvas.width - 75, 
                                         game.canvas.height - 75, 
                                         'buttonJump', null, this, 0, 1, 0, 1);
            jumpButton.fixedToCamera = true;
            jumpButton.scale.setTo(0.25, 0.25);
            jumpButton.events.onInputDown.add(function () { jumpTrue = true });
            jumpButton.events.onInputUp.add(function () { jumpTrue = false });
            
            // left Button only appears for mobile devices
            leftButton = game.add.button(game.canvas.width - 790, 
                                         game.canvas.height - 75, 
                                         'buttonLeft', null, this, 0, 1, 0, 1);
            leftButton.fixedToCamera = true;
            leftButton.scale.setTo(0.25, 0.25);
            leftButton.events.onInputDown.add(function () { leftTrue = true });
            leftButton.events.onInputUp.add(function () { leftTrue = false });
            leftButton.events.onInputOver.add(function() {leftTrue = true});
            leftButton.events.onInputOut.add(function() {leftTrue = false});

            // right Button only appears for mobile devices
            rightButton = game.add.button(game.canvas.width - 720, 
                                          game.canvas.height - 75, 
                                          'buttonRight', null, this, 0, 1, 0, 1);
            rightButton.fixedToCamera = true;
            rightButton.scale.setTo(0.25, 0.25);
            rightButton.events.onInputDown.add(function () { rightTrue = true });
            rightButton.events.onInputUp.add(function () { rightTrue = false });
            rightButton.events.onInputOver.add(function() {rightTrue = true});
            rightButton.events.onInputOut.add(function() {rightTrue = false});


            
        }
        enemy1 = new EnemyRobot(0, game, player.x + 400, player.y - 200);



    },

    update: function () {

        this.physics.arcade.collide(player, layer);

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
