let picker;
let value;
let valueFocused = false;
let colorDiv;


const Y_AXIS = 1;
const X_AXIS = 2;
let p1, p2, p3;
let c1, c2, c3, c4, c5, c6;
let a1, a2, a3, a4, a5, a6;
let c;
let s = 'cyan magenta yellow black red green blue analogous complementary split-complementary triadic tetradic';
let textspecifications = 475
let t = 0.1
let loopDuration = 2 * 60


let tiles = 100
let tileSize

let baseColor;
let analogous1;
let analogous3;
let complementary;
let splitComplementary2;
let splitComplementary3;
let triadic2;
let triadic3;
let tetradic2;
let square2;
let square4;





function setup() {

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

    update();
    makePoster();
}


$("#picker").change(function(){
  update();
  makePoster();
})


$("#color_relations").change(function(){
  update();
  makePoster();
})


function update() {
    
    colorMode(HSB);

    baseColor = color($("#picker").val());

    analogous1 = color((hue(baseColor) + 330) % 360, saturation(baseColor), brightness(baseColor));
    analogous3 = color((hue(baseColor) + 30) % 360, saturation(baseColor), brightness(baseColor));

    complementary = color((hue(baseColor) + 180) % 360, saturation(baseColor), brightness(baseColor));

    splitComplementary2 = color((hue(baseColor) + 150) % 360, saturation(baseColor), brightness(baseColor));
    splitComplementary3 = color((hue(baseColor) + 210) % 360, saturation(baseColor), brightness(baseColor));

    triadic2 = color((hue(baseColor) + 120) % 360, saturation(baseColor), brightness(baseColor));
    triadic3 = color((hue(baseColor) + 240) % 360, saturation(baseColor), brightness(baseColor));
    tetradic2 = color((hue(baseColor) + 60) % 360, saturation(baseColor), brightness(baseColor));

    square2 = color((hue(baseColor) + 90) % 360, saturation(baseColor), brightness(baseColor));
    square4 = color((hue(baseColor) + 270) % 360, saturation(baseColor), brightness(baseColor));



    $("#analogous1").css("background", analogous1);
    $("#analogous2").css("background", baseColor);
    $("#analogous3").css("background", analogous3);

    $("#complementary1").css("background", baseColor);
    $("#complementary2").css("background", complementary);

    $("#split-complementary1").css("background", baseColor);
    $("#split-complementary2").css("background", splitComplementary2);
    $("#split-complementary3").css("background", splitComplementary3);

    $("#triadic1").css("background", baseColor);
    $("#triadic2").css("background", triadic2);
    $("#triadic3").css("background", triadic3);
    $("#tetradic1").css("background", baseColor);
    $("#tetradic2").css("background", tetradic2);
    $("#tetradic3").css("background", complementary);
    $("#tetradic4").css("background", triadic3);
}

function setGradient(x, y, w, h, baseColor, complementary) {
    noFill();

        for (let i = x; i <= x + w; i++) {
            let inter = map(i, x, x + w, 0, 1);
            let z = lerpColor(baseColor, complementary, inter);
            stroke(z);
            line(i, y, i, y + h);
        }
    }


function makePoster() {

  cr = $("#color_relations").val()

  createCanvas(1200, 1800);
  createGraphics(width, height);
  textSize(130);
  textLeading(120);

if (cr== "COMPLEMENTARY") {
  colorMode(RGB);
  setGradient(0, 0, width, height, baseColor, complementary);
  noStroke()
  textAlign(LEFT);
  fill(complementary);
  textSize(200);
  text(s, 15, 20, 900, 900);
  fill(baseColor);
  textSize(300);
  text(s, 50, 145, 910, 800);
}

if (cr== "SPLIT COMPLEMENTARY") {
  setGradient(0, 0, width, height, splitComplementary3, splitComplementary2);
  noStroke();
  textAlign(LEFT);
  fill(baseColor);
  text(s, 50, 50, 50, 800);
  text(s, 400, 655, 90, 3700);
  textSize(170);
  fill(splitComplementary2);
  text(s, 100, 55, 830, 500);
  text(s, 300, 505, 50, 3600);
  textSize(200);
  fill(splitComplementary3);
  text(s, 50, 70, 900, 800);
}

if (cr== "ANALOGOUS") {
  colorMode(RGB);
  setGradient(0, 0, width, height, analogous1, baseColor);
  noStroke();
  textAlign(LEFT);
  fill(baseColor);
  text(s, 50, 20, 900, 900);
  text(s, 800, 300, 10, 3900);
  fill(analogous1)
  text(s, 25, 105, 1500, 1000);
  text(s, 100, 450, 100, 2800);
}

if (cr== "TRIADIC") {
  colorMode(RGB);
  setGradient(0, 0, width, height, triadic2, triadic3);
  noStroke();
  textAlign(LEFT);
  fill(baseColor);
  textSize(100);
  text(s, 20, 20, 900, 900);
  text(s, 100, 100, 1600, 1800);
  text(s, 600, 550, 1400, 2000);
  text(s, 10, 800, 900, 2500);
  text(s, 500, 1000, 900, 2500);
  fill(triadic2);
  textSize(500);
  textLeading(260);
  text(s, 10, 300, 900, 800);
  fill(triadic3);
  textSize(300);
  text(s, -170, -100, 1000, 2000);

}

if (cr== "TETRADIC") {
  colorMode(RGB);
  setGradient(0, 0, width, height, complementary, tetradic2);
  noStroke();
  textAlign(LEFT);
  fill(baseColor);
  text(s, 20, 20, 900, 900);
  fill(complementary)
  textSize(200);
  text(s, 80, 200, 1700, 1200);
  fill(tetradic2);
  textSize(500);
  text(s, 200, 350, 4200, 2000);
  fill(triadic3);
  textSize(400);
  textLeading(200);
  text(s, 400, 400, 2000, 500);
  text(s, 0, 0, 1900, 2200);

}


}





$(".options").click(function() {
  $(".output").toggleClass("hidden");
});



// http://printingcode.runemadsen.com/examples/color/hsv_primary/index.html

// http://printingcode.runemadsen.com/lecture-color/#runecolor

// http://printingcode.runemadsen.com/lecture-color/#hsv-and-color-modes-in-runejs

// https://editor.p5js.org/simontoger/sketches/

// https://coolors.co/0c090d-e01a4f-f15946-f9c22e-53b3cb