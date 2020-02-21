var hue;
var rainbow = true;
var rate = 1;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  hue = 0;
}  

function draw() {
  // background(220);
}

function draw() {
	if (rainbow) {
    if (hue > 360) {
        hue = 0;
    } else {
        hue += rate;
    }
	}
  colorMode(HSL, 360);
  noStroke();
  fill(hue, 150, 230);
  ellipse(mouseX, mouseY, 200, 200);
}
