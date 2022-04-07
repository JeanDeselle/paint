class Slate {
	// le constructor reçoit un argument
	constructor(pen) {
		// récupération du canvas, du context
		this.canvas = document.getElementById("slate");
		this.ctx = this.canvas.getContext("2d");

		// au début, on ne sait pas où se trouve la souris (currentLocation)
		this.currentLocation = null;
		// au début on dessine pas (isDrawing)
		this.isDrawing = false;
		// stockage de l'objet crayon
		this.pen = pen;
		// installer les écouteur lié à la souris

		this.canvas.addEventListener("mousedown", (e) => {
			this.currentLocation = this.getMouseLocation(e);
			this.isDrawing = true;
		});

		this.canvas.addEventListener("mousemove", (e) => {
			if (this.isDrawing) {
				this.newLocation = this.getMouseLocation(e);
				this.draw(this.currentLocation, this.newLocation);
				this.currentLocation = this.newLocation;
			}
		});

		this.canvas.addEventListener("mouseup", (e) => {
			this.isDrawing = false;
		});

		this.canvas.addEventListener("mouseout", (e) => {
			this.isDrawing = false;
		});
	}

	// méthode de nettoyage de l'ardoise
	clear() {
		this.ctx.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
	}

	getMouseLocation(e) {
		const position = {
			x: e.offsetX,
			y: e.offsetY,
		};
		return position;
	}

	draw(LastPos, newPos) {
		if (this.isDrawing) {
			this.ctx.beginPath();
			this.ctx.moveTo(LastPos.x, LastPos.y);
			this.ctx.lineTo(newPos.x, newPos.y);
			this.ctx.closePath();
			this.ctx.stroke();
		}
	}

    updatePen(){
        this.ctx.lineWidth = this.pen.size;
        this.ctx.strokeStyle = this.pen.color;
    }
	// méthodes sur la gestion de la souris
	//...
}
export default Slate;
