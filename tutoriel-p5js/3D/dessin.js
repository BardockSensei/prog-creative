function setup() 
{
    createCanvas(800, 600, WEBGL);
    angleMode(DEGREES);    
}


function draw() {
    // Enable orbiting with the mouse.
    //orbitControl();

    background(220, 220, 220);
    push();
    translate(-75, -100, 0);
    rotateWithFrameCount();
    box(100, 100, 100);
    pop();
}

function rotateWithFrameCount() {
    rotateZ(frameCount);
    rotateX(frameCount);
    rotateY(frameCount);
}