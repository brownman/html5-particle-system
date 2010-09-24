(function($){
	canvasEl = $("#particles").get(0);
	
   	world = new world({
		canvasEl: canvasEl,
		initialParticles: 10000,
		clearEachFrame: true,
		speed: 33, // 30 FPS
		fullWindow: true
		}, {
		worldUpdated: function() {
			numSpan = $("#num-particles");
			numSpan.html(this.numParticles());
		}
	});
			
	$("#add-particles").click(function(e) {
		e.preventDefault();
		world.ps.addParticles(1000);
	});
	
	$("#remove-particles").click(function(e) {
		e.preventDefault();
		world.ps.removeParticles(1000);
	});
	
	$("#clear-each-frame").click(function(e) {
		e.preventDefault();
		world.toggleClearEachFrame();
	});
	
	$("#clear").click(function(e) {
		e.preventDefault();
		world.clear();
	});
})(window.jQuery);






















