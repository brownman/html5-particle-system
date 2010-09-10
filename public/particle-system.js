var canvas;
var context;
var ps;

var particle = function() {
	this.x = Math.random() * canvas.width;
	this.y = Math.random() * canvas.height;
	
	this.dx = (Math.random() * 2) - 1;
	this.dy = (Math.random() * 2) - 1;
};

particle.prototype.update = function() {
	if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {
	    this.dx = -(this.dx);
	    this.dy = -(this.dy);
	}
	this.x = this.x + this.dx;
	this.y = this.y + this.dy;
};

particle.prototype.draw = function() {
    context.fillRect(this.x, this.y, 1, 1);
};

var particleSystem = function(amount) {
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
		this.particles.push(new particle());
	}
	numSpan = document.getElementById("num-particles");
	numSpan.innerHTML = this.numParticles();
};

particleSystem.prototype.removeParticles = function(numParticles) {
    console.log("removing ", numParticles);
	for (var i = 0; i < numParticles; i++) {
		this.particles.pop();
	}
	numSpan = document.getElementById("num-particles");
	console.log(numSpan);
	numSpan.innerHTML = this.numParticles();
};

particleSystem.prototype.numParticles = function() {
    return this.particles.length;
};

var mainLoop = function(speed) {
    var self = this;
    ps = new particleSystem(1000);
    setInterval(function() {
        self.update.call(self);
    }, speed);
};

mainLoop.prototype.update = function() {
    ps.update();
    this.draw();
};

mainLoop.prototype.draw = function() {
    canvas.width = canvas.width;
    ps.draw();
};

window.onload = function() {
    canvas = document.getElementById("particles");
    context = canvas.getContext("2d");
    m = new mainLoop(10);
    var addLink = document.getElementById("add-particles");
    
    addLink.onclick = function() {
        ps.addParticles(1000);
        return false;
    };
    
    var removeLink = document.getElementById("remove-particles");
    removeLink.onclick = function() {
        ps.removeParticles(1000);
        return false;
    };
};