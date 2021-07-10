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
let fbScrollVid;
let googleTransitionVid;
let igTransitionVid;
let igScrollVid;

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

//AD images
let fbADback;
let fbAD;
let ggADback;
let ggAD;

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
  //ad images
  fbADback = loadImage("images/fbAD1.png");
  fbAD = loadImage("images/fbAD2.png");
  ggADback = loadImage("images/ggAD2.png");
  ggAD = loadImage ("images/ggAD1.png");
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
  fbTransitionVid.position (windowWidth/10,windowHeight/10);
  fbTransitionVid.style('width', '80%');
  fbTransitionVid.style('height', '70%');
  fbTransitionVid.hide();

  fbScrollVid = createVideo(['videos/fbscroll.mp4']);
  fbScrollVid.style('z-index', '2');
  fbScrollVid.position (windowWidth/20,windowHeight/3.5);
  fbScrollVid.style('width', '30%');
  fbScrollVid.style('height', '50%');
  fbScrollVid.hide();

  googleTransitionVid = createVideo(['videos/googleSPIN.mov']);
    googleTransitionVid.style('z-index', '2');
    googleTransitionVid.position (windowWidth/15,windowHeight/5);
    googleTransitionVid.style('width', '80%');
    googleTransitionVid.style('height', '70%');
    googleTransitionVid.hide();

  igTransitionVid = createVideo(['videos/igSPIN.mov']);
  igTransitionVid.style('z-index', '2');
  igTransitionVid.position (windowWidth/15,windowHeight/5);
  igTransitionVid.style('width', '80%');
  igTransitionVid.style('height', '70%');
  igTransitionVid.hide();

  igScrollVid = createVideo(['videos/igscroll.mp4']);
  igScrollVid.style('z-index', '2');
  igScrollVid.position (windowWidth/20,windowHeight/20);
  igScrollVid.style('width', '100%');
  igScrollVid.style('height', '100%');
  igScrollVid.hide();

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
  print(mainMenuBool)
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

  fbScrollVid.hide();
  igScrollVid.hide();
}

///needed to move the mouse pressed stuff in the mouseReleased function because that
//event is triggered once when the mouse button is released.

//If mousePressed is used, that will trigger as long as the mouse is pressed.
//Even if you press the mouse seemingly once, the code registers it multiple times
//because it's running at 60 fps, so when we clicked on the return menu ellipse,
//we were still technically pressing the mouse when it went to the main menu function,
//and then that mouse pressing immediately triggered the video transition for whatever menu image item was in
//the upper left corner.

function mouseReleased(){

  //check to see if the mouse is over the menu images
  if(mainMenuBool == true && dist(mouseX, mouseY, fbButtonX, fbButtonY)< 250){
    fbvideoTransition();

  }
  if(mainMenuBool == true && dist(mouseX, mouseY, googleButtonX, googleButtonY) < 250){
    googlevideoTransition();
  }
  if(mainMenuBool == true && dist(mouseX, mouseY, igButtonX,igButtonY) < 250){
    igvideoTransition();
  }

  //since you are using the same menu object in each of the scenes,
  //you only need to call it once here
  if(dist(mouseX, mouseY, mainMenuReturnX, mainMenuReturnY)< 25){
    menuButtons();
    //reset the main menu to black background
    background(0);

  }
}

//make one for each F,G,I
function fbvideoTransition(){
  //backgroundcolor
  background(255,128,0);
  //make sure proper booleans are flipped
  mainMenuBool = false;


  //show the video and play it
  fbTransitionVid.show();
  fbTransitionVid.style('display', 'inline');
  fbTransitionVid.play();

  //when the video has ended, trigger the asPref1 function
  fbTransitionVid.onended(adFacebook);
}

function googlevideoTransition(){

  background(240,47,47);

  //make sure proper booleans are flipped
  mainMenuBool = false;


  //show the video and play it
  googleTransitionVid.show();
  googleTransitionVid.style('display', 'inline');
  googleTransitionVid.play();

  //when the video has ended, trigger the asPref1 function
  googleTransitionVid.onended(adGoogle);
}
function igvideoTransition(){

//  background(240,204,85);
  //make sure proper booleans are flipped
  mainMenuBool = false;
background(240,204,85);

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
  adFacebookBool = true;
  adGoogleBool = false;
  adIgBool = false;

  background(255);

  image(fbADback, windowWidth/2, windowHeight/2,windowWidth,windowHeight);
  imageMode(CENTER);
  image(fbAD, windowWidth/2, windowHeight/2,windowWidth/2,windowHeight/2);

  fbScrollVid.show();
  fbScrollVid.style('display', 'inline');
  fbScrollVid.play();
  fbScrollVid.loop();

  fill(255,0,0,);
  ellipse(mainMenuReturnX, mainMenuReturnY, 100, 100);
  fill(0,255,0);
    text("MAIN MENU", 50, 65);
  ellipse(mouseX, mouseY, 55,55);


  //check to see if the mouse is over the return menu ellipse, if it is and mouse
  //is pressed return to the main menu

}

function adGoogle(){
  //hide the video
  googleTransitionVid.hide();

  //make sure proper booleans are flipped

  adGoogleBool = true;
  adFacebookBool = false;
  adIgBool = false;

  image(ggADback, windowWidth/2, windowHeight/2,windowWidth,windowHeight);
  imageMode(CENTER);
  image(ggAD, windowWidth/2, windowHeight/2,windowWidth,windowHeight);

  fill(255,0,0,);
  ellipse(mainMenuReturnX, mainMenuReturnY, 100, 100);
  fill(0,255,0);
    text("MAIN MENU",0, 65);
  ellipse(mouseX, mouseY, 55,55);


  //check to see if the mouse is over the return menu ellipse, if it is and mouse
  //is pressed return to the main menu

}


function adInstagram(){
  //hide the video
  igTransitionVid.hide();

  //make sure proper booleans are flipped
  adIgBool = true;
  adFacebookBool = false;
  adGoogleBool = false;

  igScrollVid.show();
  igScrollVid.style('display', 'inline');
  igScrollVid.play();

  fill(255,0,0,);
  ellipse(mainMenuReturnX, mainMenuReturnY, 100, 100);
  fill(0,255,0);
    text("MAIN MENU",0, 65);
  ellipse(mouseX, mouseY, 55,55);

  //check to see if the mouse is over the return menu ellipse, if it is and mouse
  //is pressed return to the main menu

}

function draw() {
  fill(45, 212, 36);
  textSize(20);
    text("CLICK ON A LETTER",windowWidth*2/3, windowHeight/2);
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
