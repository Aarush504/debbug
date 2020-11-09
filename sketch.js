var hr,sc,mn;
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  hr= hour();
  mn= minute();
  sc= second();
}

function draw() {
  hr= hour();
  mn= minute();
  sc= second();
  background(255,255,255);  
  translate(200,200);
  rotate(-90);
  scAngle= map(sc, 0,60,0,360);
  angleMode(DEGREES);
  drawSprites();
  push();
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
   pop();
}