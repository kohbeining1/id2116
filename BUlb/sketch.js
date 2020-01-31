let bulbOn;
let bulbOff;

let brightness = 1

function setup() 
{
  createCanvas(400, 400);
  bulbOn =           loadImage("images/bulb_on.png");
  bulbOff = loadImage("images/bulb_off.png");
}
  
function draw() {
  background(220);
  imageMode(CENTER)
  
  if(brightness == 1){
  image(bulbOn,width/2,height/2,300,300);
  }else{
  image(bulbOff,width/2,height/2,300,300);
  }
  
}

function mousePressed(){
    on();
}

function mouseReleased(){
  off();
}

function on(){
  brightness = 1;
  print("bulb is on!");
}

function off(){
  brightness = 0;
  print("bulb is off!");
}