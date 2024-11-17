class Ghost {
    constructor(pX, pY, eyesShape) {
        this.x = pX;
        this.y = pY;
        this.color = "#FFFFFF";  
        this.eyesShape = eyesShape;  
    }

    drawGhost() {
        let arcWidth = 150, arcHeight = 300;
        let angleStart = 175, angleStop = 365;

        let x1 = this.x + (arcWidth / 2) * cos(angleStart);
        let y1 = this.y + (arcHeight / 2) * sin(angleStart) - 6;

        fill(this.color);
        noStroke();

        beginShape();
		// Dessin de la forme principale du fantôme
        for (let angle = angleStart; angle <= angleStop; angle++) {
            let x = this.x + (arcWidth / 2) * cos(angle);
            let y = this.y + (arcHeight / 2) * sin(angle);
            vertex(x, y); 
        }

        // bas du fantôme, courbe de bézier
        bezierVertex(this.x - 22, this.y + 42, this.x + 9, this.y - 19, x1, y1);
        endShape(CLOSE); 

        this.drawEyes();
    }

    drawEyes() {
        fill(0);
        let eyeOffsetX = 25;
        let eyeY = this.y - 60;

        if (this.eyesShape === "happy") {
            ellipse(this.x - eyeOffsetX, eyeY, 20, 20); 
            ellipse(this.x + eyeOffsetX, eyeY, 20, 20);  
        } else if (this.eyesShape === "sad") {
            rect(this.x - eyeOffsetX, eyeY, 15, 10); 
            rect(this.x + eyeOffsetX - 15, eyeY, 15, 10); 
        } else {
            fill(230, 0, 0);
            triangle(this.x - eyeOffsetX, eyeY, this.x - eyeOffsetX + 10, eyeY - 15, this.x - eyeOffsetX + 20, eyeY);
            triangle(this.x + eyeOffsetX - 20, eyeY, this.x + eyeOffsetX - 10, eyeY - 15, this.x + eyeOffsetX, eyeY); 
        }
    }
}