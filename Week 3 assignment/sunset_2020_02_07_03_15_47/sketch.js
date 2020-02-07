let sunsetOn;
let sunsetOff;
  
let sunset = 0;

function setup() {
  createCanvas(560, 1000);
  
  sunsetOn = loadImage("images/sunset_on.jpg");
  sunsetOff = loadImage("images/sunset_off.png");
}
function draw() {
  background(220);

  imageMode(CENTER);
   
if(sunset == 1){
    image(sunsetOn,width/2,height/2,560,1000);
}else{
    image(sunsetOff,width/2,height/2,560,1000);
}
}
  
function on(){
  sunset = 1;
    print("the sunset is on!")
}
  
function off(){
  sunset = 0;
    print("the sunset is off!")
}

function mousePressed(){
  on();
}

function mouseReleased(){
  off();
}