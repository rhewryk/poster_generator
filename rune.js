
//TETRADIC

var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 400,
  debug: true
});

var square1 = r.rect(0, 0, 200, r.height).fill('hsv', 0, 100, 100).stroke(false);
var square2 = square1.copy().move(200, 0).fill('hsv', 90, 100, 100);
var square3 = square1.copy().move(400, 0).fill('hsv', 180, 100, 100);
var square4 = square1.copy().move(600, 0).fill('hsv', 270, 100, 100);

// If we want to be fancy, we can change the base hue
// by moving the mouse around.
r.on('mousemove', function(mouse) {
  var hue = (mouse.x / r.width) * 360;
  square1.fill('hsv', hue, 100, 100);
  square2.fill('hsv', hue + 90, 100, 100);
  square3.fill('hsv', hue + 180, 100, 100);
  square4.fill('hsv', hue + 270, 100, 100);
});

r.play();




// let colorPicker;

// function setup() {
//   createCanvas(240, 360);
//   colorPicker = createColorPicker('#ed225d');
//   colorPicker.position(300, 200, width + 5);

// }

// function draw() {
//   background(colorPicker.value());


// }






// // function setup() {
// 	createCanvas(100, 100);
// 	background('white');
// 	inp = createColorPicker('#ff0000');
// 	inp.position(0, height + 5);
// 	inp.input(setShade1);
// 	inp = createColorPicker(color('yellow'));
// 	inp2.position(0, height + 30);
// 	inp.input(setShade2);
// 	setMidShade();
// }

// function setMidShade() {
// 	//Finding a shade between the two
// 	let commonShade = lerpColor(inp1.color(),
// 		inp2.color(), 0.5);
// 	fill(commonShade);
// 	rect(20, 20, 60, 60);
// }

// function setShade1() {
// 	setMidShade();
// 	console.log('Shade 1 is : ', this.value());
// }

// function setShade2() {
// 	setMidShade();
// 	console.log('Shade 2 is : ', this.value());
// }