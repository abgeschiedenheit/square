window.sketch = function(p) {
	p.setup = function() {
	p.createCanvas(189.92125984, 189.92125984);
	p.noStroke();
	};

	p.draw = function() {
		p.background(228,228,228,255);
		
		// p.rectMode(p.RADIUS);
		// p.fill(233,230,187,255);
		// p.square(94, 102, 74);
		
		p.rectMode(p.RADIUS);
		p.fill(247,246,242,255);
		p.square(94, 108, 54);
		
		p.rectMode(p.CENTER);
		p.fill(254,254,252,255);
		p.square(94, 116, 76);
	};
};