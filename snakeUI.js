(function(root){
  var Game = root.Game = (root.Game || {});
  var Board = Game.Board;

  var View = Game.View = function (html){
    this.$el = html;

  }

  View.prototype.start = function (){
     this.board = new Board();
     view = this;
     var view = this;
     $('body').on("keydown", view.handleKeyEvent.bind(view))
     setInterval(view.step.bind(view), 500);
  }

  View.prototype.step = function (){
    this.board.snake.move();
    var display = this.board.render();
    this.$el.html(display);
  }

  View.prototype.handleKeyEvent = function(event) {
    var key = event.keyCode
    var snake = this.board.snake
    switch(key){
    case 38: //up
      snake.turn(3);
      break;
    case 40: //down
      snake.turn(2);
      break;
    case 37:  //left
      snake.turn(0);
      break;
    case 39: //right
      snake.turn(1);
      break;
    }
  }

  $(document).ready(function(){
    var view = new View($('pre'));
    view.start();
  })

})(this);