let gridSize = 20;

class Snake {
    constructor(pX, pY, pColor, pSize) {
        this.x = pX;
        this.y = pY;
        this.color = pColor;
        this.size = pSize;
    }

    drawSnake() {
        for (let i=0; i<pSize; i++) {
            fill(this.color);
            square(this.x, this.y, gridSize);
            this.x += gridSize;
            this.y += gridSize;
        }
    }
}