
var graphics;
var r;
var g;
var b;
var intro = true;
var shape;
let cube;
let instructions;
let voice;

function preload() {
cube = loadImage('assets/cube.png');
instructions = loadImage('assets/instructions.png')

}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
    graphics = createGraphics(300, 300);
    graphics.background("red");
  angleMode(DEGREES);
  capture = createCapture(VIDEO);
  capture.hide()
  r = Math.round(random(255));
  g = Math.round(random(255));
  b = Math.round(random(255));

voice = new p5.Speech();

  voice.start;
  voice.setPitch(0.8);
  voice.setRate(0.8)


}



function draw() {

  if (intro) {
    background(16,15,34)
image(cube, -300, -500, 600, 600)
image(instructions, -500, 180, 1000*1.2, 200*1.2)
document.getElementById("instructions").style.visibility = "hidden";
document.getElementById("param").style.visibility = "hidden";


  }

  if (!intro) {
  background(r,g,b);

  var minus = -2;
  camera( minus + mouseX/80 , minus + mouseY/80, 100, 0, 0, 0, 0, 1, 0);

  for (var i = 0; i < graphics.height; i += 10) {
    graphics.fill(255);
    graphics.image(capture, 0, 0, 300, 300)
  }

  ambientLight(r,g,b);

  stroke(0);
  texture(graphics);
  rotateY(0);
  rotateX(0)
  shape = box(150);
  translate(300, 0, 0);

  if (keyIsDown(82)) {
    if (keyIsDown(UP_ARROW)) {
      r += 5;
      if (r >= 255) {
        r = 255;
      }
      r = Math.round(r)
      voice.speak('red increases');
      voice.stop();
    } else if (keyIsDown(DOWN_ARROW)) {
        r -= 5;
        if (r <= 0) {
          r = 0
        }
        r = Math.round(r)
        voice.speak('red decreases');
        voice.stop();
      }
  console.log('r ',r)

  }

  if (keyIsDown(71)) {
    if (keyIsDown(UP_ARROW)) {
      g += 5;
      if (g >= 255) {
        g = 255;
      }
      g = Math.round(g)
      voice.speak('green increases');
      voice.stop();
    } else if (keyIsDown(DOWN_ARROW)) {
        g -= 5;
        if (g <= 0) {
          g = 0
        }
        g = Math.round(g)
        voice.speak('green decreases');
        voice.stop();
      }
  console.log('g ',g)
  }

  if (keyIsDown(66)) {
    if (keyIsDown(UP_ARROW)) {
      b += 5;
      if (b >= 255) {
        b = 255;
      }
      b = Math.round(b)
      voice.speak('blue increases');
      voice.stop();
    } else if (keyIsDown(DOWN_ARROW)) {
      b -= 5;
        if (b <= 0) {
          b = 0
        }
      b = Math.round(b)
      voice.speak('blue decrease');
      voice.stop();
      }
  console.log('b ',b)
  }

  document.getElementById('param').innerHTML = 'red: ' + r + '</br>' + 'green: ' + g + '</br>' + 'blue: ' + b;
}}

function keyPressed() {
  if (keyCode === ENTER) {
    intro = false
      voice.setVoice('Cellos')
      voice.speak("Welcome to the cube webcam");
    document.getElementById("instructions").style.visibility = "visible";
    document.getElementById("param").style.visibility = "visible";
}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
