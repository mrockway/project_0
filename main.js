// $(function() {

// JS has loaded properly
console.log('Play Ball!');

var awayWin = 0;
var homeWin = 0;
var p1Pos = 0;
var p2Pos = 0;
var homeTeam = "";
var awayTeam = "";

$('.playNext').hide();
$('.ball').hide();
$('.scoreBoard').hide();
$('.gameBoard').hide();
$('#teamName2').hide();
$('.seriesWinner').hide();



//Select team name on change
function displayTeam1() {
    var tm1 = document.getElementById("teamName1");
    var i = tm1.selectedIndex;
    awayTeam = tm1.options[i].text;
    $('#away').replaceWith('<div id="away"><img class="logo" src=./team_logos/'+tm1.options[i].id+'.png><h2 class="teamName">'+tm1.options[i].text+'</h2></div>');
    $('#teamName1').hide();
    $('#teamName2').show();
    return awayTeam;
}

function displayTeam2() {
    var tm2 = document.getElementById("teamName2");
    var i = tm2.selectedIndex;
    homeTeam = tm2.options[i].text;
    console.log(homeTeam);
    $('#home').replaceWith('<div id="home"><img class="logo" src=./team_logos/'+tm2.options[i].id+'.png><h2 class="teamName">'+tm2.options[i].text+'</h2></div>');
    $('#teamName2').hide();
    $('.gameBoard').show();
    $('.scoreBoard').show();
    $('.select').hide();
    return homeTeam;
}
//Eventually use to color backgrounds with team colors
var teamData = [["TeamName","Color1","Color2"],
								["Diamondbacks",'#A71930','#DBCEAC'],
								["Braves",'#002F5F','#B71234'],
								["Orioles",'#ed4c09','#000000'],
								["Red Sox",'#C60C30','#002244'],
								["Cubs",'#003279','#CC0033'],
								["White Sox",'#000000','#C0C0C0'],
								["Reds",'#C6011F','#000000'],
								["Indians",'#003366','#d30335'],
								["Rockies",'#333366','#C0C0C0'],
								["Tigers",'#001742','#DE4406'],
								["Astros",'#072854','#FF7F00'],
								["Royals",'#15317E','#74B4FA'],
								["Angels",'#B71234','#002244'],
								["Dodgers",'#083C6B'],
								["Marlins",'#F9423A','#8A8D8F'],
								["Brewers",'#182B49','#92754C'],
								["Twins",'#072754','#C6011F'],
								["Mets",'#002C77','#FB4F14'],
								["Yankees",'#1C2841','#808080'],
								["A's",'#003831','#FFD800'],
								["Phillies",'#BA0C2F','#003087'],
								["Pirates",'#000000','#fdb829'],
								["Padres",'#002147','#B4A76C'],
								["Giants",'#F2552C','#FFFDD0'],
								["Mariners",'#0C2C56','#005C5C'],
								["Cardinals",'#c41e3a','#0A2252'],
								["Rays",'#00285D','#9ECEEE'],
								["Rangers",'#BD1021','#003279'],
								["Blue Jays",'#003DA5','#041E42'],
								["Nationals",'#BA122B','#11225B']];

//Create Countdown Timer
 $('.playBall').click(function(event){
	$('button').hide();
	var count = 4;
	function timer() {
		if (count > 1) {
			count --;
			$('.timerClass').text(count);
			setTimeout(timer, 1000);
		}
		else if (count === 1) {
			$('.timerClass').text('PLAY BALL');
			count --;
			setTimeout(timer, 1000);
		}
		else if (count === 0) {
			$('.ball').show();
			$('.timerClass').hide();
			gamePlay();
		}
	}
	timer();
 });

// Set up restart button


//Play the next game, keeps win count
$('.playNext').click(function(event) {
	$('.playBall').show();
	$('.restart').show();
	$('.timerClass').show();
	$('.ball').hide();
	$('.playNext').hide();
	$('.displayWinner').hide();
	$('.timerClass').text('');
	$('.awayBall').css({left: 0});
	$('.awayBall').removeClass('spin');
	$('.homeBall').css({left: 0});
	$('.homeBall').removeClass('spin');
	p1Pos = 0;
	p2Pos = 0;
	return p1Pos,p2Pos;
});


//Complete restart of game
$('.restart').click(function(event) {
	$('.playBall').show();
	$('#teamName1').show();
	$('#teamName2').show();
	$('.title').show();
	$('.timerClass').show();
	$('.seriesWinner').hide();
	$('.ball').hide();
	$('.scoreBoard').hide();
	$('button').hide();
	$('.gameBoard').hide();
	$('.timerClass').text('');
	$('.awayBall').css({left: 0});
	$('.awayBall').removeClass('spin');
	$('.homeBall').css({left: 0});
	$('.homeBall').removeClass('spin');
	p1Pos = 10;
	p2Pos = 10;
	homeWin = 0;
	homeTeam = '';
	awayTeam = '';
	awayWin = 0;
	return p1Pos,p2Pos,homeWin,awayWin;
});


//Set up Player 1 moving by pressing "A"
function gamePlay () {
$(window).keypress(function(event) {
	if (p1Pos <= 960 && p2Pos <=960) {
		if (event.which === 97) {
			$('.awayBall').addClass('spin');
			$('.awayBall').css({left: "+=25"}, 'fast');
			p1Pos = p1Pos+25;
			determineWinner(p1Pos,p2Pos);
		}
	}
});

//Set up Player 2 moving by pressing "L"
$(window).keypress(function(event) {
	if (p2Pos <= 960 && p1Pos <=960) {
		if (event.which === 108) {
			$('.homeBall').addClass('spin');
			$('.homeBall').css({left: "+=25"}, 'fast');
			p2Pos = p2Pos+25;
			determineWinner(p1Pos,p2Pos);
		}
	}
});
}

//Determine Winner

function determineWinner (p1Pos, p2Pos) {
	if (p1Pos >=960 && p2Pos < p1Pos ) {
		$('.displayWinner').text(awayTeam + " Win");
		awayWin++;
		$('.awayRuns').text('Wins: '+awayWin);
		$('.playNext').show();
	}
	else if (p2Pos >=960 && p1Pos < p2Pos ){
		$('.displayWinner').text(homeTeam + " Win");
		homeWin++;
		$('.homeRuns').text('Wins: '+homeWin);
		$('.playNext').show();
	}
	seriesWinner(awayWin, homeWin);
}
function seriesWinner (awayWin,homeWin) {
	console.log(homeWin + " h a" +awayWin);
	if (awayWin === 4) {
		$('.playNext').hide();
		$('.restart').show();
		$('.seriesWinner').show();
		$('.seriesWinner').text(awayTeam + " have beaten the " +homeTeam + " and won the World Series");
	}
	else if (homeWin === 4) {
		$('.playNext').hide();
		$('.restart').show();
		$('.seriesWinner').show();
		$('.seriesWinner').text(homeTeam + " have beaten the " +awayTeam + " and won the World Series");
	}

}
// });