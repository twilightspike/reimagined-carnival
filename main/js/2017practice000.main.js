Carnival.Main = function(game){};
Carnival.Main.prototype = {
  create: function(){
    this.add.sprite(0, 0, 'foto_no_exif');
  },
  startGame: function(){
    this.state.start(Game);
  }
};
