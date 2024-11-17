let tBalloons = [];
let tClouds = [[1100, 100, 1], [900, 300, 1], [1110, 500, 1]];
let firstPlan;

let selectedBalloon = -1;

function setup() {
    frameRate(30);
    createCanvas(1200, 800);
    noStroke();

    drawSky();
    firstPlan = createGraphics(1200, 800);
    firstPlan.clear();
    firstPlan.noStroke();
    
    for (let i=0; i<tClouds.length; i++) {
        tClouds[i][2] = (Math.random() * 3)+0.5;
    }
}

function draw() {
    // Background scene
    drawSky();

    for (let i = 0; i<tClouds.length; i++) {
        drawCloud(tClouds[i][0], tClouds[i][1]);
        tClouds[i][0] -= tClouds[i][2];
        
        if (tClouds[i][0] < -60) {
            tClouds[i][0] = 1360;
            tClouds[i][2] = (Math.random() * 3)+0.5;
        }
    }
    
    fill("#3A5A40");
    ellipse(firstPlan.width/2, firstPlan.height-50, width+150, height/3);

    // first scene
    firstPlan.clear();
    for (let j = 0; j<tBalloons.length; j++) {
        tBalloons[j].show();
        if (selectedBalloon !== j) {
            tBalloons[j].move();
        }
    }
    
    image(firstPlan, 0, 0);
}

function keyPressed() {
    if (keyPressed) {
        if (keyCode === 32) {
            let balloon = new Balloon(mouseX, mouseY, random(100, 200), color(random(0, 255), random(0, 255), random(0, 255)), firstPlan);
            tBalloons.push(balloon);
        }
    }
}

function mousePressed() {
    for (let i = 0; i<tBalloons.length; i++) {
        let bX = tBalloons[i].x;
        let bY = tBalloons[i].y;
    
        let distanceBalloonMouse = dist(bX, bY, mouseX, mouseY);
        if (distanceBalloonMouse < 120) {
          selectedBalloon = i;
        }
    }
}

function mouseDragged() {
    if (selectedBalloon !== -1) {
        tBalloons[selectedBalloon].x = mouseX;
        tBalloons[selectedBalloon].y = mouseY;
    }
}

function mouseReleased() {
    selectedBalloon = -1;
}

function drawSky() {
    let gradient = drawingContext.createLinearGradient(0, 0, 0, 800);
  
    gradient.addColorStop(0.0, '#2196F3');
    gradient.addColorStop(0.3, '#42A5F5');
    gradient.addColorStop(0.6, '#90CAF9');
    gradient.addColorStop(1.0, '#E3F2FD');
  
    drawingContext.fillStyle = gradient;
    rect(0, 0, 1200, 800);
    fill(0, 0, 0);
}


function drawCloud(pX, pY) {
    fill(255);
    circle(pX - 140, pY, 90);
    ellipse(pX - 75, pY - 30, 170, 120);
    ellipse(pX - 70, pY + 20, 160, 100);
    circle(pX, pY - 30, 90);
    ellipse(pX, pY + 5, 130, 90);
}
