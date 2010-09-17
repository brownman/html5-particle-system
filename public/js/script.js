(function($){
	canvasEl = $("#particles").get(0);
	
   	world = new world({
		canvasEl: canvasEl,
		initialParticles: 1000,
		clearEachFrame: true,
		speed: 33, // 30 FPS
		fullWindow: true
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
	
	$("header").fadeOut(4000);
})(window.jQuery);






















