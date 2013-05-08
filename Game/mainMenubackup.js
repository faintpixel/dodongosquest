MainMenu = function(io){
	var menuIndex = 0;
	
	io.setBGImage('img/mainMenu.png');

	var menuSelector = new iio.ioRect(23, 534)
		.createWithImage('img/menuSelector.png', function(){io.addObj(menuSelector)});

	window.addEventListener('keydown', function(event){
		if (iio.keyCodeIs('left arrow', event))
			MoveMenuSelection(-1);
		else if (iio.keyCodeIs('right arrow', event))
			MoveMenuSelection(1);
		else if (iio.keyCodeIs('enter', event))
			if(menuIndex == 0) {
				alert("NO NEW GAME FOR YOU");
				iio.stop(MainMenu);
				iio.start(CustomizeYourself);
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
			menuSelector.setPos(23, 534);
		}
		else {
			menuSelector.setPos(330, 534);
		}
		
		io.draw();
	}
	
};