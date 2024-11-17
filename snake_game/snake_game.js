let gridSize = 20;

let checkStartGame = false;

function setup() {
    frameRate(60);
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    if (checkStartGame == false) {
        startGame();
    } else {
        drawGrid();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function drawGrid() {
    background("#003049");
    stroke("#FFFFFF");
    strokeWeight(1);
    noFill();
    for (let i=0; i<width; i+= gridSize) {
        for (let j=0; j<height; j+= gridSize) {
            square(i, j, gridSize);
        }
    }
}


function startGame() {
    background("#1d3557");

    stroke("#669BBC");
    strokeWeight(2);
    fill("#003049");
    rect(width / 4, height / 4, width / 2, height / 2);

    noStroke();
    fill("#FFFFFF");
    textSize(32);
    textAlign(CENTER, CENTER);
    let textX = width/4 + width/2 / 2;
    let textY = height/4 + height/2 / 2;
    text('Snake Game\n\nTouche l\'écran ou clique si tu veux jouer.\nDéplacement avec les flèches du clavier.', textX, textY - 50);

    textSize(24);
    textAlign(RIGHT, BOTTOM);
    text("M2 CIM (DT) - Guillaume Hostache", width/4 + width/2 - 10, height/4 + height/2 - 10);
}


function mousePressed() {
    if (!checkStartGame) {
        checkStartGame = !checkStartGame;
    }
}