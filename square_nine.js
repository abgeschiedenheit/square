window.sketch = function(p) {
	p.setup = function() {
		p.createCanvas(189.92125984, 189.92125984);
		p.noStroke();
	};

	p.draw = function() {
		p.background(82,82,80,255);
		
		p.rectMode(p.RADIUS);
		p.fill(56,80,58,255);
		p.square(94, 102, 74);
		
		p.rectMode(p.RADIUS);
		p.fill(59,116,101,255);
		p.square(94, 108, 54);
		
		p.rectMode(p.CENTER);
		p.fill(48,75,178,255);
		p.square(94, 116, 76);
	};
};