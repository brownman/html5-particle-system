var mainLoop = function(speed, canvas) {
    var self = this;
	this.canvas = canvas;
    this.ps = new particleSystem(this.canvas, 1000);
    setInterval(function() {
        self.update.call(self);
    }, speed);
};

mainLoop.prototype.update = function() {
    this.ps.update();
    this.draw();
};

mainLoop.prototype.draw = function() {
    this.canvas.width = this.canvas.width;
    this.ps.draw();
};