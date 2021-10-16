var box
function setup() {
  createCanvas(400,400);
box=createSprite(200,200,10,10)
box.shapeColor="blue"

}

function draw() 
{
  background(30);
drawSprites()
if (keyDown("right")){
box.x=box.x+1
}
if (keyDown("up")){
  box.y=box.y-1
  }
  if (keyDown("down")){
    box.y=box.y+1
    }
    if (keyDown("left")){
      box.x=box.x-1
      }




}




