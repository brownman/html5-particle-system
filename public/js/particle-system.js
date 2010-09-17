var particleSystem = function(canvas, amount) {
	this.canvas = canvas;
	this.context = this.canvas.getContext("2d");
	this.particles = [];
    this.addParticles(1000);
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
    console.log("adding ", numParticles);
	for (var i = 0; i < numParticles; i++) {
		this.particles.push(new particle(this.canvas));
	}
	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	numSpan = document.getElementById("num-particles");
	numSpan.innerHTML = this.numParticles();
};

particleSystem.prototype.removeParticles = function(numParticles) {
    console.log("removing ", numParticles);
	for (var i = 0; i < numParticles; i++) {
		this.particles.pop();
	}
	numSpan = document.getElementById("num-particles");
	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	numSpan.innerHTML = this.numParticles();
};

particleSystem.prototype.numParticles = function() {
    return this.particles.length;
};