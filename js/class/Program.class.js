import ColorPalette from "./ColorPalette.class.js";
import Pen from "./Pen.class.js";
import Slate from "./Slate.class.js";
class Program {
	constructor() {
		// instancier 3 propriétés :
		// - ColorPalette
		this.colorPalette = new ColorPalette();
		// - Pen
		this.pen = new Pen();
		// - Slate
		this.slate = new Slate(this.pen.configure());
		
		this.start();
		// ------------------------------------------------
	}

	// méthodes:

	onClickPenColor(color) {
		this.pen.setColor(color);
		
		this.slate.pen = this.pen.configure();
		this.slate.updatePen();
	}

	onClickPenSize(size) {
		this.pen.setSize(size);
		this.slate.pen = this.pen.configure();
		this.slate.updatePen();
	}

	onPickColor(rgbColor) {
		
	}

	start() {
		// installer des écouteurs sur les outils et de configuration
		const colors = document.querySelectorAll(".pen-color");
		colors.forEach((color) => {
			color.addEventListener("click", (e) => {
				this.onClickPenColor(e.target.dataset.color);
			});
		});

		// taille
		const sizes = document.querySelectorAll(".pen-size");
		sizes.forEach((size) => {
			size.addEventListener("click", (e) => {
				this.onClickPenSize(e.target.dataset.size);
			});
		});

		// gomme
		const clearAll = document.querySelector("#tool-clear-canvas");
		clearAll.addEventListener("click", (e) => {
			this.slate.clear();
		});
		// écouter sur la pipette pour display la palette de dégradé
		document
			.getElementById("tool-color-picker")
			.addEventListener("click", (e) => {
				document
					.getElementById("color-palette")
					.classList.toggle("hide");
			});

		//--------------------------------------------------------------------------------------------
		// y'aura un gestionnaire d'evenement custom à créer (à ne pas faire tout de suite FFS !)

		// document
		// 	.getElementById("color-palette")
		// 	.addEventListener("click", (e) => {
		// 		this.onPickColor(this.colorPalette.getPickedColor());
		// 	});

		document
			.getElementById("color-palette")
			.addEventListener("onPickColor", (e) => {
				console.log(e.detail.rgb);
				this.pen.setRgbColor(e.detail.rgb);
				this.slate.pen = this.pen.configure();
				this.slate.updatePen();
				document
					.getElementById("color-palette")
					.classList.toggle("hide");
			});
	}
}

export default Program;
