$(function() {

  // JS has loaded properly
  console.log('Start your engines!');
  
  // Set up reset button
  $('.restart').click(function(event) {
  	console.log("You clicked reset.");
  });


  //Set up Player 2 moving by pressing "A"
  $(window).keypress(function(event) {
  	if(event.which === 97) {
  		console.log("you pressed a");
  		$('#p1').animate({left: "+=50"}, 0);  
  	}
  });


  //Set up Player 2 moving by pressing "L"
   $(window).keypress(function(event) {
  	if(event.which === 108) {
  		console.log("you pressed l");
  		$('#p2').animate({left: "+=50"}, 0);  
  	}
  });


  //Determine Winner
  

});