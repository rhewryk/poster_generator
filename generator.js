

const Y_AXIS = 1;
const X_AXIS = 2;
let p1, p2, p3;
let c1, c2, c3, c4, c5, c6;

function setup() {
  createCanvas(200, 300);
  textSize(120);
  // textAlign(CENTER);





//complementary colors
c1 = color(237, 28, 36) //red
c2 = color(0, 166, 81) //green

c3 = color(255, 242, 0) //yellow
c4 = color(127, 63, 152) //violet

c5 = color(0, 128, 255) //blue(lighter)
c6 = color(242, 101, 34) //orange


//analogous colors
a1 = c1 //red
a2 = c6 //orange
a3 = c3 //yellow

a2
a3
a4 = c2 //green

a3
a4
a5 = c5 //blue (lighter)

a4
a5
a6 = c4 //violet

a5
a6
a1

a6
a1
a2


//triadic 
t1 = a4 //green
t2 = a2 //orange
t3 = a6 //violet

t4 = a3 //yellow
t5 = a5 //blue (lighter)
t6 = a1 //red


//tetradic
te1 = c1, c2, c3, c4
te2 = c1, c2, c5, c6
te3 = c5, c6, c3, c4


//split-complementary



  noLoop();
}

function draw() {


$("#COLOR").change(function(){


//COMPLEMENTARY COLOR COMBOS

  if ( $(this).val() == "1") {
    setGradient(0, 0, width / 2, height, c1, c2, X_AXIS);
  }
  if ( $(this).val() == "2") {
    setGradient(0, 0, width / 2, height, c6, c5, X_AXIS);
  }
   if ( $(this).val() == "3") {
    setGradient(0, 0, width / 2, height, c3, c4, X_AXIS);
  }
  if ( $(this).val() == "4") {
    setGradient(0, 0, width / 2, height, c2, c1, X_AXIS);
  }
  if ( $(this).val() == "5") {
    setGradient(0, 0, width / 2, height, c5, c6, X_AXIS);
  }
  if ( $(this).val() == "6") {
    setGradient(0, 0, width / 2, height, c4, c3, X_AXIS);
  }


//ANALOGOUS COLOR COMBOS

  if ( $(this).val() == "7") {
    setGradient(0, 0, width / 2, height, a1, a2, X_AXIS);
  }
  if ($(this).val() == "8") {
    setGradient(0, 0, width / 2, height, a2, a3, X_AXIS);
  }
  if ($(this).val() == "9") {
    setGradient(0, 0, width / 2, height, a3, a4, X_AXIS);
  }
  if ($(this).val() == "10") {
    setGradient(0, 0, width / 2, height, a4, a5, X_AXIS);
  }
  if ($(this).val() == "11") {
    setGradient(0, 0, width / 2, height, a5, a6, X_AXIS);
  }
  if ($(this).val() == "12") {
    setGradient(0, 0, width / 2, height, a6, a1, X_AXIS);
  }


//TRIADIC COLOR COMBOS

  if ($(this).val() == "13") {
    setGradient(0, 0, width / 2, height, t6, t4, X_AXIS);
  }
  if ($(this).val() == "14") {
    setGradient(0, 0, width / 2, height, t2, t1, X_AXIS);
  }
  if ($(this).val() =="15") {
    setGradient(0, 0, width / 2, height, t4, t5, X_AXIS);
  }
  if ($(this).val() =="16") {
    setGradient(0, 0, width / 2, height, t1, t3, X_AXIS);
  }
  if ($(this).val() =="17") {
    setGradient(0, 0, width / 2, height, t5, t6, X_AXIS);
  }
  if ($(this).val() =="18") {
    setGradient(0, 0, width / 2, height, t3, t2, X_AXIS);
  }


// textAlign(BOTTOM);
let margin = 20;
let gap = 100;
let counter = 35;
let fill = 255;
noFill();
stroke(255);
//TETRADIC COLOR COMBOS

  // if ($(this).val() == "19") {
  //   setGradient(0, 0, width / 2, height, )
  // }

})
}





function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === X_AXIS) { 
    // left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y +h);
    }
  }
  text(c1, 400, 100);
  text(c2, 200, 100);
  text(t3, 600, 100);


}













                  //PRIMARY COLOR COMBINATIONS:
                     
                     // setGradient(0, 0, width / 2, height, p2, p3, X_AXIS);
                     // setGradient(0, 0, width / 2, height, p3, p1, X_AXIS);
  // setGradient(width / 2, 0, width / 2, height, c2, c1, X_AXIS);
  // foreground
  // setGradient(50, 90, 540, 80, c1, c2, Y_AXIS);
  // setGradient(50, 190, 540, 80, c2, c1, X_AXIS); 
  // $(document).click('PRIMARY', function(){
  //   t = $(this).val(0)
  //   // c5 = color(255,0,0)
  //   // c6 = color(0,0,255)
  //   setGradient(0, 0, width / 2, height. p1, p2. X_AXIS)

  //   })


//   if ( $(this).val() == "2") {
//     setGradient(0, 0, width / 2, height, c1, c2, X_AXIS);
//   }


//   if ( $(this).val() == "3") {
//     setGradient(0, 0, width / 2, height, c3, c4, X_AXIS);
//   }
// });




  // $(document).click("COLOR", function(){
  //   t = $(this).val("split complementary")
  //   c5 = color(255,0,0)
  //   c6 = color(0,0,255)
  //   setGradient(0, 0, width / 2, height, c5, c6, X_AXIS);
  // })


// $(document).ready(function() {
//   if (!$("#COLOR option:selected").length) {
//     $("#COLOR option[value='1']").click(console.log("hello"));
//   }
// });





































// const objects = [];
// let eyeZ;

// function setup() {
//   createCanvas(710, 400, WEBGL);

//   eyeZ = height / 2 / tan((30 * PI) / 180); // The default distance the camera is away from the origin.

//   objects.push(new IntersectPlane(1, 0, 0, -100, 0, 0)); // Left wall
//   objects.push(new IntersectPlane(1, 0, 0, 100, 0, 0)); // Right wall
//   objects.push(new IntersectPlane(0, 1, 0, 0, -100, 0)); // Bottom wall
//   objects.push(new IntersectPlane(0, 1, 0, 0, 100, 0)); // Top wall
//   objects.push(new IntersectPlane(0, 0, 1, 0, 0, 0)); // Back wall

//   noStroke();
//   ambientMaterial(250);
// }

// function draw() {
//   background(0);

//   // Lights
//   pointLight(255, 255, 255, 0, 0, 400);
//   ambientLight(244, 122, 158);

//   // Left wall
//   push();
//   translate(-100, 0, 200);
//   rotateY((90 * PI) / 180);
//   plane(400, 200);
//   pop();

//   // Right wall
//   push();
//   translate(100, 0, 200);
//   rotateY((90 * PI) / 180);
//   plane(400, 200);
//   pop();

//   // Bottom wall
//   push();
//   translate(0, 100, 200);
//   rotateX((90 * PI) / 180);
//   plane(200, 400);
//   pop();

//   // Top wall
//   push();
//   translate(0, -100, 200);
//   rotateX((90 * PI) / 180);
//   plane(200, 400);
//   pop();

//   plane(200, 200); // Back wall

//   const x = mouseX - width / 2;
//   const y = mouseY - height / 2;

//   const Q = createVector(0, 0, eyeZ); // A point on the ray and the default position of the camera.
//   const v = createVector(x, y, -eyeZ); // The direction vector of the ray.

//   let intersect; // The point of intersection between the ray and a plane.
//   let closestLambda = eyeZ * 10; // The draw distance.

//   for (let x = 0; x < objects.length; x += 1) {
//     let object = objects[x];
//     let lambda = object.getLambda(Q, v); // The value of lambda where the ray intersects the object

//     if (lambda < closestLambda && lambda > 0) {
//       // Find the position of the intersection of the ray and the object.
//       intersect = p5.Vector.add(Q, p5.Vector.mult(v, lambda));
//       closestLambda = lambda;
//     }
//   }

//   // Cursor
//   push();
//   translate(intersect);
//   fill(237, 34, 93);
//   sphere(10);
//   pop();
// }

// // Class for a plane that extends to infinity.
// class IntersectPlane {
//   constructor(n1, n2, n3, p1, p2, p3) {
//     this.normal = createVector(n1, n2, n3); // The normal vector of the plane
//     this.point = createVector(p1, p2, p3); // A point on the plane
//     this.d = this.point.dot(this.normal);
//   }

//   getLambda(Q, v) {
//     return (-this.d - this.normal.dot(Q)) / this.normal.dot(v);
//   }
// }





































//  THIS IS TO MAKE THE CIRCLE AND HAVE IT FOLLOW YOUR MOUSE. IT IS ALL IN BLACK AND WHITE

// function setup() {
//   createCanvas(400, 400);

// }

// function draw() {
//   if (mouseIsPressed) {
//     fill(0);
//   } else {
//     fill(255);
//   }
//   ellipse(mouseX, mouseY, 80, 80);
// }







































// var textfield;
// var output;

// let pg
// let font
// let rgba = ['rgba(255, 05, 100, .7)', 'rgba(100, 95, 70, 0.9)', 'rgba(0, 200, 255, 1)']

// let posOffset = 10
// let sizeOffset = 60
// let tiles = 100
// let tileSize
// let loopDuration = 2 * 60
// let textsource = $("#posterText").val()
// let textspecifications = 475 //$("#sizeText").val()
// let t=0.1

// function preload() {
//   font = loadFont('InputMono-Regular.ttf')
// }

// function setup() {
//   createCanvas(2400, 3600)
  
                    //textfield = $("#posterTex)
                    //textfield.changed(newText);
//   $("#posterText").keyup(newTyping);

// $(document).on('input', '#amplitude', function() {
//   t = $(this).val() /500
//   newTyping();
// });

// $(document).on('input', '#sizeText', function() {
//  textspecifications = parseInt($(this).val());
//  newTyping();
// });

//   pg = createGraphics(width, height)
//   pg.textFont(font)
//   //pg.textAlign(CENTER, CENTER)
//   pg.blendMode(SCREEN)
//   //pg.translate(width / 1.9, height / 1.7)
//   pg.textSize(textspecifications)
//   pg.textLeading(textspecifications)
//   pg.fill(rgba[0])
//   pg.text(textsource, -5, -5, width, height)
//   pg.fill(rgba[1])
//   pg.text(textsource, 0, 0, width, height)
//   pg.fill(rgba[2])
//   pg.text(textsource, 3, 4, width, height)

//   tileSize = height / tiles

// newTyping()
// }

// function newTyping() {
//   console.log(textspecifications)
//   textsource = $("#posterText").val()
  
//   pg = createGraphics(width, height)
//   pg.textFont(font)
//   //pg.textAlign(CENTER, CENTER)
//   pg.blendMode(SCREEN)
//   //pg.translate(width / 1.9, height / 1.7)
//   pg.textSize(textspecifications)
//   pg.textLeading(textspecifications)
//   pg.fill(rgba[0])
//   pg.text(textsource, -5, -5, width, height)
//   pg.fill(rgba[1])
//   pg.text(textsource, 0, 0, width, height)
//   pg.fill(rgba[2])
//   pg.text(textsource, 4, 4, width, height)

//   tileSize = height / tiles

//   background('rgba(0, 0, 0, 2)')

  //let currentFrame = frameCount % loopDuration
  //let currentFrame = 5
  //let t = currentFrame / loopDuration
  //let t = 0.1
//   let u = map(t, 0, 1, 0, PI)

//   for (let y = 0; y < tiles; y++) {
//     for (let x = 0; x < tiles; x++) {
      
//       const waveX = sin(0.0025 * ( x * y )) * 100
//       const waveY = atan(0.005 * ( x * y )) * 100
      
//       const sx = x * tileSize + waveX * sin(u)
//       const sy = y * tileSize + waveY * sin(u)
//       const sw = tileSize
//       const sh = tileSize 

//       const dx = x * tileSize 
//       const dy = y * tileSize
//       const dw = tileSize
//       const dh = tileSize
      
//       image(pg, dx, dy, dw, dh, sx, sy, sw, sh)
//     }
//   }
// }


// $("#keep").click(function(){
//   saveCanvas("poster","jpg")
// })


















// var textfield;
// var output;


// const red = color(255, 35, 35);
// const blue = colorr(35, 35, 255);
// const yellow = color(255, 255, 107);



// const barWidth = 10;
// let lastBar = -1;


// let pg
// let font
// let rgba = ['rgba(255, 05, 100, 10)', 'rgba(100, 95, 70, 10)', 'rgba(0, 150, 250, 2)']


// let tiles = 100
// let tileSize
// let textsource = $("#inputText").val()
// let textspecifications = 475 //$("sizeText").val()
// let t=0.1

// function preload() {
//   font = loadFont('InputMono-Regular.ttf')
// }

// function setup() {
//   createCanvas(2400, 3600)
// }

// $("#inputText").keyup(newTyping);









// const barWidth = 10;
// let lastBar = -1;

// function setup() {
//   createCanvas(800, 800);
//   colorMode(HSB, height, height, height);
//   //colorMode(HSB, HSB, height, height);  this turns into black and when the mouse oves it turns white
//   noStroke();
//   background(0);
// }

// function draw() {
//   let whichBar = mouseX / barWidth;
//   if (whichBar !== lastBar) {
//     let barX = whichBar * barWidth;
//     fill(mouseY, height, height);
//     rect(barX, 0, barWidth, height);
//     lastBar = whichBar;
//   }
// }





















//https://editor.p5js.org/p5/sketches/Color:_Hue