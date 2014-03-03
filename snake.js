(function(root){
  var Game = root.Game = (root.Game || {});

  var Snake = Game.Snake = function(maxX, maxY){
    this.direction = [-1, 0];
    this.segments = [[maxX/2,maxY/2]]
  }

  Snake.directions = [[0, -1], [0, 1], [1, 0], [-1, 0]]

  Snake.prototype.move = function() {
    var newX = this.segments[0][0] + this.direction[0];
    var newY = this.segments[0][1] + this.direction[1];
    this.segments.unshift([newX, newY]);
    this.segments.pop();
  }

  // takes position in directions array
  Snake.prototype.turn = function(dir){
    this.direction = Snake.directions[dir]
  }


})(this);