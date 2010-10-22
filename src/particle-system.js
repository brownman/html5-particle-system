var particleSystem = function(world, amount, colors, radius) {
	this.world = world;
	this.particles = [];
	this.colors = colors;
	this.radius = radius;
	console.log("Particle system: ", this);
    this.addParticles(amount);
};

particleSystem.prototype.getColor = function() {
	var index = Math.floor(Math.random() * this.colors.length);
	return this.world.options.colors[index];
};


particleSystem.prototype.update = function() {
	for (i = 0; i < this.particles.length; i++) {
		this.particles[i].update();
	}
};

particleSystem.prototype.draw = function() {
	for (var i = 0; i < this.particles.length; i++) {
		this.particles[i].draw();
	}
};

particleSystem.prototype.addParticles = function(numParticles) {
    log("adding ", numParticles);
	for (var i = 0; i < numParticles; i++) {
		var color = this.getColor();
		this.particles.push(new particle(this, color, this.radius));
	}
	this.world.callbacks.worldUpdated.call(this);
};

particleSystem.prototype.removeParticles = function(numParticles) {
    log("removing ", numParticles);
	for (var i = 0; i < numParticles; i++) {
		this.particles.pop();
	}
	if (this.particles.length == 0) {
		this.world.clear();
	}
	this.world.callbacks.worldUpdated.call(this);
};

particleSystem.prototype.numParticles = function() {
    return this.particles.length;
};