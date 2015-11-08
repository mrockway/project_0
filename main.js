// $(function() {

// JS has loaded properly
console.log('Play Ball!');

var teamData = [];

//Massive object of team names/colors
function Team (name,color1,color2) {
	this.name = name;
	this.color1 = color1;
	this.color2 = color2;
	teamData.push({team : [this.name, this.color1, this.color2]});
}
//Select team name on change

function displayTeam1() {
    var tm1 = document.getElementById("teamName1");
    var i = tm1.selectedIndex;
    $('#away').replaceWith('<div id="away"><h2>'+tm1.options[i].text+'</h2><br><img class="logo" src=./team_logos/'+tm1.options[i].id+'.png></div>');
}

function displayTeam2() {
    var tm2 = document.getElementById("teamName2");
    var i = tm2.selectedIndex;
    $('#home').replaceWith('<div id="away"><h2>'+tm2.options[i].text+'</h2><br><img class="logo" src=./team_logos/'+tm2.options[i].id+'.png></div>');
}

var diamondbacks = new Team ("Diamondbacks",'#A71930','#DBCEAC');
var braves  = new Team ("Braves",'#002F5F','#B71234');
var orioles  = new Team ("Orioles",'#ed4c09','#000000');
var red_sox  = new Team ("Red Sox",'#C60C30','#002244');
var cubs  = new Team ("Cubs",'#003279','#CC0033');
var white_sox  = new Team ("White Sox",'#000000','#C0C0C0');
var reds  = new Team ("Reds",'#C6011F','#000000');
var indians  = new Team ("Indians",'#003366','#d30335');
var rockies  = new Team ("Rockies",'#333366','#C0C0C0');
var tigers  = new Team ("Tigers",'#001742','#DE4406');
var astros  = new Team ("Astros",'#072854','#FF7F00');
var royals  = new Team ("Royals",'#15317E','#74B4FA');
var angels  = new Team ("Angels",'#B71234','#002244');
var dodgers  = new Team ("Dodgers",'#083C6B');
var marlins  = new Team ("Marlins",'#F9423A','#8A8D8F');
var brewers  = new Team ("Brewers",'#182B49','#92754C');
var twins  = new Team ("Twins",'#072754','#C6011F');
var mets  = new Team ("Mets",'#002C77','#FB4F14');
var yankees  = new Team ("Yankees",'#1C2841','#808080');
var athletics  = new Team ("A's",'#003831','#FFD800');
var phillies  = new Team ("Phillies",'#BA0C2F','#003087');
var pirates  = new Team ("Pirates",'#000000','#fdb829');
var padres  = new Team ("Padres",'#002147','#B4A76C');
var giants  = new Team ("Giants",'#F2552C','#FFFDD0');
var mariners  = new Team ("Mariners",'#0C2C56','#005C5C');
var cardinals  = new Team ("Cardinals",'#c41e3a','#0A2252');
var rays  = new Team ("Rays",'#00285D','#9ECEEE');
var rangers  = new Team ("Rangers",'#BD1021','#003279');
var blue_jays  = new Team ("Blue Jays",'#003DA5','#041E42');
var nationals  = new Team ("Nationals",'#BA122B','#11225B');

//Create scoreboard
function scoreBoard (){

	('.scoreBoard').append();
}

//Create Countdown Timer
$('.playBall').click(function(event){
	var count = 3;
	function timer() {
		if (count > 0) {
			$('.timerClass').addClass('counter');
			$('.timerClass').text(count);
			count --;
			console.log(count);
			setTimeout(timer, 1000);
		}
		else if (count === 0) {
			$('.timerClass').text("Play Ball");
			$('.timerClass').removeClass('counter');
			setTimeout(timer,1000);
			$('.timerClass').hide();
			gamePlay();
		}
	}
	timer();
});

// var count = 4;
// function anim() {
//     if (count > 0) {
//         console.log(count);
//         count--;
//         setTimeout(anim, 700);
//     }
//     else {
//         alert('hi');
//     }
// }
// anim();

// Set up reset button
//Bring Players back to starting line
$('.restart').click(function(event) {
	$('.awayBall').css('left', '10px');
	$('.awayBall').removeClass('spin');
	$('.homeBall').css('left', '10px');
	$('.homeBall').removeClass('spin');
	p1Pos = 10;
	p2Pos = 10;
	console.log(p1Pos+"You clicked reset."+p2Pos);
	return p1Pos, p2Pos;
});

var p1Pos = 10;
var p2Pos = 10;
//Set up Player 1 moving by pressing "A"
function gamePlay () {
$(window).keypress(function(event) {
	console.log(p1Pos);
	if (p1Pos <= 1100 && p2Pos <=1100) {
		if (event.which === 97) {
			$('.awayBall').addClass('spin');
			$('.awayBall').stop().animate({left: "+=25"}, 'fast');
			p1Pos = p1Pos+25;
			determineWinner(p1Pos,p2Pos);
			console.log(p1Pos);
			return p1Pos, p2Pos;
		}
		else {
			console.log('player 2 already won.');
		}
	}
});

//Set up Player 2 moving by pressing "L"
$(window).keypress(function(event) {
	console.log(p2Pos);
	if (p2Pos <= 1100 && p1Pos <=1100) {
		if (event.which === 108) {
			$('.homeBall').addClass('spin');
			$('.homeBall').stop().animate({left: "+=25"}, 'fast');
			p2Pos = p2Pos+25;
			console.log(p2Pos);
			determineWinner(p1Pos,p2Pos);
			return p1Pos, p2Pos;
		}
	}
	else {
		console.log('player 1 already won.');
	}
});
}

//Determine Winner

function determineWinner (p1Pos, p2Pos) {
	if (p1Pos >=1100 && p2Pos < p1Pos ) {
		alert("p1 wins");
		awayWin++;
		scoreBoard(awayWin);
		return awayWin;
	}
	else if (p2Pos >=1100 && p1Pos < p2Pos ){
		alert("p2 wins");
		homeWin++;
		return homeWin;
	}
}


// });