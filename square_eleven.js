window.sketch = function(p) {
	p.setup = function() {
		p.createCanvas(189.92125984, 189.92125984);
		p.noStroke();
	};

	p.draw = function() {
		p.background(148,31,77,255);
		
		// p.rectMode(p.RADIUS);
		// p.fill(153,173,221,255);
		// p.square(94, 102, 74);
		
		p.rectMode(p.RADIUS);
		p.fill(75,28,22,255);
		p.square(94, 108, 54);
		
		p.rectMode(p.CENTER);
		p.fill(44,44,42,255);
		p.square(94, 116, 76);
	};
};