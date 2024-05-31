window.sketch = function(p) {
	p.setup = function() {
		p.createCanvas(189.92125984, 189.92125984);
		p.noStroke();
	};

	p.draw = function() {
		p.background(0,148,77,255);
		
		// p.rectMode(p.RADIUS);
		// p.fill(253,162,89,255);
		// p.square(94, 102, 74);
		
		p.rectMode(p.RADIUS);
		p.fill(0,116,141,255);
		p.square(94, 108, 54);
		
		p.rectMode(p.CENTER);
		p.fill(0,88,138,255);
		p.square(94, 116, 76);
	};
};