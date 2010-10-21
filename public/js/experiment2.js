(function($){
	canvasEl = $("#particles").get(0);
	
	// testing tween.js
	var position = { x: 0 };
	var tween = new TWEEN.Tween(position).to({x: 400}, 2000).start();
	console.info("Tween: ", tween);
	
	world = new world({
		canvasEl: canvasEl,
		initialParticles: 100,
		clearEachFrame: true,
		speed: 33, // 30 FPS
		fullWindow: true,
		colors: ["#f36b21", "#e43c96", "#70c497", "#e3b0d1"],
		particleRadius: 3
		}, {
		worldUpdated: function() {
			numSpan = $("#num-particles");
			numSpan.html(this.numParticles());
		},
		drawParticle: function() {
			var ctx = this.parent.world.context;
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true); 
			ctx.closePath();
			ctx.fill();
		}
	});
})(window.jQuery);






















