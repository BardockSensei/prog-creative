let d = 500; // diamètre 
let minRadius = 0; // rayon minimum de la cible

function setup() {
  // Hack pour placer le (0,0) au centre du canvas
  createCanvas(800, 600, WEBGL);
  background(0);
}

function draw() {
  let angle = random(TWO_PI); // Angle aléatoire entre 0 et 2*PI
  let radius = random(minRadius, d/2); // Rayon aléatoire entre le centre et la limite de la cible

  // Conversion des coordonnées polaires en coordonnées cartésiennes
  let x = radius * cos(angle);
  let y = radius * sin(angle);

  // Cible en 3 parties, gestion des couleurs en fonction du rayon
  let r, g, b;

  if (radius < d / 6) {
    // Partie centrale de la cible (couleurs vives)
    r = random(200, 255);
    g = random(100, 255);
    b = random(100, 255);
  } else if (radius < d / 3) {
    // Deuxième partie de la cible (couleurs plus douces)
    r = random(100, 200); 
    g = random(50, 150);
    b = random(50, 150);
  } else {
    // Partie extérieure de la cible (couleurs sombres)
    r = random(50, 150); 
    g = random(50, 100);
    b = random(50, 100);
  }

  // effet de pointillisme 
  noStroke();
  fill(r, g, b);
  ellipse(x, y, 24, 24);
}
