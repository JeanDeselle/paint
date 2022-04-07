class Pen {
	constructor() {
		// initialiser 2 propriétés avec des valeurs par defaut
		// - color
		this.color = "black";
		// - size
		this.size = 2;
	}

	// méthode de configuration de l'ardoise à l'execution d'un dessin avec le crayon
	configure() {
		// mise à jour des propriété de dessin de l'ardoise(slate)
		return { color: this.color, size: this.size };
	}

	// setter pour appliquer la couleur "au crayon", et un autre pour appliquer la taille( size)
	//...
	setColor(color) {
		this.color = color;
	}

	setSize(size) {
		this.size = size;
	}

	setRgbColor(rgbColor) {}
	// methode pour appliquer une couleur rgb au crayon
}

export default Pen;
