var particle = function(parent, color, radius) {
	this.parent = parent;
	this.ctx = this.parent.world.context;
	this.x = Math.random() * this.parent.world.canvas.width;
	this.y = Math.random() * this.parent.world.canvas.height;

	this.dx = (Math.random() * 2) - 1;
	this.dy = (Math.random() * 2) - 1;
	
	this.color = color;
	this.radius = radius;
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
	this.ctx.fillStyle = this.color;
	this.parent.world.callbacks.drawParticle.call(this);
};