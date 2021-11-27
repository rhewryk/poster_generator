function setup() {
	var c = createCanvas(1000,1000); // width and height in pixels
background(255)

stroke(0)
for(var i = 0;i<100; i++) {

}

}

function draw() {
	noStroke()
	fill(0)
	rRadius = random(50)+50
	ellipse(mouseX,mouseY,rRadius,rRadius)
}




function mousePressed() {
	saveCanvas("sketch=07","jpg")
}