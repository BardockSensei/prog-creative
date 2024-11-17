class Balloon {
	constructor(pX, pY, pSize, pColor, pCanvas) {
		this.x = pX;
		this.y = pY;
		this.size = pSize;
		this.color = pColor;
		this.canvas = pCanvas;
	}

	show() {
		let calcul = this.size + this.size/2;
		this.canvas.stroke(0);
		this.canvas.fill(this.color);
		this.canvas.ellipse(this.x, this.y, this.size, calcul);
		this.canvas.fill(0);
		this.canvas.strokeWeight(2);
		this.canvas.line(this.x, this.y + calcul/2, this.x, this.y + calcul);
	}

	move() {
		this.y -= 2;
	}
}