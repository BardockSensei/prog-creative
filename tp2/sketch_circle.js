let d = 15;
let r = 10;
let g = 10;
let b = 10;
let extraCanvas;

function setup() 
{
    createCanvas(800, 600);
    extraCanvas = createGraphics(800, 600);
    extraCanvas.clear();
    background(r, g, b);
}

function draw() 
{
    // drawing point
    extraCanvas.fill(random(0, 255), random(0, 255), random(0, 255), 50);
    extraCanvas.noStroke();
    extraCanvas.circle(mouseX, mouseY, d);
    
    image(extraCanvas, 0, 0); // ne pas l'oublier
}

/* interaction souris
function mousePressed() 
{
    if (mouseButton === RIGHT) {
        d += 5;
    } else {
        d -= 5;
    }
}
*/

// interaction clavier
function keyPressed() 
{
    if (keyCode === UP_ARROW) {
        d += 5;
    } else if (keyCode === DOWN_ARROW) {
        d -= 5;
    } else {
        r = random(0, 255);
        g = random(0, 255);
        b = random(0, 255);
        
        background(r, g, b);
    } 
}
