CustomizeYourself = function(io){
	var background1 = new iio.ioRect(426, 300)
		.enableKinematics()
		.setVel(2,0)
		.createWithImage('Resources/CustomizeYourself/background.jpg', function(){
			io.addToGroup('background', background1, -10);
		});
	
	var background2 = new iio.ioRect(-426, 300)
		.enableKinematics()
		.setVel(2,0)
		.createWithImage('Resources/CustomizeYourself/background.jpg', function(){
			io.addToGroup('background', background2, -10);
		});
	
	var title = new iio.ioRect(400, 63)
		.createWithImage('Resources/CustomizeYourself/title.png', function(){
			io.addToGroup('foreground', title, 1);
		});
		
	var pictureFrame = new iio.ioRect(156, 337)
		.createWithImage('Resources/CustomizeYourself/pictureFrame.png', function(){
			io.addToGroup('foreground', pictureFrame, 1);
		});
		
	io.setFramerate(60, function(){
		if (background1.pos.x > 1275)
			background1.pos.x = -426;
		if (background2.pos.x > 1275)
			background2.pos.x = -426;
	});	
	
	currentGameDisposalMethod = function Dispose() {
		//window.removeEventListener('keydown', keyboardHandler);
		io.rmvAll();
		io.draw();
	};
	
};