MainMenu = {};

MainMenu.menuIndex = 0;

MainMenu.Initialize = function(io) {
	MainMenu.background1 = new iio.ioRect(800, 300)
		.enableKinematics()
		.setVel(0.07,0)
		.createWithImage('Resources/MainMenu/background.jpg', function(){
		io.addToGroup('background', MainMenu.background1, -10);
		});
		
	MainMenu.background2 = new iio.ioRect(-800, 300)
		.enableKinematics()
		.setVel(0.07,0)
		.createWithImage('Resources/MainMenu/background.jpg', function(){
			io.addToGroup('background', MainMenu.background2, -10);
		});
		
	MainMenu.title = new iio.ioRect(400, 64)
		.createWithImage('Resources/MainMenu/title.png', function(){
			io.addToGroup('foreground', MainMenu.title, 1);
		});

	MainMenu.newGame = new iio.ioRect(128, 574)
		.createWithImage('Resources/MainMenu/newGame.png', function(){
			io.addToGroup('foreground', MainMenu.newGame, 1);
		});
	
	MainMenu.loadGame = new iio.ioRect(570, 578)
		.createWithImage('Resources/MainMenu/loadGame.png', function(){
			io.addToGroup('foreground', MainMenu.loadGame, 1);
		});
	
	MainMenu.menuSelector = new iio.ioRect(22, 574)
		.createWithImage('Resources/MainMenu/menuSelector.png', function(){
			io.addToGroup('foreground', MainMenu.menuSelector, 1);
		});
};

MainMenu.Update = function() {
	if (MainMenu.background1.pos.x > 2100)
		MainMenu.background1.pos.x = -800;
	if (MainMenu.background2.pos.x > 2100)
		MainMenu.background2.pos.x = -800;
};

MainMenu.HandleKeyboardInput = function(event) {
	if (iio.keyCodeIs('left arrow', event))
		MainMenu.MoveMenuSelection(-1);
	else if (iio.keyCodeIs('right arrow', event))
		MainMenu.MoveMenuSelection(1);
	else if (iio.keyCodeIs('enter', event)) {
		if(MainMenu.menuIndex == 0) {
			ChangeGameModule(CustomizeYourself);
		}
		else
			alert("NOPE");
	}
};

MainMenu.MoveMenuSelection = function(modifier) {
	MainMenu.menuIndex += modifier;
	if(MainMenu.menuIndex > 1)
		MainMenu.menuIndex = 0;
	else if(MainMenu.menuIndex < 0)
		MainMenu.menuIndex = 1;
		
	if(MainMenu.menuIndex == 0) {
		MainMenu.menuSelector.setPos(22, 574);
	}
	else {
		MainMenu.menuSelector.setPos(320, 574);
	}
};

MainMenu.Dispose = function(io) {
	io.rmvAll();
	io.draw();
};











