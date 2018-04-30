var Game = {};

Game.Boot = function(game) {
    
};

Game.Boot.prototype = {
    init:function() {
        // touch screen input
        this.input.maxPointers = 2;
        
    },
    
    preload:function() {
        // this.load.image(); insert a loading bar
    },
    create:function() {
        this.state.start('Preloader');
        
    }
    
    
}
