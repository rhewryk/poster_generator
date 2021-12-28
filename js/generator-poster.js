








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
// let margin = 20;
// let gap = 100;
// let counter = 35;
// let fill = 255;
// noFill();
// stroke(255);
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

  noStroke();


textAlign(LEFT);
fill(c1);
text("magenta",50,50);
fill(c2);
text("green",50 ,50);


  // fill(255);
  textSize(125);
text(s, 10, 10, 200, 900);
  // text(c1, 400, 100);
  // text(c2, 200, 100);
  // text(t3, 600, 100);


textAlign(LEFT);
fill(c1);
text("magenta",70,50);
 textSize(115);
text(s, 30, 10, 300, 700);



textAlign(LEFT);
fill(c1);
text("magenta",40,50);
 textSize(130);
text(s, 10, 10, 200, 1000);



textAlign(LEFT);
fill(c2);
text("magenta",10,10);
 textSize(90);
text(s, 20, 20, 900, 900);

}










