(function(root){
  var Game = root.Game = (root.Game || {});

  var Board = Game.Board = function() {
    this.snake = new Game.Snake(Board.MAX_X, Board.MAX_Y);
    this.grid = makeBoard(Board.MAX_X, Board.MAX_Y)
  }

  Board.MAX_X = 10;
  Board.MAX_Y = 10;


  var makeBoard = function (maxX, maxY) {
    return _.times(maxX, function (i) {
      return _.times(maxY, function (j) {
        return null;
      });
    });
  };

  Board.prototype.render = function(){
    var massiveString = "";
    for(var i = 0; i < this.grid.length; i++){
      for(var j = 0; j< this.grid[i].length; j++){
        if(this.hasSnakeSegment([i,j])) {
          massiveString += "S";
        } else {
          massiveString += ".";
        }
      }
      massiveString += "\n";
    }
    return massiveString;
  }

  Board.prototype.hasSnakeSegment = function(pos){
    for(var i = 0; i < this.snake.segments.length; i++){
      if (this.snake.segments[i][0] == pos[0] && this.snake.segments[i][1] == pos[1]) {
        return true;
      }
    }
    return false;

  }


})(this);