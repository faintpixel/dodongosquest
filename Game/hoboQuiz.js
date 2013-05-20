HoboQuiz = function(io){
	io.setBGColor('#000');
	
	$('body').append('<div id="hoboQuiz"><div id="dialog"></div><input type="text" id="answer" name="answer" /><div id="alert"></div></div>');
	$('head').append('<style> #answer{display:none;} #hoboQuiz{ font-family: \'Press Start 2P\', cursive; position: absolute; top: 100px; left: 222px; text-align: center; width: 400px; font-size: 20px; color:white; } </style>');

var content = [];
var setup = [];
var dIndex = 0;

setup = [    
'Hey Mister, spare some change?',
    'I know what you thinkin...',
    '"That\'s some dirty old hobo"',
    'but its not true, I\'m actually a bidoof stuck in a man\'s body',
    'If you give me a kiss I will be free of this prison!',
    'No? I can see that you are cool guy who doesn\'t afraid of any pokemon',
    'If you answer these pokemon questions you might lift the curse',
    ];

 content = [
['What article of clothing was given to Dobby by mistake?','sock'],
['Chris Buzelli is a professor of illustration at what University?','rhode island institute of design'],
['A squared plus B squared equals what?','c squared'],
['Which pokemon is yellow and all like "bzzt?"','pikachu'],
['2 men enter, how many leave?','one'],
['August 1st 1981, MTV launched. What was the first song that was played?','video killed the radio star'],
['You\'re sitting on the subway and a hipster drops his satchel. You root around inside and discover a 1 lbs bag of drugs. Mistaking it for oregano, you sprinkle half of it on a 1 square inch of cheese you find in an old pizza box. You split the cheese in half and share with your dog, Felix. How many ounces of drugs did you accidentally consume? ','4']
 ];



$('#answer').bind('keypress', function(event) {
    if ( event.which == 13 ) {
   $('#dialog').html(content[dIndex][0]);
    if ($('#answer').val() == content[dIndex][1]) {
        dIndex += 1;
        $('#dialog').html(content[dIndex][0]);
        $("#answer").val('') ;
          
        $('#alert').html("<h1>Awesome!</h1>");
        $('#alert').delay(800).queue(function(n) { 
          $(this).html(""); n();
        });
    }
    else {
        $('#alert').html("nope!");
        $('#alert').delay(300).queue(function(n) { 
          $(this).html(""); n();
        });
       }
}
});

$(document).ready(function() {
    
    $("#dialog").html(setup[0]);
    $('#dialog').delay(1200).queue(function(n) { 
      $(this).html(setup[1]); n();
    });
    $('#dialog').delay(1600).queue(function(n) { 
      $(this).html(setup[2]);n();
    });
    $('#dialog').delay(2000).queue(function(n) { 
      $(this).html(setup[3]); n();
    });
    $('#dialog').delay(2400).queue(function(n) { 
      $(this).html(setup[4]); n();
    });
    $('#dialog').delay(2800).queue(function(n) { 
      $(this).html(setup[5]); n();
    });
    $('#dialog').delay(3200).queue(function(n) { 
      $(this).html(setup[6]);n();
              
    });
     $('#dialog').delay(3600).queue(function(n) { 
      $(this).html(content[0][0]);n();
      $("#answer").show();
    });

	currentGameDisposalMethod = function Dispose() {
		window.removeEventListener('keydown', keyboardHandler);
		io.rmvAll();
		io.draw();
	};
    
});
};