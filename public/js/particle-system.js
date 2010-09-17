var particleSystem = function(world, amount) {
	this.world = world;
	this.particles = [];
    this.addParticles(amount);
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
		this.particles.push(new particle(this));
	}
	this.world.worldUpdated.call(this);
};

particleSystem.prototype.removeParticles = function(numParticles) {
    log("removing ", numParticles);
	for (var i = 0; i < numParticles; i++) {
		this.particles.pop();
	}
	if (this.particles.length == 0) {
		this.world.clear();
	}
	this.world.worldUpdated.call(this);
};

particleSystem.prototype.numParticles = function() {
    return this.particles.length;
};