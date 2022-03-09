var player,wall,comp
const SCALE=20

function setup(){
createCanvas(800,800)
player=new Player(30,30,0,-1);
wall = new Wall();
comp = new Computer();

}


function draw(){
 scale(SCALE)
 frameRate(4)
 background("black")

 player.update();
 player.display();

 comp.move();
 comp.update();
 comp.display();

 wall.display();


}

function keyPressed() {
    if (keyCode === UP_ARROW || keyCode === 87)
    {
        if (player.ySpeed != 1) 
        {
            player.setSpeed(0, -1);
        } 
    } else if (keyCode === LEFT_ARROW || keyCode === 65) 
    {  
        if (player.xSpeed != 1) 
        {
          player.setSpeed(-1, 0);
        }
    } else if (keyCode === RIGHT_ARROW || keyCode === 68) 
    {
      if (player.xSpeed != -1) 
      {
          player.setSpeed(1, 0);
      }
    } else if (keyCode === DOWN_ARROW || keyCode === 83) 
    {
      if (player.ySpeed != -1) 
      {
          player.setSpeed(0, 1);
      }
    }
  }