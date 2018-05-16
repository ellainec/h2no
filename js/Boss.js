var player;
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

Game.Boss = function(game) {
    
};


Game.Boss.prototype = {

    create: function () {

        map = this.add.tilemap('boss_map');
        map.addTilesetImage('tiles', 'tileSheet');

        layerMain = map.createLayer(0);
        layerMain.resizeWorld();

        map.setCollisionBetween(1, 999, true);

        player = this.add.sprite(360, 60, 'dude');
        this.physics.enable(player, Phaser.Physics.ARCADE);
        player.body.gravity.y = 600;
        player.body.collideWorldBounds = true;

        player.animations.add('left', [0, 1, 2, 3], 10, true);
        player.animations.add('leftFast', [0, 1, 2, 3], 15, true);
        player.animations.add('right', [5, 6, 7, 8], 10, true);
        player.animations.add('rightFast', [5, 6, 7, 8], 15, true);

        jumpSound = this.add.audio('jump');
        smallJumpSound = this.add.audio('jumpSmall');
        bigJumpSound = this.add.audio('jumpBig');
        robotDeath = this.add.audio('robotDeath');
        buttonStomp = this.add.audio('buttonStomp');
        springSound = this.add.audio('spring');

        // this.camera.follow(player);

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
        this.physics.enable(bossButton, Phaser.Physics.ARCADE);
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
        this.physics.enable(spring, Phaser.Physics.ARCADE);
        spring.width = 16;
        spring.height = 16;
        spring.body.immovable = true;

        waterFloor = this.add.sprite(0, 480, 'blue');
        this.physics.enable(waterFloor, Phaser.Physics.ARCADE);
        waterFloor.width = window.screen.width;
        waterFloor.height = window.screen.height;
        waterFloor.alpha = 0.8;

        waterTweenA = this.add.tween(waterFloor).to({y: waterFloor.world.y + 50}, 2000, Phaser.Easing.Linear.In, false, 500);
        platformTweenA = this.add.tween(platforms).to({y: 50}, 2000, Phaser.Easing.Linear.In, false, 500);
        waterTweenB = this.add.tween(waterFloor).to({y: waterFloor.world.y + 150}, 2000, Phaser.Easing.Linear.In, false, 500);
        platformTweenB = this.add.tween(platforms).to({y: 150}, 2000, Phaser.Easing.Linear.In, false, 500);
        waterTweenC = this.add.tween(waterFloor).to({y: waterFloor.world.y + 300 + 300}, 3000, Phaser.Easing.Linear.In, false, 500);
        platformTweenC = this.add.tween(platforms).to({y: 300 + 300}, 3000, Phaser.Easing.Linear.In, false, 500);

        springTweenA = this.add.tween(spring).to({y: waterFloor.world.y + 30}, 2000, Phaser.Easing.Bounce.Out, false, 2000);
        springTweenB = this.add.tween(spring).to({y: waterFloor.world.y + 130}, 2000, Phaser.Easing.Linear.In, false, 500);
        springTweenC = this.add.tween(spring).to({y: waterFloor.world.y + 280 + 300}, 3000, Phaser.Easing.Linear.In, false, 500);
    },

    update: function () {
    
        this.physics.arcade.collide(player, layerMain);
        this.physics.arcade.collide(platforms, waterFloor);
        onPlatform = this.physics.arcade.collide(player, platforms);
        onFaucet = this.physics.arcade.collide(player, faucetGroup);
        onButton = this.physics.arcade.collide(player, bossButton);
        onSpring = this.physics.arcade.collide(player, spring);

        this.controls();
        // console.log(player.world.x);
        // console.log(player.world.y);
        // console.log(waterFloor.y);
        console.log(onSpring);

        this.lockCamera();

        this.stompButton();

        this.touchWaterFloor();

        this.onSpring();
    },

    controls: function () {

        if (!game.input.keyboard.isDown(Phaser.Keyboard.A) && !game.input.keyboard.isDown(Phaser.Keyboard.D)) {
            if (player.body.velocity.x > 0) {
                player.body.velocity.x -= 5;
            }
            if (player.body.velocity.x < 0) {
                player.body.velocity.x += 5;
            }
            if (player.body.velocity.x == 0) {
                player.frame = 4;
            }
        }
    
    
    
        if (game.input.keyboard.isDown(Phaser.Keyboard.A) && player.body.velocity.x > -125 && !player.body.blocked.left) {
            player.body.velocity.x -= 5;
            player.animations.play('left');
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.D) && player.body.velocity.x < 125 && !player.body.blocked.right) {
            player.body.velocity.x += 5;
            player.animations.play('right');
        }
    
    
    
        if (game.input.keyboard.isDown(Phaser.Keyboard.SHIFT) && game.input.keyboard.isDown(Phaser.Keyboard.A) && player.body.velocity.x < -100) {
            player.body.velocity.x = -175;
            player.animations.play('leftFast'); 
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.SHIFT) && game.input.keyboard.isDown(Phaser.Keyboard.D) && player.body.velocity.x > 100) {
            player.body.velocity.x = 175;
            player.animations.play('rightFast');
    
        }
    
    
    
        if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && player.body.onFloor()
        || game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) &&  player.body.touching.down && onPlatform
        || game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) &&  player.body.touching.down && onFaucet) {
            if (Math.abs(player.body.velocity.x) == 125) {
                player.body.velocity.y = -275;
                jumpSound.play();
            } else if (Math.abs(player.body.velocity.x) == 175) {
                player.body.velocity.y = -300;
                bigJumpSound.play();
            } else {
                player.body.velocity.y = -250;
                smallJumpSound.play();
            }
        }
        // console.log(player.body.velocity.x);
    },

    lockCamera: function () {

        this.camera.x = 336;
        this.camera.y = 336;
    },

    touchWaterFloor: function () {
        if (this.checkOverlap(player, waterFloor)) {
            this.playerDie();
        }

    },

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
            } else if (boss.frame == 2) {
                this.lowerWaterB();
            } else if (boss.frame == 3) {
                this.lowerWaterC();
            }
        }
    },

    onSpring: function () {
        if (onSpring) {
            player.body.velocity.x = 100;
            player.body.velocity.y = -800;
            springSound.play();
        }
    },

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

    checkOverlap: function (sprite1, sprite2) {
        return Phaser.Rectangle.intersects(sprite1.getBounds(), sprite2.getBounds());
    },

    playerDie: function () {
        if (player.exists) {
            player.kill();
            robotDeath.play();
        }
    }

}