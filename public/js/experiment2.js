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
		colors: ["#ff6b00", "#ff3b94", "#58deac", "#d7afff", "#9f6fd9", "#6fc330", "#ffff00", "#ff0000", "#74b1ad", "#808083"],
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
	
	$(document).keydown(function(event) {
		var keyDown = event.which;
		var eventMap = {
			65: world.ps.addParticles,
			68: world.ps.removeParticles
		};

		var method = _(eventMap).detect(function(value, key) {
			return keyDown == key;
		});

		method.call(world.ps, 100);
	});
})(window.jQuery);






















