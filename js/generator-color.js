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

function setGradient(x, y, w, h, baseColor, complementary, axis) {
    noFill();

    if (axis === X_AXIS) {
        // left to right gradient
        for (let i = x; i <= x + w; i++) {
            let inter = map(i, x, x + w, 0, 1);
            let z = lerpColor(baseColor, complementary, inter);
            stroke(z);
            line(i, y, i, y + h);
        }
    }
}


function makePoster() {

  cr = $("#color_relations").val()
  // alert(cr)


//have to add lerpColor to the if statememt below. No sure how to integrate it with the additional function

if ($("#color_relations").val() == "COMPLEMENTARY") {

  createCanvas(2400, 1500);
  createGraphics(width, height);
  setGradient(0, 0, width / 2, height, baseColor, complementary, X_AXIS);
  noStroke()
  textAlign(LEFT);
  fill(baseColor);
  textSize(90);
  textLeading(100);
  text(s, 20, 20, 900, 900);
}

if ($("#color_relations").val() == "SPLIT COMPLEMENTARY") {
  createCanvas(2400, 1500);
  createGraphics(width, height);
  setGradient(0, 0, width / 2, height, splitComplementary3, splitComplementary2, X_AXIS);
  noStroke();
  textAlign(LEFT);
  fill(baseColor);
  textSize(90);
  textLeading(100);
  text(s, 20, 20, 900, 900);
}

if ($("#color_relations").val() == "ANALOGOUS") {
  createCanvas(2400, 1500);
  createGraphics(width, height);
  setGradient(0, 0, width / 2, height, analogous1, analogous3, X_AXIS);
  noStroke();
  textAlign(LEFT);
  fill(baseColor);
  textSize(90);
  textLeading(100);
  text(s, 20, 20, 900, 900);
}

if ($("#color_relations").val() == "TRIADIC") {
  createCanvas(2400, 1500);
  createGraphics(width, height);
  setGradient(0, 0, width / 2, height, triadic2, triadic3, X_AXIS);
  noStroke();
  textAlign(LEFT);
  fill(baseColor);
  textSize(90);
  textLeading(100);
  text(s, 20, 20, 900, 900);
}

if ($("#color_relations").val() == "TETRADIC") {
  createCanvas(2400, 1500);
  createGraphics(width, height);
  setGradient(0, 0, width / 2, height, complementary, tetradic2, X_AXIS);
  noStroke();
  textAlign(LEFT);
  fill(baseColor);
  textSize(90);
  textLeading(100);
  text(s, 20, 20, 900, 900);
}


}


// function draw() {
//     if (!valueFocused) {
//         value.value(picker.value());
//         update();

//     }


//     $("#COLOURS").change(function() {


//         //COMPLEMENTARY COLOR COMBOS

//         if ($(this).val() == "1") {
//             setGradient(0, 0, width / 2, height, c1, c2, X_AXIS);
//         }
//         if ($(this).val() == "2") {
//             setGradient(0, 0, width / 2, height, c6, c5, X_AXIS);
//         }
//         if ($(this).val() == "3") {
//             setGradient(0, 0, width / 2, height, c3, c4, X_AXIS);
//         }
//         if ($(this).val() == "4") {
//             setGradient(0, 0, width / 2, height, c2, c1, X_AXIS);
//         }
//         if ($(this).val() == "5") {
//             setGradient(0, 0, width / 2, height, c5, c6, X_AXIS);
//         }
//         if ($(this).val() == "6") {
//             setGradient(0, 0, width / 2, height, c4, c3, X_AXIS);
//         }


//         //ANALOGOUS COLOR COMBOS

//         if ($(this).val() == "7") {
//             setGradient(0, 0, width / 2, height, a1, a2, X_AXIS);
//         }
//         if ($(this).val() == "8") {
//             setGradient(0, 0, width / 2, height, a2, a3, X_AXIS);
//         }
//         if ($(this).val() == "9") {
//             setGradient(0, 0, width / 2, height, a3, a4, X_AXIS);
//         }
//         if ($(this).val() == "10") {
//             setGradient(0, 0, width / 2, height, a4, a5, X_AXIS);
//         }
//         if ($(this).val() == "11") {
//             setGradient(0, 0, width / 2, height, a5, a6, X_AXIS);
//         }
//         if ($(this).val() == "12") {
//             setGradient(0, 0, width / 2, height, a6, a1, X_AXIS);
//         }


//         //TRIADIC COLOR COMBOS

//         if ($(this).val() == "13") {
//             setGradient(0, 0, width / 2, height, t6, t4, X_AXIS);
//         }
//         if ($(this).val() == "14") {
//             setGradient(0, 0, width / 2, height, t2, t1, X_AXIS);
//         }
//         if ($(this).val() == "15") {
//             setGradient(0, 0, width / 2, height, t4, t5, X_AXIS);
//         }
//         if ($(this).val() == "16") {
//             setGradient(0, 0, width / 2, height, t1, t3, X_AXIS);
//         }
//         if ($(this).val() == "17") {
//             setGradient(0, 0, width / 2, height, t5, t6, X_AXIS);
//         }
//         if ($(this).val() == "18") {
//             setGradient(0, 0, width / 2, height, t3, t2, X_AXIS);
//         }

//     })
// }





$(".options").click(function() {
  $(".output").toggleClass("hidden");
});



// http://printingcode.runemadsen.com/examples/color/hsv_primary/index.html

// http://printingcode.runemadsen.com/lecture-color/#runecolor

// http://printingcode.runemadsen.com/lecture-color/#hsv-and-color-modes-in-runejs

// https://editor.p5js.org/simontoger/sketches/

// https://coolors.co/0c090d-e01a4f-f15946-f9c22e-53b3cb