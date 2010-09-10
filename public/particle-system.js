particle = function() {
	this.x = 0.0;
	this.y = 0.0;
	this.dx = 0.5;
	this.dy = 0.5;
};

particle.prototype.update = function() {
	this.x += this.dx;
	this.y += this.dy;
};

particle.prototype.draw = function() {
    // TODO draw logic
};

particleSystem = function(amount) {
	this.particles = [];
	for (i = 0; i < amount; i++) {
		this.particles.push( new particle() );
	}
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
	for (var i = 0; i < numParticles; i++) {
		this.particles.push(numParticles);
	}
};

particleSystem.prototype.removeParticles = function(numParticles) {
	for (var i = 0; i < numParticles; i++) {
		this.particles.pop(numParticles);
	}
};

mainLoop = function(speed) {
    var self = this;
    this.ps = new particleSystem(100);
    setInterval(function() {
        self.update.call(self);
    }, speed);
};

mainLoop.prototype.update = function() {
    console.log("main loop updating");
    this.ps.update();
    this.draw();
};

mainLoop.prototype.draw = function() {
    console.log("main loop drawing");
    this.ps.draw();
};

window.onload = function() {
    m = new mainLoop(1000);
};