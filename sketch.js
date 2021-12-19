var quadrado 
function setup() {
  createCanvas(400,400);

quadrado = createSprite(200,200,100,100)
quadrado.shapeColor = color ("blue")
}

function draw() 
{
  background("yellow");
  if (keyDown("w")) {
background ("orange")
  
  }
  if (keyDown("a")) {
    background ("red")

  }
  if (keyDown("s")) {
    background ("green")

  }
  if (keyDown("d")) {
    background ("brown")

  }









drawSprites ()
}




