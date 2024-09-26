let d = 15;
let r = 100;
let g = 100;
let b = 100;
let extraCanvas;

function setup() 
{
    createCanvas(800, 600);
    extraCanvas = createGraphics(800, 600);
    extraCanvas.clear();
    background(r, g, b);
    
    extraCanvas.fill(random(0, 255), random(0, 255), random(0, 255));
    extraCanvas.noStroke();
    
    image(extraCanvas, 0, 0); // ne pas l'oublier
}

// interaction clavier
function mousePressed() 
{
    fill(245, 245, 245, 60);
    stroke(255);
    square(mouseX, mouseY, 50);
}
