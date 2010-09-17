var particle = function(canvas) {
	this.canvas = canvas;
	this.context = this.canvas.getContext("2d");
	this.x = Math.random() * this.canvas.width;
	this.y = Math.random() * this.canvas.height;

	this.dx = (Math.random() * 2) - 1;
	this.dy = (Math.random() * 2) - 1;
};

particle.prototype.update = function() {
	if (this.x > this.canvas.width || this.x < 0 || this.y > this.canvas.height || this.y < 0) {
	    this.dx = -(this.dx);
	    this.dy = -(this.dy);
	}
	this.x = this.x + this.dx;
	this.y = this.y + this.dy;
};

particle.prototype.draw = function() {
    this.context.fillRect(this.x, this.y, 1, 1);
};