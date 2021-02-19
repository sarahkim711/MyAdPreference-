
let ellipseX =900;
let ellipseY = 500;

function setup(){
  createCanvas(windowWidth,windowHeight);



}

function draw(){
  if(mouseIsPressed){
    background(10,30,69);
  }
  background (100,40,100);

  if(mouseX > windowWidth/2 && mouseY < windowHeight/2){

      ellipseX = 300;
      ellipseY = 200;
  } else {
      ellipseX = 900;
      ellipseY = 500;
  }


  fill(30,20,50);
  ellipse (ellipseX, ellipseY, 100,100);
}




//when window is resized fixing!!!
function windowResized(){
  resizedCanvas(windowWidth, windowHeight);
}
