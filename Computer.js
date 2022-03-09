// 0 is left
  // 1 is up
  // 2 is right
  // 3 is down

class Computer extends Player{
    constructor(){
        super(10, 10, 0, -1);
        this.head = {};
    }

    move() {
        this.head = this.body[this.body.length -1];
        var moves = this.findPossibleMoves();
        
        var move = random(moves);
        
        this.processMove(move);
        
      }
      
      
      findPossibleMoves() {
        var moves = [];
        if (this.xSpeed == 1) {
          if (this.isMovingUpValid()) moves.push(1);
          if (this.isMovingDownValid()) moves.push(3);
          if (this.isMovingRightValid()) moves.push(2, 2);
        } else if (this.ySpeed == 1) {
          if (this.isMovingDownValid()) moves.push(3, 3);
          if (this.isMovingRightValid()) moves.push(2);
          if (this.isMovingLeftValid()) moves.push(0);
        } else if (this.xSpeed == -1) {
            if (this.isMovingUpValid()) moves.push(1);
          if (this.isMovingDownValid()) moves.push(3);
          if (this.isMovingLeftValid()) moves.push(0, 0);
        } else if (this.ySpeed == -1) {
          if (this.isMovingUpValid()) moves.push(1, 1);
          if (this.isMovingLeftValid()) moves.push(0);
          if (this.isMovingRightValid()) moves.push(2);
        }
        
        return moves;
      }
      
      isMovingUpValid() {
        var x = this.head.x;
        var y = this.head.y - 1;
        
        return this.isValidMove(x, y);
      }
      
      isMovingDownValid() {
        var x = this.head.x;
        var y = this.head.y + 1;
        
        return this.isValidMove(x, y);
      }
      
      isMovingRightValid() {
        var x = this.head.x +1;
        var y = this.head.y;
        
        return this.isValidMove(x, y);
      }
      
      isMovingLeftValid() {
        var x = this.head.x - 1;
        var y = this.head.y;
        
        return this.isValidMove(x, y);
      }

      isValidMove(x, y) {
        return !this.willHitWall(x, y) && !this.willHitSelf(x, y) && !this.willHitPlayer(x, y);
    }
    
    willHitWall(x, y) {
      if (x <= 1 || x >= width / SCALE -1) {
          return true;
      } else if ( y <= 1 || y >= height / SCALE -1) {
          return true;
      }
      return false;
    }
    
    willHitSelf(x, y) {
      for (let i = 0; i < this.body.length - 1; i++){
        if (x == this.body[i].x && y == this.body[i].y) {
            return true;
        }
      } 
      return false;
    }
    
    willHitPlayer(x, y) {
      for (let i = 0; i < player.body.length - 1; i++){
        if (x == player.body[i].x && y == player.body[i].y) {
            return true;
        }
      } 
      return false;
    }
      
    processMove(move) {
      if (move === 0) {
          this.setSpeed(-1, 0);
      } else if (move === 1) {
          this.setSpeed(0, -1);
      } else if (move === 2) {
          this.setSpeed(1, 0);
      } else if (move === 3) {
          this.setSpeed(0, 1);
      }
    }
}