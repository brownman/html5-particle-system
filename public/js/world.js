var world = function(options) {
	this.canvas = options.canvasEl;
	this.context = this.canvas.getContext("2d");
	this.doClearEachFrame = options.clearEachFrame;
	this.fullWindow = options.fullWindow;
	
	var self = this;

	if (this.fullWindow) {
		this.resize(window.innerWidth-20, window.innerHeight-20);
		window.addEventListener("resize", function() {
			self.resize(window.innerWidth-20, window.innerHeight-10);
		}, false);
	}
	
	this.ps = new particleSystem(this, options.initialParticles);
	
	setInterval(function() {
        self.update.call(self);
    }, options.speed);
};

world.prototype.update = function() {
    this.ps.update();
    this.draw();
};

world.prototype.draw = function() {
	if (this.doClearEachFrame) {
		this.clear();
	}
    this.ps.draw();
};

world.prototype.clear = function() {
	this.context.clearRect(0, 0, this.canvas.width,this.canvas.height);
};

world.prototype.toggleClearEachFrame = function() {
	this.clear();
	this.doClearEachFrame = !this.doClearEachFrame;
};

world.prototype.resize = function(width, height) {
	this.canvas.width = width;
	this.canvas.height = height;
	this.clear();
};
