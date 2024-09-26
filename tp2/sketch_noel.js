let canvasBackground;

function setup() 
{
  frameRate(30);
  createCanvas(800, 600);
  noStroke();
  
  canvasBackground = createGraphics(800, 600);
  canvasBackground.clear();
  canvasBackground.noStroke();
}

function draw() 
{
  drawSky(canvasBackground);
  drawSnow(canvasBackground);

  image(canvasBackground, 0, 0);

  drawGround();
  drawSnowMan();
}

function drawSky(canvasCible) 
{
  let startColor = color('#2196F3');
  let endColor = color('#E3F2FD'); 

  // Boucle pour créer un dégradé vertical naturel
  for (let y = 0; y <= height; y++) {
    let inter = map(y, 0, height, 0, 1);  // Calculer l'interpolation entre les couleurs
    let c = lerpColor(startColor, endColor, inter);  // Couleur interpolée
    canvasCible.fill(c);  
    canvasCible.rect(0, y, width, 1);
  }
}

function drawSnow(canvasCible) 
{
  canvasCible.fill(random(225, 255), alpha(random(70, 100)));
  
  for (let i=0; i<18; i++) {
    let x = random(0, 775);
    let y = random(0, 575);
    let size = random(5, 20);
    canvasCible.circle(x, y, size);
  }
}

function drawGround()
{
  fill(255, 255, 255);

  beginShape();
  vertex(0, 600);
  vertex(0, 530);
  vertex(220, 535);
  vertex(500, 520);
  vertex(680, 525);
  vertex(800, 520);
  vertex(800, 600);
  endShape(CLOSE);
}

function drawSnowMan() 
{
  // body
  fill(255, 255, 255);
  circle(380, 320, 90);
  circle(380, 400, 120);
  circle(380, 480, 150);
  
  // buttons
  fill(0, 0, 0);
  circle(379, 375, 15);
  circle(381, 400, 15);
  circle(380, 445, 18);
  circle(379, 475, 18);
  circle(381, 505, 18);

  // face
  fill(0, 0, 0);
  circle(365, 310, 10);
  circle(395, 310, 10);
  
  circle(352, 329, 5);
  circle(360, 337, 5);
  circle(370, 342, 5);
  circle(381, 344, 5);
  circle(392, 342, 5);
  circle(402, 337, 5);
  circle(410, 329, 5);

  fill(255, 140, 0);
  triangle(380, 320, 380, 330, 400, 325);

  drawHat();
  drawArm();
}

function drawHat() 
{
  fill(0, 0, 0);
  rect(310, 285, 140, 10);
  arc(380, 285, 100, 100, PI, TWO_PI);
}

function drawArm() 
{
  stroke(139, 69, 19);
  strokeWeight(6);
  line(340, 380, 280, 370);

  // Calcul du centre de symétrie (ici 310 est choisi comme centre)
  let centerX = 380;

  // Deuxième bras en miroir
  let mirroredX1 = centerX - (340 - centerX); // miroir de 340 par rapport à 310
  let mirroredX2 = centerX - (280 - centerX); // miroir de 280 par rapport à 310
  line(mirroredX1, 380, mirroredX2, 370);

  noStroke();
}