let startGame = false; 
let tGhosts = [];
let feedback = "orange";  
let showFeedbackTimer = 0; 
let successSound, failSound;

function preload() {
    successSound = loadSound("success.mp3");
    failSound = loadSound("fail.mp3");
}

function setup() {
    frameRate(60);
    createCanvas(800, 400);
    noStroke();
    angleMode(DEGREES);
}

function draw() {
    if (!startGame) {
        background("#adb5bd");
        return; 
    }

    if (showFeedbackTimer > 0) {
        background(feedback);  
        showFeedbackTimer--; 
    } else {
        background("#adb5bd");
    }


    for (let i = 0; i < tGhosts.length; i++) {
        tGhosts[i].drawGhost();
    }
}

function mousePressed() {
    if (startGame) {  
        playerEyesShape = random(["happy", "sad", "angry"]); 
        tGhosts[0].eyesShape = playerEyesShape; 
    }
}

function keyPressed() {
    if (keyCode == ENTER) {
        if (!startGame) {
            startGame = true;
            let playerEyesShape = random(["happy", "sad", "angry"]); 
            let gameEyesShape = random(["happy", "sad", "angry"]);

            tGhosts.push(new Ghost(200, height / 2 + 50, playerEyesShape)); 
            tGhosts.push(new Ghost(width - 200, height / 2 + 50, gameEyesShape)); 
        } else {
            compareGhosts(); 
        }
    }
}

function compareGhosts() {
    let eyesMatch = (tGhosts[0].eyesShape === tGhosts[1].eyesShape);

    if (eyesMatch) {
        feedback = "green";
        successSound.play();
    } else {
        feedback = "red"; 
        failSound.play();
    }

    showFeedbackTimer = 60; 

    if (eyesMatch) {
        tGhosts[1] = new Ghost(width - 200, height / 2 + 50, random(["happy", "sad", "angry"])); 
    }
}
