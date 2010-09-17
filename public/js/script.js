(function($){	
    var canvas = $("#particles").get(0);
    var loop = new mainLoop(16, canvas); // 60 FPS
   	
	$("#add-particles").click(function(e) {
		e.preventDefault();
		loop.ps.addParticles(1000);
	});
	
	$("#remove-particles").click(function(e) {
		e.preventDefault();
		loop.ps.removeParticles(1000);
	});
})(window.jQuery);






















