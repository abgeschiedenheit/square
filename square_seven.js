window.sketch = function(p) {
	p.setup = function() {
		p.createCanvas(189.92125984, 189.92125984);
		p.noStroke();
	};

	p.draw = function() {
		p.background(135,201,236,255);
		
		p.rectMode(p.RADIUS);
		p.fill(196,196,194,255);
		p.square(94, 102, 74);
		
		p.rectMode(p.RADIUS);
		p.fill(255,250,244,255);
		p.square(94, 108, 54);
		
		p.rectMode(p.CENTER);
		p.fill(254,226,18,255);
		p.square(94, 116, 76);
	};
};