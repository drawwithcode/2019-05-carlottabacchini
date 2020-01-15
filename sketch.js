
var graphics;
var r;
var g;
var b;
var intro = true;

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
}

function draw() {

  if (intro) {
    background('red')
    

    //metti qua le cose per la schermata iniziale

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
  box(150);
  translate(300, 0, 0);

  if (keyIsDown(82)) {
    if (keyIsDown(UP_ARROW)) {
      r += 5;
      if (r >= 255) {
        r = 255;
      }
      r = Math.round(r)
    } else if (keyIsDown(DOWN_ARROW)) {
        r -= 5;
        if (r <= 0) {
          r = 0
        }
        r = Math.round(r)
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
    } else if (keyIsDown(DOWN_ARROW)) {
        g -= 5;
        if (g <= 0) {
          g = 0
        }
        g = Math.round(g)
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
    } else if (keyIsDown(DOWN_ARROW)) {
      b -= 5;
        if (b <= 0) {
          b = 0
        }
      b = Math.round(b)
      }
  console.log('b ',b)
  }

  document.getElementById('param').innerHTML = 'red: ' + r + '</br>' + 'green: ' + g + '</br>' + 'blue: ' + b;
}}

function keyPressed() {
  if (keyCode === ENTER) {
    intro = false
}
}
