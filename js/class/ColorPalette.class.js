class ColorPalette {
	constructor() {
		// récupérer le canvas/context
		this.canvas = document.getElementById("color-palette");
		this.ctx = this.canvas.getContext("2d");

		// initialiser une proriété rgb (objet ??)
		this.rgb = {
			red: 0,
			green: 0,
			blue: 0,
		};
		// installer l'écouteur sur la ColorPalette
		this.canvas.addEventListener("click", (e) => {
			this.onClick(e);
		});

		// appeler la methode pour Build() la palette
		this.build();
	}

	// méthode de construction graphique de la palette de couleurs
	build() {
		let gradient = this.ctx.createLinearGradient(
			0,
			0,
			this.canvas.width,
			0
		);

		gradient.addColorStop(0, "rgb(255,   0,   0)");
		gradient.addColorStop(0.15, "rgb(255,   0, 255)");
		gradient.addColorStop(0.33, "rgb(0,     0, 255)");
		gradient.addColorStop(0.49, "rgb(0,   255, 255)");
		gradient.addColorStop(0.67, "rgb(0,   255,   0)");
		gradient.addColorStop(0.84, "rgb(255, 255,   0)");
		gradient.addColorStop(1, "rgb(255,   0,   0)");

		this.ctx.fillStyle = gradient;
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

		gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
		gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
		gradient.addColorStop(0.5, "rgba(255, 255, 255, 0)");
		gradient.addColorStop(0.5, "rgba(0,     0,   0, 0)");
		gradient.addColorStop(1, "rgba(0,     0,   0, 1)");

		// Apply gradient to canvas
		this.ctx.fillStyle = gradient;
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
	}

	// getter pour récuperer la .pickedColor
	getPickedColor() {
		return `rgb(${this.rgb.red},${this.rgb.green}, ${this.rgb.blue})`;
	}

	// méthode de gestion de click sur la palette
	onClick(e) {
		let x = e.offsetX;
		let y = e.offsetY;
		let pixel = this.ctx.getImageData(x, y, 1, 1).data; // Read pixel Color
		this.rgb.red = pixel[0];
		this.rgb.green = pixel[1];
		this.rgb.blue = pixel[2];
	}
}

export default ColorPalette;
