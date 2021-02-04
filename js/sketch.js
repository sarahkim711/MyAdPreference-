function setup() {
  //setup code goes once
  createCanvas(windowWidth,windowHeight);
  background(180,0,30);
}

function draw() {
  // draw code goes in a loop


fill(30,255,60);
strokeWeight(3);
ellipse(400,500,300);
noFill();
rect(500,400,200,200);

rect(mouseX, mouseY, 10,10);

}
