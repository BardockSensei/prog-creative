let x = 0;
let y = 0;

let speedX = Math.floor(Math.random() * 10) +1;
let speedY = Math.floor(Math.random() * 10) +1;

let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);

function setup() {
  createCanvas(600, 500);
  noStroke();
}

function draw() {
  background(220);
  
  fill(r, g, b);
  square(x, y, 60);

  x += speedX;
  y += speedY;
   
  if (0 > x) {
    speedX = changeSpeed(speedX);
    setRandomColor();
    x = 0;
  } 
  
  if (x+60 > 600) {
    speedX = changeSpeed(speedX);
    setRandomColor();
    x = 540;
  } 
  
  if (y < 0) { 
    speedY = changeSpeed(speedY);
    setRandomColor();
    y = 0
  }
  
  if (y+60 > 500) {
    speedY = changeSpeed(speedY);
    setRandomColor();
    y = 440; // Pour éviter le blocage sur bordure
  }
}

function changeSpeed(speed) {
  if (speed > 0) {
    return (Math.floor(Math.random() * 10) + 1 ) * -1;
  } else {
    return (Math.floor(Math.random() * 10) + 1 );
  }
}

function setRandomColor() {
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
}