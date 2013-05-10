CustomizeYourself = {};

CustomizeYourself.SelectedIndex = 0;

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
		
	CustomizeYourself.hairStyleSelector = new iio.ioRect(550, 151)
		.createWithImage('Resources/CustomizeYourself/SelectedSelector.png', function(){
			io.addToGroup('foreground', CustomizeYourself.hairStyleSelector, 1);
		});
		
	CustomizeYourself.facialHairStyleSelector = new iio.ioRect(550, 241)
		.createWithImage('Resources/CustomizeYourself/UnselectedSelector.png', function(){
			io.addToGroup('foreground', CustomizeYourself.facialHairStyleSelector, 1);
		});
	
	CustomizeYourself.clothingStyleSelector = new iio.ioRect(550, 331)
		.createWithImage('Resources/CustomizeYourself/UnselectedSelector.png', function(){
			io.addToGroup('foreground', CustomizeYourself.clothingStyleSelector, 1);
		});
	
	CustomizeYourself.accessorySelector = new iio.ioRect(550, 421)
		.createWithImage('Resources/CustomizeYourself/UnselectedSelector.png', function(){
			io.addToGroup('foreground', CustomizeYourself.accessorySelector, 1);
		});
	
	CustomizeYourself.accept = new iio.ioRect(669, 537)
		.createWithImage('Resources/CustomizeYourself/Accept.png', function(){
			io.addToGroup('foreground', CustomizeYourself.accept, 1);
		});
};

CustomizeYourself.Update = function() {
	if (CustomizeYourself.background1.pos.x > 1273)
		CustomizeYourself.background1.pos.x = -426;
	if (CustomizeYourself.background2.pos.x > 1273)
		CustomizeYourself.background2.pos.x = -426;
};

CustomizeYourself.HandleKeyboardInput = function(event) {
	if (iio.keyCodeIs('up arrow', event))
		CustomizeYourself.SelectedIndex--;
	else if (iio.keyCodeIs('down arrow', event))
		CustomizeYourself.SelectedIndex++;
	
	if(CustomizeYourself.SelectedIndex < 0)
		CustomizeYourself.SelectedIndex = 4;
	else if(CustomizeYourself.SelectedIndex > 4)
		CustomizeYourself.SelectedIndex = 0;
		
	CustomizeYourself.UpdateSelection();	
};

CustomizeYourself.UpdateSelection = function() {
	CustomizeYourself.hairStyleSelector.img.src = "Resources/CustomizeYourself/UnselectedSelector.png";
	CustomizeYourself.facialHairStyleSelector.img.src = "Resources/CustomizeYourself/UnselectedSelector.png";
	CustomizeYourself.clothingStyleSelector.img.src = "Resources/CustomizeYourself/UnselectedSelector.png";
	CustomizeYourself.accessorySelector.img.src = "Resources/CustomizeYourself/UnselectedSelector.png";
	CustomizeYourself.accept.img.src = "Resources/CustomizeYourself/Accept.png";

	if(CustomizeYourself.SelectedIndex == 0)
		CustomizeYourself.hairStyleSelector.img.src = "Resources/CustomizeYourself/SelectedSelector.png";
	if(CustomizeYourself.SelectedIndex == 1)
		CustomizeYourself.facialHairStyleSelector.img.src = "Resources/CustomizeYourself/SelectedSelector.png";
	if(CustomizeYourself.SelectedIndex == 2)
		CustomizeYourself.clothingStyleSelector.img.src = "Resources/CustomizeYourself/SelectedSelector.png";
	if(CustomizeYourself.SelectedIndex == 3)
		CustomizeYourself.accessorySelector.img.src = "Resources/CustomizeYourself/SelectedSelector.png";
	if(CustomizeYourself.SelectedIndex == 4)
		CustomizeYourself.accept.img.src = "Resources/CustomizeYourself/AcceptSelected.png";
};

CustomizeYourself.Dispose = function(io) {
	io.rmvAll();
	io.draw();
};



