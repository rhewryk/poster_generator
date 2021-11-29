var textfield;
var output;


function setup() {
	noCanvas();
	textfield = createInput("enter your favorite icecream flavor");
	textfiled.changed(newText);
	textfield.input(newTyping);
	output = select('#output');

}



function newTyping() {
	output.html(textfield.value());

}




function newText()  {
	createP(textfield.value());

}














// the coding train


















// function setup() {
// 	createCanvas(400,400);
// }


// function draw() {
// 	background(220);
// }





// /*
//  * @name Sine
//  * @description Smoothly scaling size with the sin() function.
//  */
// let diameter;
// let angle = 0;

// function setup() {
//   createCanvas(710, 400);
//   diameter = height - 10;
//   noStroke();
//   fill(255, 204, 0);
// }

// function draw() {
//   background(0);

//   let d1 = 10 + (sin(angle) * diameter) / 2 + diameter / 2;
//   let d2 = 10 + (sin(angle + PI / 2) * diameter) / 2 + diameter / 2;
//   let d3 = 10 + (sin(angle + PI) * diameter) / 2 + diameter / 2;

//   ellipse(0, height / 2, d1, d1);
//   ellipse(width / 2, height / 2, d2, d2);
//   ellipse(width, height / 2, d3, d3);

//   angle += 0.02;
// }
