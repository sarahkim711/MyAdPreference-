
let button;

let fb;
let google;
let ig;
let backgroundimg;

let backgroundimgX =0
let backgroundimgY =0
let fbposX=0
let fbposY=0
let fbposYspeed = 3;
let googleposX =0
let googleposY = 0
let googleposYspeed = 3;
let googleposXspeed = 3;
let igposX = 0
let igpoxY = 0
let igposYspeed = 3;



function preload(){ ///////////////////////////////////////////////////

  fb = loadImage("images/fb1swirl.png");
  google = loadImage("images/g2swirl.png");
  ig = loadImage("images/ig3swirl.png");
  backgroundimg = loadImage ("images/backgroundswirl.png");
}

function setup(){ ///////////////////////////////////////////////////
  createCanvas(windowWidth,windowHeight);
  imageMode(CENTER);
  //define image x,y positions
  backgroundimgX = windowWidth/2
  backgroundimgY = windowHeight/2
  fbposX=windowWidth/6
  fbposY=windowHeight/2
  googleposX = random(windowWidth);
  googleposY = random(windowHeight);
  // googleposX = windowWidth/2
  // googleposY = windowHeight/2
  igposX = windowWidth/1.2
  igposY= windowHeight/2



}


function draw(){ ///////////////////////////////////////////////////
  image (backgroundimg,backgroundimgX, backgroundimgY, windowWidth,windowHeight);
  //IMAGES DRAWN 1,2,3
  //  image(fb, windowWidth/6, windowHeight/2,250,250);
  image(fb, fbposX, fbposY,250,250);
  //image(google, windowWidth/2,windowHeight/2, 250,250);
  image(google, googleposX,googleposY, 250,250);
  //image(ig, windowWidth/1.2,windowHeight/2, 250,250);
  image(ig, igposX,igposY, 250,250)


  //animating IMAGES
  //FACEBOOOOk
    if (fbposY > windowHeight || fbposY < 0){
      fbposYspeed= fbposYspeed * -1;
    }
  fbposY = fbposY + fbposYspeed;
  fbposX = fbposX + random(-10,10);



  //GOOOGLEEEEE
  if (googleposY > windowHeight || googleposY < 0){
    googleposYspeed= googleposYspeed * -1;
  }
  if (googleposX > windowWidth || googleposX < 0){
    googleposXspeed= googleposXspeed * -1;
  }
  googleposY = googleposY - googleposYspeed;
  googleposX = googleposX - googleposXspeed;
  //googleposX = googleposX + random(-.8,10);
  //googleposY = googleposY + random(-.8,.8);





  //INSTAGRAMMMMM
  if (igposY > windowHeight || igposY < 0){
    igposYspeed= igposYspeed * -1;
  }

igposY = igposY + igposYspeed;
  igposX = igposX + random(-.8,.8);
  //igposY = igposY + random(-.8,.8);



}


//when window is resized fixing!!!
function windowResized(){ ///////////////////////////////////////////////////
  resizedCanvas(windowWidth, windowHeight);
}
