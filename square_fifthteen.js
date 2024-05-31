window.sketch = function(p) {
	p.setup = function() {
	p.createCanvas(189.92125984, 189.92125984);
	p.noStroke();
	};

	p.draw = function() {
		p.background(75,34,18,255);
		
		// p.rectMode(p.RADIUS);
		// p.fill(33,72,149,255);
		// p.square(94, 102, 74);
		
		p.rectMode(p.RADIUS);
		p.fill(50,52,53,255);
		p.square(94, 108, 54);
		
		p.rectMode(p.CENTER);
		p.fill(131,173,227,255);
		p.square(94, 116, 76);
	};
};