// $(function() {

// JS has loaded properly
console.log('Start your engines!');

// Set up reset button
//Bring Players back to starting line
$('.restart').click(function(event) {
	$('.racer1').css('left', '10px');
	$('.racer2').css('left', '10px');
	console.log("You clicked reset.");
});

var p1Pos = 10;
var p2Pos = 10;
//Set up Player 2 moving by pressing "A"
$(window).keypress(function(event) {
	console.log(p1Pos);
		if (event.which === 97) {
			if (p1Pos <= 810) {
			console.log("you pressed a");
			$('.racer1').animate({left: "+=25"}, 0);
			p1Pos = p1Pos+25;
			console.log(p1Pos);
		}
	}
});

//Set up Player 2 moving by pressing "L"
$(window).keypress(function(event) {
	console.log(p2Pos);
	if (p2Pos <= 810) {
		if (event.which === 108) {
			console.log("you pressed l");
			$('.racer2').animate({left: "+=25"}, 0);
			p2Pos = p2Pos+25;
			console.log(p2Pos);
		}
	}
});


//Determine Winner


// });