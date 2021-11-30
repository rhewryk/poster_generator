const barWidth = 10;
let lastBar = -1;

function setup() {
  createCanvas(800, 800);
  colorMode(HSB, height, height, height);
  //colorMode(HSB, HSB, height, height);  this turns into black and when the mouse oves it turns white
  noStroke();
  background(0);
}

function draw() {
  let whichBar = mouseX / barWidth;
  if (whichBar !== lastBar) {
    let barX = whichBar * barWidth;
    fill(mouseY, height, height);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
  }
}





















//https://editor.p5js.org/p5/sketches/Color:_Hue