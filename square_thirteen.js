window.sketch = function(p) {
	p.setup = function() {
	p.createCanvas(189.92125984, 189.92125984);
	p.noStroke();
	};

	p.draw = function() {
		p.background(122,123,118,255);
		
		// p.rectMode(p.RADIUS);
		// p.fill(233,230,187,255);
		// p.square(94, 102, 74);
		
		p.rectMode(p.RADIUS);
		p.fill(42,73,26,255);
		p.square(94, 108, 54);
		
		p.rectMode(p.CENTER);
		p.fill(3,2,22,255);
		p.square(94, 116, 76);
	};
};