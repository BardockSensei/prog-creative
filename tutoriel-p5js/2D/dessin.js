function setup() 
{
    createCanvas(800, 800);
    background(220, 220, 220);  // Gris clair
    noStroke();
    tapis_sierpinsky(50, 50, 200, 6);
}

function tapis_sierpinsky(x, y, c, n) 
{   
    if (n>0) {
        let col = color(0, 0, 0);
        fill(col);
        square(x, y, c);

        col = color(255, 255, 255);
        fill(col)
        square(x+ (c/3), y+ (c/3), c/3);

        // La zone du bas
        tapis_sierpinsky(x, y, c/3, n-1);
        tapis_sierpinsky(x+(c/3), y, c/3, n-1);
        tapis_sierpinsky(x+2*(c/3), y, c/3, n-1);

        // La zone du milieu
        tapis_sierpinsky(x, y+(c/3), (c/3), n-1);
        tapis_sierpinsky(x+2*(c/3), y+(c/3), c/3, n-1);
          
        // La zone du haut
        tapis_sierpinsky(x, y+2*(c/3), c/3, n-1);
        tapis_sierpinsky(x+(c/3), y+2*(c/3), c/3, n-1);
        tapis_sierpinsky(x+2*(c/3), y+2*(c/3), c/3, n-1);
    }
}
