let picker;
let value;
let valueFocused = false;
let colorDiv;





function setup() {
  noCanvas();

    value = select("#hex-code");
    picker = select("#picker");
    colorDiv = select("#color");
    value.changed(() => {
      picker.value(value.value());
      update();
  });

    value.elt.onfocus = () => valueFocused = true;
    value.elt.onblur  = () => valueFocused = false;
}


function update() {
  colorDiv.style("background", picker.value());
  colorMode(HSB);

      const baseColor           = color(picker.value());

      const analogous1          = color((hue(baseColor) + 330) % 360, saturation(baseColor), brightness(baseColor));
      const analogous3          = color((hue(baseColor) +  30) % 360, saturation(baseColor), brightness(baseColor));

      const complementary       = color((hue(baseColor) + 180) % 360, saturation(baseColor), brightness(baseColor));

      const splitComplementary2 = color((hue(baseColor) + 150) % 360, saturation(baseColor), brightness(baseColor));
      const splitComplementary3 = color((hue(baseColor) + 210) % 360, saturation(baseColor), brightness(baseColor));

      const triadic2            = color((hue(baseColor) + 120) % 360, saturation(baseColor), brightness(baseColor));
      const triadic3            = color((hue(baseColor) + 240) % 360, saturation(baseColor), brightness(baseColor));
      const tetradic2           = color((hue(baseColor) +  60) % 360, saturation(baseColor), brightness(baseColor));

      const square2             = color((hue(baseColor) +  90) % 360, saturation(baseColor), brightness(baseColor));
      const square4             = color((hue(baseColor) + 270) % 360, saturation(baseColor), brightness(baseColor));


  select("#analogous1").style("background", analogous1);
  select("#analogous2").style("background", baseColor);
  select("#analogous3").style("background", analogous3);

  select("#complementary1").style("background", baseColor);
  select("#complementary2").style("background", complementary);

  select("#split-complementary1").style("background", baseColor);
  select("#split-complementary2").style("background", splitComplementary2);
  select("#split-complementary3").style("background", splitComplementary3);

  select("#triadic1").style("background", baseColor);
  select("#triadic2").style("background", triadic2);
  select("#triadic3").style("background", triadic3);
  select("#tetradic1").style("background", baseColor);
  select("#tetradic2").style("background", tetradic2);
  select("#tetradic3").style("background", complementary);
  select("#tetradic4").style("background", triadic3);
}



function draw() {
  if (!valueFocused) {
    value.value(picker.value());
    update();

  }
}







// http://printingcode.runemadsen.com/examples/color/hsv_primary/index.html

// http://printingcode.runemadsen.com/lecture-color/#runecolor

// http://printingcode.runemadsen.com/lecture-color/#hsv-and-color-modes-in-runejs

// https://editor.p5js.org/simontoger/sketches/

// https://coolors.co/0c090d-e01a4f-f15946-f9c22e-53b3cb