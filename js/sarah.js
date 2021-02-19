//main menu circle
let circleButton1X;
let circleButton1Y;

//return to main menu ellipse
let mainMenuReturnX;
let mainMenuReturnY;

let canvas;

//video variable
let transitionVid;

//booleans to draw functions
let mainMenuBool = true;
let adPref1Bool = false;

let fb;
let fbposYspeed = 3;

function preload(){
  fb = loadImage("images/fb1swirl.png");
}

function facebook (){
  circleButton1X = windowWidth/6;
  circleButton1Y = windowHeight/2;

    image(fb, circleButton1X, circleButton1Y,250,250);

    if (circleButton1Y > windowHeight || circleButton1YY < 0){
      fbposYspeed= fbposYspeed * -1;
    }
  circleButton1Y = circleButton1Y + fbposYspeed;
  circleButton1X = circleButton1Y + random(-10,10);




}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index", "-1");

  //create your video, style it then hide it until we want to show it
  //you need to add your own video here.
  transitionVid = createVideo(['videos/Playblast 1:2.mov']);
  transitionVid.style('z-index', '2');
  transitionVid.style('position', 'relative');
  transitionVid.style('width', '100%');
  transitionVid.style('height', '100%');
  transitionVid.hide();

  //setting the main menu and return to main menu buttons x and y coordinates
  circleButton1X = windowWidth/6;
  circleButton1Y = windowHeight/2;

  mainMenuReturnX = 60;
  mainMenuReturnY = 70;
}

//the main menu function
function menuButtons(){
  //make sure proper booleans are flipped
  mainMenuBool = true;
  adPref1Bool = false;

  background(255);
  fill(0);
  //ellipse(circleButton1X, circleButton1Y, 100, 100);
  imageMode(CENTER);
image(fb,circleButton1X, circleButton1Y, 200, 200);
  //check to see if the mouse is over the menu ellipse, if it is and mouse
  //is pressed trigger the videoTransition function
  if(dist(mouseX, mouseY, circleButton1X, circleButton1Y)< 100 && mouseIsPressed){
    videoTransition1();
  }
}


function videoTransition1(){
  //make sure proper booleans are flipped
  mainMenuBool = false;
  adPref1Bool = false;

  //show the video and play it
  transitionVid.show();
  transitionVid.style('display', 'inline');
  transitionVid.play();

  //when the video has ended, trigger the asPref1 function
  transitionVid.onended(adPref1);
}

function adPref1(){
  //hide the video
  transitionVid.hide();

  //make sure proper booleans are flipped
  mainMenuBool = false;
  adPref1Bool = true;

  background(255);
  text("Animated Screen", 50, 200);
  ellipse(mainMenuReturnX, mainMenuReturnY, 50, 50);
  ellipse(mouseX, mouseY, 30, 30);

  //check to see if the mouse is over the return menu ellipse, if it is and mouse
  //is pressed return to the main menu
  if(dist(mouseX, mouseY, mainMenuReturnX, mainMenuReturnY)< 25 && mouseIsPressed){
    menuButtons();
  }
}

function draw() {
  //we need to keep drawing these over and over in draw because you'll
  //have animations and will need to check the status of teh mouse in each function.
  //So we can use booleans to check to see what function we should be drawing.
  //The booleans are flipped back and forth when the different functions are triggered.

  //if the main menu boolean is true, keep drawing the menuButtons function
  if(mainMenuBool == true){
    menuButtons();
  }

  //if the adsPref1 boolean is true, keep drawing the adsPref1 function
  if(adPref1Bool == true){
    adPref1();
  }

}
