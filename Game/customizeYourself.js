CustomizeYourself = {};

CustomizeYourself.Initialize = function(io) {
	CustomizeYourself.background1 = new iio.ioRect(426, 300)
		.enableKinematics()
		.setVel(2,0)
		.createWithImage('Resources/CustomizeYourself/background.jpg', function(){
			io.addToGroup('background', CustomizeYourself.background1, -10);
		});
	
	CustomizeYourself.background2 = new iio.ioRect(-426, 300)
		.enableKinematics()
		.setVel(2,0)
		.createWithImage('Resources/CustomizeYourself/background.jpg', function(){
			io.addToGroup('background', CustomizeYourself.background2, -10);
		});
	
	CustomizeYourself.title = new iio.ioRect(400, 63)
		.createWithImage('Resources/CustomizeYourself/title.png', function(){
			io.addToGroup('foreground', CustomizeYourself.title, 1);
		});
		
	CustomizeYourself.pictureFrame = new iio.ioRect(156, 337)
		.createWithImage('Resources/CustomizeYourself/pictureFrame.png', function(){
			io.addToGroup('foreground', CustomizeYourself.pictureFrame, 1);
		});
};

CustomizeYourself.Update = function() {
/*	if (background1.pos.x > 1273)
		background1.pos.x = -426;
	if (background2.pos.x > 1273)
		background2.pos.x = -426;*/
};

CustomizeYourself.HandleKeyboardInput = function(event) {
	ChangeGameModule(MainMenu);
};

CustomizeYourself.Dispose = function(io) {
	io.rmvAll();
	io.draw();
};


