window.sketch = function(p) {
	p.setup = function() {
		p.createCanvas(189.92125984, 189.92125984);
		p.noStroke();
	};

	p.draw = function() {
		p.background(251,156,0,255);
		
		p.rectMode(p.RADIUS);
		p.fill(253,162,89,255);
		p.square(94, 102, 74);
		
		p.rectMode(p.RADIUS);
		p.fill(238,202,124,255);
		p.square(94, 108, 54);
		
		p.rectMode(p.CENTER);
		p.fill(245,214,71,255);
		p.square(94, 116, 76);
	};
};