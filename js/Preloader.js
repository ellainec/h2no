// load in assets and set up loading screen
Game.Preloader = function(game) {
    
    this.preloaderBar = null;
};

Game.Preloader.prototype = {
    preload:function() {
        
        //LOAD ALL ASSETS
        
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        // load player sprite
        this.load.image('WaterBot', 'assets/WaterBot.png');
        // load map
        this.load.tilemap('map', 'assets/tilemaps/maps/H2NO.csv');
        
        
        // load tiles
        this.load.image('tileset', 'assets/tilemaps/tiles/TileSpriteMap.png');
        
        this.load.image('buttonLeft', 'assets/buttons/arrowLeft.png');
        this.load.image('buttonJump', 'assets/buttons/arrowUp.png');
        this.load.image('buttonRight', 'assets/buttons/arrowRight.png');
        
        
        
    },
    
    create:function() {
        this.state.start('Level1');
    }
    
    
}