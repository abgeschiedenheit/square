window.sketch = function(p) {
	p.setup = function() {
		p.createCanvas(189.92125984, 189.92125984);
		p.noStroke();
	};

	p.draw = function() {
		p.background(244,160,9,255);
		
		p.rectMode(p.RADIUS);
		p.fill(211,99,11,255);
		p.square(94, 102, 74);
		
		p.rectMode(p.RADIUS);
		p.fill(185,76,12,255);
		p.square(94, 108, 54);
		
		p.rectMode(p.CENTER);
		p.fill(170,22,10,255);
		p.square(94, 116, 76);
	};
};