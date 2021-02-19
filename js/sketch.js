
let ellipseX  = 0;
let ellipseY = 0;

let pointX = 400;
let pointY = 200;
function setup() {
  //setup code goes once
  createCanvas(windowWidth,windowHeight);
  background(random(255),random(255),random(255));
  rectMode(CENTER);

  print(random(300));

  ellipseX= random(ellipseX, windowWidth);
  ellipseY= random(ellipseY, windowHeight);


}

function draw() {
  // draw code goes in a loop


ellipse(ellipseX,ellipseY,150,150);
fill(30,255,60);
strokeWeight(3);
ellipse(400,500,300);
noFill();
rect(500,400,200,200);

//rect(mouseX, mouseY, 10,10);
fill(random(255));
stroke(30);
strokeWeight(30);
line(30,30, 30,300);
stroke(random(255),random(255),random(255));

point(mouseX, mouseY);
point(pointX, pointY);
strokeWeight(20);


}
