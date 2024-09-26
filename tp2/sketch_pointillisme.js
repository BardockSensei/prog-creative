let d = 500; // diamètre 
let minRadius = 0; // rayon minimum de la cible
let inverse = false;

function setup() 
{
  // Hack pour placer le (0,0) au centre du canvas
  createCanvas(800, 600, WEBGL);
  background(0);
}

function draw() 
{
  let angle = random(TWO_PI); // Angle aléatoire entre 0 et 2*PI
  let radius = random(minRadius, d/2); // Rayon aléatoire entre le centre et la limite de la cible

  // Conversion des coordonnées polaires en coordonnées cartésiennes
  let x = radius * cos(angle);
  let y = radius * sin(angle);

  let colors = changeColor(radius, inverse);
  
  // effet de pointillisme 
  noStroke();
  fill(colors[0], colors[1], colors[2]);
  ellipse(x, y, 24, 24);

  // Ajout interaction clavier
  if (keyIsPressed === true) {
    if (keyCode === ENTER) {
      background(0);
    }
  }
}

function changeColor(radius, inverse) 
{
  let colors = [];
  let colorRanges;

  if (inverse) {
    if (radius < d / 6) {
      colorRanges = [50, 150, 50, 100, 50, 100]; // Couleurs sombres
    } else if (radius < d / 3) {
      colorRanges = [100, 200, 50, 150, 50, 150]; // Couleurs plus douces
    } else {
      colorRanges = [200, 255, 100, 255, 100, 255]; // Couleurs vives
    }
  } else {
    if (radius < d / 6) {
      colorRanges = [200, 255, 100, 255, 100, 255]; // Couleurs vives
    } else if (radius < d / 3) {
      colorRanges = [100, 200, 50, 150, 50, 150]; // Couleurs plus douces
    } else {
      colorRanges = [50, 150, 50, 100, 50, 100]; // Couleurs sombres
    }
  }

  // Remplissage aléatoire des couleurs en fonction du range
  for (let i = 0; i < colorRanges.length; i += 2) {
    colors.push(random(colorRanges[i], colorRanges[i + 1]));
  }

  return colors;
}

function mousePressed() 
{
  inverse = !inverse;
  background(0);
}