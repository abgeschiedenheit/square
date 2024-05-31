document.addEventListener('DOMContentLoaded', () => {
	const sketches = document.querySelectorAll('.sketch');

	sketches.forEach((sketchLink, index) => {
		const sketchFile = sketchLink.dataset.sketch;
		const canvasId = `canvas${index}`;

		// Create a div to hold the canvas
		const canvasHolder = document.createElement('div');
		canvasHolder.id = canvasId;
		sketchLink.appendChild(canvasHolder);

		// Load the sketch file and create a new p5 instance for it
		loadSketch(sketchFile, canvasId);
	});
});

function loadSketch(sketchFile, canvasId) {
		const script = document.createElement('script');
		script.src = sketchFile;
		script.onload = () => {
			new p5(window.sketch, document.getElementById(canvasId));
		};
		document.body.appendChild(script);
}