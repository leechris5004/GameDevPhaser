// MenuState constructor
let endState = function() {
	// EMPTY
};

// Override create, start MenuState
endState.prototype.create = function() {
	// Add background
	//this.background = game.add.sprite(0, 0, "Titlescreen");
	
	// Add game title text
	let style_ = {
		font: "bold 60pt Arial",
		fill: "#ffffff",
		align: "center"
	};
	let text_ = game.add.text(game.world.centerX, game.world.centerY-100, "GAME OVER", style_);
	text_.anchor.setTo(0.5, 0.5);
	
	// Add start button
	let menuButton = game.add.button(0, 0, "Restart", function(Button, Pointer, isOver) {
		// Fade to black
		game.camera.fade('#000000');
		game.camera.onFadeComplete.add(function() {
			game.state.start("MenuState");
		},this);
	}, this, 1, 0, 2, 0);
	menuButton.scale.x = 3;
	menuButton.scale.y = 3;
	menuButton.centerX = game.world.centerX;
	menuButton.centerY = game.world.centerY + 250;
};
