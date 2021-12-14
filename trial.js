

let inp1;
let inp2;

const Y_AXIS = 1;
const X_AXIS = 2;
let c1 = inp1;
let c2 = inp2;

let textspecifications = 475
let t=0.1
let loopDuration = 2 * 60






function setup() {
  createCanvas(240, 360);
  background('white');
  noStroke();
  inp1 = createColorPicker('#ff0000');
  inp1.position(250, 475, height + 5);
  inp1.input(setShade1);
  inp2 = createColorPicker(color('yellow'));
  inp2.position(250, 525, height + 30);
  inp2.input(setShade2);
  setMidShade();

  // createCanvas(2400, 3600);

  createGraphics(width, height)



  noLoop();

}

function setMidShade() {
  // Finding a shade between the two
  let commonShade = lerpColor(inp1.color(), inp2.color(), 0.5);
  fill(commonShade);
  rect(5, 5, 230, 350);
}

function setShade1() {
  setMidShade();
  console.log('You are choosing shade 1 to be : ', this.value());
}
function setShade2() {
  setMidShade();
  console.log('You are choosing shade 2 to be : ', this.value());
}

function draw() {
  noStroke();
  fill(255);
  textSize(120);


}




// let font;

// function preload() {
//   font=loadFont('assets/InputMono-Medium.ttf');
// }















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