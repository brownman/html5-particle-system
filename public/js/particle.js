var particle = function(parent) {
	this.world = world;
	this.parent = parent;
	this.x = Math.random() * this.parent.world.canvas.width;
	this.y = Math.random() * this.parent.world.canvas.height;

	this.dx = (Math.random() * 2) - 1;
	this.dy = (Math.random() * 2) - 1;
};

particle.prototype.update = function() {
	if (this.x > this.parent.world.canvas.width || this.x < 0 || this.y > this.parent.world.canvas.height || this.y < 0) {
	    this.dx = -(this.dx);
	    this.dy = -(this.dy);
	}
	this.x = this.x + this.dx;
	this.y = this.y + this.dy;
};

particle.prototype.draw = function() {
    this.parent.world.context.fillRect(this.x, this.y, 1, 1);
};