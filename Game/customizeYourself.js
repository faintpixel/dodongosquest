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
		
	io.setFramerate(60, function(){
		if (background1.pos.x > 1275)
			background1.pos.x = -426;
		if (background2.pos.x > 1275)
			background2.pos.x = -426;
	});	
	
};