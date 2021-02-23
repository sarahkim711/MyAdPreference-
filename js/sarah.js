//main menu circle
let fbButtonX;
let fbButtonY;
let googleButtonX;
let googleButtonY;
let igButtonX;
let igButtonY;

//return to main menu ellipse
let mainMenuReturnX;
let mainMenuReturnY;

let canvas;

//video variable
let fbTransitionVid;
let googleTransitionVid;
let igTransitionVid;

//booleans to draw functions
let mainMenuBool = true;
let adFacebookBool = false;
let adGoogleBool = false;
let adIgBool = false;

let fb;
let fbposYspeed = 3;
let fbposXspeed = 3;

let google;
let googleposYspeed = 4;
let googleposXspeed = 3;

let ig;
let igposYspeed = 3;

let backgroundimgX =0
let backgroundimgY =0
let splash;
let blob;
let rainbow;
let mycursor;


let bottomleft;
let bottomleftX;
let bottomleftY;

let bottomright;
let topleft;
let topright;


function preload(){
  //mycursor = loadImage(("images/middlefin.png");
  fb = loadImage("images/fb1swirl.png");
  google = loadImage("images/g2swirl.png");
  backgroundimg = loadImage ("images/backgroundswirl.png");
  ig = loadImage("images/ig3swirl.png");
  bottomleft = loadImage("images/bottomleft.png");
  bottomright = loadImage ("images/bottomright.png");
  topleft = loadImage("images/topleft.png");
  topright = loadImage("images/topright.png");
  splash = loadImage("images/splash.png");
  blob = loadImage("images/blob.png");
  rainbow = loadImage("images/rainbow.png");
  mycursor = loadImage("images/middlefin.png");

}


function setup() {

  canvas = createCanvas(windowWidth, windowHeight);
  //below makes main menu background black
  background(0);
  canvas.position(0,0);
  canvas.style("z-index", "-1");


  //create your video, style it then hide it until we want to show it
  //you need to add your own video here.
  //make one for each F,G,I
  fbTransitionVid = createVideo(['videos/facebookSPIN.mov']);
  fbTransitionVid.style('z-index', '2');
  // fbTransitionVid.style('position', 'relative');
  fbTransitionVid.position (windowWidth/10,windowHeight/10);
  fbTransitionVid.style('width', '80%');
  fbTransitionVid.style('height', '70%');
  fbTransitionVid.hide();

  googleTransitionVid = createVideo(['videos/dad.mov']);
  googleTransitionVid.style('z-index', '2');
  googleTransitionVid.style('position', 'relative');
  googleTransitionVid.style('width', '100%');
  googleTransitionVid.style('height', '100%');
  googleTransitionVid.hide();

  igTransitionVid = createVideo(['videos/dog.mov']);
  igTransitionVid.style('z-index', '2');
  igTransitionVid.style('position', 'relative');
  igTransitionVid.style('width', '100%');
  igTransitionVid.style('height', '100%');
  igTransitionVid.hide();

  //setting the main menu and return to main menu buttons x and y coordinates
  fbButtonX = windowWidth/6;
  fbButtonY = windowHeight/2;

  googleButtonX = windowWidth;
  googleButtonY = 20;
//  googleButtonX = random(windowWidth);
//  googleButtonY = random(windowHeight);

  // igButtonX= windowWidth/1.5;
  igButtonX = random(windowWidth);
  igButtonY = windowHeight/2;
  // imageMode(CENTER);
  // for(let i=0; i <50; i++){
  //   backgroundimgX = random(windowWidth);
  //   backgroundimgY = random(windowHeight);
  //   image(backgroundimg, backgroundimgX, backgroundimgY, 100,100);
  // }
   backgroundimgX = windowWidth/2;
   backgroundimgY = windowHeight/2;


  mainMenuReturnX = 60;
  mainMenuReturnY = 70;
}

//the main menu function
function menuButtons(){
  //make sure proper booleans are flipped
  //background animating
  // image (backgroundimg,backgroundimgX, backgroundimgY, random(windowWidth),random(windowHeight));
//   image (splash,windowWidth/2, windowHeight/3, windowWidth,windowHeight);
  mainMenuBool = true;
  adFacebookBool = false;
  adGoogleBool = false;
  adIgBool = false;

//  background(255);
  imageMode(CENTER);
  imageMode(CORNER);
  // image (splash,windowWidth/2, windowHeight/3, windowWidth,windowHeight);
  image (blob,windowWidth/9, windowHeight/7, windowWidth/2,windowHeight/2);
  imageMode(CORNER);
  image (rainbow,-150,-150, windowWidth*1.2,windowHeight*1.2);
  imageMode(CENTER);
  image(bottomright,windowWidth*8/9,windowHeight*7/9, 500, 500);
  image(topleft, windowWidth*2/9,windowHeight*3/9,650,500);
  image(topright, windowWidth*7/9, windowHeight*2/9,windowWidth/2,windowHeight/2);
  image(bottomleft, windowWidth*1/9, windowHeight*7/9,500,650)

  imageMode(CENTER);
  //  image(mycursorX,mycursorY,20,20);
  frameRate(50);
  //  //ellipse(circleButton1X, circleButton1Y, 100, 100);
  image(fb,fbButtonX, fbButtonY, 500,500);
  image(google, googleButtonX, 300,300);
  image(ig, igButtonX, igButtonY, 500,500);
  /////////////////////the animations down below
  //FACEBOOK ANIMATION

  // if (fbButtonY > windowHeight || fbButtonY < 0){
  //   fbposYspeed= fbposYspeed * -1;
  // }
  // fbButtonY = fbButtonY + fbposYspeed;
  // fbButtonX = fbButtonX + random(-10,10);
  if (fbButtonY > windowHeight || fbButtonY < 0){
  fbposYspeed= fbposYspeed * -1;
  }
  if (fbButtonX > windowWidth || fbButtonX < 0){
    fbposXspeed= fbposXspeed * -1;
  }
  fbButtonY = fbButtonY - fbposYspeed;
  fbButtonX = fbButtonX - fbposXspeed;

  //GOOGLE ANIMATION
  if (googleButtonY > windowHeight || googleButtonY < 0){
    googleposYspeed= googleposYspeed * -1;
  }
  if (googleButtonX > windowWidth || googleButtonX < 0){
    googleposXspeed= googleposXspeed * -1;
  }
  googleButtonY = googleButtonY - googleposYspeed;
  googleButtonX = googleButtonX - googleposXspeed;
  //INSTAGRAM animations
  if (igButtonY > windowHeight || igButtonY < 0){
    igposYspeed= igposYspeed * -1;
  }
  igButtonY = igButtonY + igposYspeed;
  igButtonX = igButtonX + random(-.8,.8);
  //check to see if the mouse is over the menu ellipse, if it is and mouse
  //is pressed trigger the videoTransition function
  //make one for each F,G,I
  if(dist(mouseX, mouseY, fbButtonX, fbButtonY)< 250 && mouseIsPressed){
    fbvideoTransition();
  }
  if(dist(mouseX, mouseY, googleButtonX, googleButtonY)< 250 && mouseIsPressed){
    googlevideoTransition();
  }
  if(dist(mouseX, mouseY, igButtonX,igButtonY)< 250 && mouseIsPressed){
    igvideoTransition();
  }
}

//make one for each F,G,I
function fbvideoTransition(){
  //backgroundcolor
  background(200,20,10);
  //make sure proper booleans are flipped
  mainMenuBool = false;
  adFacebookBool = false;

  //show the video and play it
  fbTransitionVid.show();
  fbTransitionVid.style('display', 'inline');
  fbTransitionVid.play();

  //when the video has ended, trigger the asPref1 function
  fbTransitionVid.onended(adFacebook);
}

function googlevideoTransition(){

  background(0);
  //make sure proper booleans are flipped
  mainMenuBool = false;
  adGoogleBool = false;

  //show the video and play it
  googleTransitionVid.show();
  googleTransitionVid.style('display', 'inline');
  googleTransitionVid.play();

  //when the video has ended, trigger the asPref1 function
  googleTransitionVid.onended(adGoogle);
}
function igvideoTransition(){

  background(0);
  //make sure proper booleans are flipped
  mainMenuBool = false;
  adIgBool = false;

  //show the video and play it
  igTransitionVid.show();
  igTransitionVid.style('display', 'inline');
  igTransitionVid.play();

  //when the video has ended, trigger the asPref1 function
  igTransitionVid.onended(adInstagram);
}




function adFacebook(){
  //hide the video
  fbTransitionVid.hide();

  //make sure proper booleans are flipped
  mainMenuBool = false;
  adFacebookBool = true;


  background(255);
  text("Facebook", 50, 200);
  ellipse(mainMenuReturnX, mainMenuReturnY, 50, 50);
  ellipse(mouseX, mouseY, 30,30);

  //check to see if the mouse is over the return menu ellipse, if it is and mouse
  //is pressed return to the main menu
  if(dist(mouseX, mouseY, mainMenuReturnX, mainMenuReturnY)< 25 && mouseIsPressed){
    menuButtons();
  }
}

function adGoogle(){
  //hide the video
  googleTransitionVid.hide();

  //make sure proper booleans are flipped
  mainMenuBool = false;
  adGoogleBool = true;


  background(255);
  text("Google", 50, 200);
  ellipse(mainMenuReturnX, mainMenuReturnY, 50, 50);
  ellipse(mouseX, mouseY, 30,30);

  //check to see if the mouse is over the return menu ellipse, if it is and mouse
  //is pressed return to the main menu
  if(dist(mouseX, mouseY, mainMenuReturnX, mainMenuReturnY)< 25 && mouseIsPressed){
    menuButtons();
  }
}


function adInstagram(){
  //hide the video
  igTransitionVid.hide();

  //make sure proper booleans are flipped
  mainMenuBool = false;
  adIgBool = true;


  background(255);
  text("Instagram", 50, 200);
  ellipse(mainMenuReturnX, mainMenuReturnY, 50, 50);
  ellipse(mouseX, mouseY, 30,30);

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

  if(adFacebookBool == true){
    adFacebook();
  }
  if(adGoogleBool == true){
    adGoogle();
  }
  if(adIgBool == true){
    adInstagram();
  }

  imageMode(CENTER);
    image(mycursor,mouseX, mouseY, 100,100);

}
