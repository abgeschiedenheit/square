window.sketch = function(p) {
	p.setup = function() {
		p.createCanvas(189.92125984, 189.92125984);
		p.noStroke();
	};

	p.draw = function() {
		p.background(0,90,147,255);
		
		p.rectMode(p.RADIUS);
		p.fill(42,126,217,255);
		p.square(94, 102, 74);
		
		p.rectMode(p.RADIUS);
		p.fill(242,238,226,255);
		p.square(94, 108, 54);
		
		p.rectMode(p.CENTER);
		p.fill(219,214,210,255);
		p.square(94, 116, 76);
	};
};