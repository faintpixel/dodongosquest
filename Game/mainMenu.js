MainMenu = function(io){
	var menuIndex = 0;
	
	var background1 = new iio.ioRect(800, 300)
		.enableKinematics()
		.setVel(0.07,0)
		.createWithImage('Resources/MainMenu/background.jpg', function(){
			io.addToGroup('background', background1, -10);
		});
	
	var background2 = new iio.ioRect(-800, 300)
		.enableKinematics()
		.setVel(0.07,0)
		.createWithImage('Resources/MainMenu/background.jpg', function(){
			io.addToGroup('background', background2, -10);
		});
		
	var title = new iio.ioRect(400, 64)
		.createWithImage('Resources/MainMenu/title.png', function(){
			io.addToGroup('foreground', title, 1);
		});

	var newGame = new iio.ioRect(128, 544)
		.createWithImage('Resources/MainMenu/newGame.png', function(){
			io.addToGroup('foreground', newGame, 1);
		});
	
	var loadGame = new iio.ioRect(590, 544)
		.createWithImage('Resources/MainMenu/loadGame.png', function(){
			io.addToGroup('foreground', loadGame, 1);
		});
	
	var menuSelector = new iio.ioRect(22, 544)
		.createWithImage('Resources/MainMenu/menuSelector.png', function(){
			io.addToGroup('foreground', menuSelector, 1);
		});
	
	io.setFramerate(60, function(){
		if (background1.pos.x > 2100)
			background1.pos.x = -800;
		if (background2.pos.x > 2100)
			background2.pos.x = -800;
	});
	
	window.addEventListener('keydown', function(event){
		if (iio.keyCodeIs('left arrow', event))
			MoveMenuSelection(-1);
		else if (iio.keyCodeIs('right arrow', event))
			MoveMenuSelection(1);
		else if (iio.keyCodeIs('enter', event))
			if(menuIndex == 0) {
				Dispose();
				SwitchGame(CustomizeYourself);
			}
			else
				alert("NOPE");
	});
	
	function MoveMenuSelection(modifier) {
		menuIndex += modifier;
		if(menuIndex > 1)
			menuIndex = 0;
		else if(menuIndex < 0)
			menuIndex = 1;
			
		if(menuIndex == 0) {
			menuSelector.setPos(22, 544);
		}
		else {
			menuSelector.setPos(340, 544);
		}
		
		io.draw();
	}
	
	function Dispose() {
		io.rmvAll();
		io.draw();
	}
};