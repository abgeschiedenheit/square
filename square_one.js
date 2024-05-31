window.sketch = function(p) {
		p.setup = function() {
				p.createCanvas(189.92125984, 189.92125984);
				p.noStroke();
		};

		p.draw = function() {
				p.background(40,112,61,255);
				
				p.rectMode(p.RADIUS);
				p.fill(26,133,132,255);
				p.square(94, 102, 74);
				
				p.rectMode(p.RADIUS);
				p.fill(157,156,147);
				p.square(94, 108, 54);
				
				p.rectMode(p.CENTER);
				p.fill(224,178,59,255);
				p.square(94, 116, 76);
		};
};