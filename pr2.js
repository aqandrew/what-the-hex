var difficulty = 5;
var turns = 10;

var start = new Date().getTime();
var totalScore = 0;
var turnCount = 0;

var defaultRed = 0;
var defaultBlue = 0;
var defaultGreen = 0;

var settings = {numTurns:10, numDifficulty: 5};

$(document).ready(function() {
	$.fn.hexed = function (settings) {
		turns = settings.numTurns;
		difficulty = settings.numDifficulty;

		var randColors = randomColor();
		defaultRed = randColors.red;
		defaultBlue = randColors.blue;
		defaultGreen = randColors.green;

		var element = this.get(0);
		var editElement = element.getContext("2d");


		editElement.beginPath();
		editElement.arc(100, 75, 50, 0, 2 * Math.PI);
		editElement.fillStyle = "rgb("+Math.round(defaultRed) +"," + Math.round(defaultGreen) +"," +Math.round(defaultBlue)+")";
		editElement.stroke();
		editElement.fill();
		
		return this;
	};
});


function randomValue(maxExclusive) {
	return Math.random() * maxExclusive;
}

function randomColor() {
	var red = randomValue(256);
	var green = randomValue(256);
	var blue = randomValue(256);
	
	return {
		'red': red,
		'green': green,
		'blue': blue
	};
}

function getScore() {
	if (turnCount == turns) {
		alert("Final Score is " + totalScore);
		$("#thisRound").text("Round Score: 0");
		$("#totalScore").text("Total Score: 0");
		totalScore = 0;
		turnCount = 0;
		start = new Date().getTime();
		return;
	}
	var redPercent = (Math.abs(defaultRed - $("#red").slider("value"))/255 * 100);
	var bluePercent = (Math.abs(defaultBlue - $("#blue").slider("value"))/255 * 100);
	var greenPercent = (Math.abs(defaultGreen - $("#green").slider("value"))/255 * 100);

	alert("Red % Difference: " + redPercent.toFixed(2) +"\nGreen % Difference: "+greenPercent.toFixed(2)+"\nBlue % Difference: "+bluePercent.toFixed(2));

	var percentageOff = (redPercent + greenPercent + bluePercent) / 3;
	var totalTime = start - (new Date().getTime());

	var roundScore = ((15 - difficulty - percentageOff)/(15-difficulty)) * (15000-totalTime);
	
	if (roundScore < 0) {
		roundScore = 0;
	}

	totalScore += roundScore;
	$("#thisRound").text("Round Score: " + roundScore.toFixed(2));
	$("#totalScore").text("Total Score: " + totalScore.toFixed(2));

	turnCount += 1;
	$("#myCanvas").hexed(settings);
}

function fixRed() {
	var red = $("#colorpickerField1").val();
	$("#red").slider("value", red);
}
function fixGreen() {
	var green = $("#colorpickerField2").val();
	$("#green").slider("value", green);
}
function fixBlue() {
	var blue = $("#colorpickerField3").val();
	$("#blue").slider("value", blue);
}


function drawCircle() {
	var element = document.getElementById("myCanvas2");
	var editElement = element.getContext("2d");

	var red = $("#red").slider("value");
	var blue = $("#blue").slider("value");
	var green = $("#green").slider("value");

	$("#colorpickerField1").val(red);
	$("#colorpickerField2").val(green);
	$("#colorpickerField3").val(blue);

	editElement.fillStyle = "rgb("+Math.round(red) +"," + Math.round(green) +"," +Math.round(blue)+")";
	editElement.stroke();
	editElement.fill();
}

$(document).ready(function() {
	$( "#red" ).slider().slider( "value", 255 );
	$( "#green" ).slider().slider( "value", 140 );
	$( "#blue" ).slider().slider( "value", 60 );

	$("#red").slider({
	  orientation: "horizontal",
	  range: "min",
	  max: 255,
	  value: 0,
	  slide: drawCircle,
	  change: drawCircle
	});
	$("#green").slider({
	  orientation: "horizontal",
	  range: "min",
	  max: 255,
	  value: 0,
	  slide: drawCircle,
	  change: drawCircle
	});
	$("#blue").slider({
	  orientation: "horizontal",
	  range: "min",
	  max: 255,
	  value: 0,
	  slide: drawCircle,
	  change: drawCircle
	});

	var element = document.getElementById("myCanvas2");
	var editElement = element.getContext("2d");
	editElement.beginPath();
	editElement.arc(100, 75, 50, 0, 2 * Math.PI);
	editElement.fillStyle = "rgb(0,0,0)";
	editElement.stroke();
	editElement.fill();

	$("#myCanvas").hexed(settings);
});

