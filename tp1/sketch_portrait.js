/*function setup() {
  createCanvas(600, 500);
  background(255); // Fond blanc

  let gridSize = 50; // Taille de chaque carré de la grille

  stroke(200); // Couleur de la grille (gris clair)
  strokeWeight(1); // Épaisseur des lignes

  // Dessiner les lignes verticales
  for (let x = 0; x <= width; x += gridSize) {
    line(x, 0, x, height);
  }

  // Dessiner les lignes horizontales
  for (let y = 0; y <= height; y += gridSize) {
    line(0, y, width, y);
  }
}

function draw() {
  // Code principal du dessin (ajouter ici si besoin)
}
function setup() {
  createCanvas(600, 500);
  background(255); // Fond blanc
  
  // Dessin du triangle disproportionné
  stroke(255, 0, 0); // Rouge pour le premier segment
  strokeWeight(2);
  line(100, 100, 200, 50); // Segment entre le premier et le deuxième point
  
  stroke(0, 255, 0); // Vert pour le deuxième segment
  line(200, 50, 150, 200); // Segment entre le deuxième et le troisième point
  
  stroke(0, 0, 255); // Bleu pour le troisième segment
  line(150, 200, 100, 100); // Segment entre le troisième et le premier point
  
  // Dessin du rectangle disproportionné
  stroke(255, 165, 0); // Orange pour le premier segment
  line(300, 100, 500, 120); // Segment supérieur
  
  stroke(0, 255, 255); // Cyan pour le deuxième segment
  line(500, 120, 480, 300); // Segment droit
  
  stroke(255, 0, 255); // Magenta pour le troisième segment
  line(480, 300, 280, 280); // Segment inférieur
  
  stroke(128, 0, 128); // Violet pour le quatrième segment
  line(280, 280, 300, 100); // Segment gauche
}

function draw() {
  // Rien ici pour cet exemple
}


*/


function setup() {
  createCanvas(600, 500);
  background(255); // Fond blanc

  // Triangle disproportionné avec remplissage
  fill(255, 150, 150); // Remplissage rouge clair
  stroke(255, 0, 0);   // Bordures rouges
  strokeWeight(2);
  
  beginShape();
  vertex(100, 100);   // Premier point
  vertex(200, 50);    // Deuxième point
  vertex(150, 200);   // Troisième point
  endShape(CLOSE);    // Fermer la forme (ferme la boucle)

  // Rectangle disproportionné avec remplissage
  fill(150, 150, 255); // Remplissage bleu clair
  stroke(0, 0, 255);   // Bordures bleues
  strokeWeight(2);
  
  beginShape();
  vertex(300, 100);   // Premier point
  vertex(500, 120);   // Deuxième point
  vertex(480, 300);   // Troisième point
  vertex(280, 280);   // Quatrième point
  endShape(CLOSE);    // Fermer la forme (rectangle disproportionné)
}

function draw() {
  // Rien ici pour cet exemple
}
