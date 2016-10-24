$.fn.hexed = function (settings) {
	if !settings.hasOwnProperty('difficulty') {
		settings.difficulty = 5;
	}
	
	if !settings.hasOwnProperty('turns') {
		settings.turns = 10;
	}
	
	var actualColor = randomColor();
	
	// Gameplay logic goes here

	return this;
};

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

function getScore(expectedColor, actualColor, timeElapsed, settings) {
	var percentageOff = 0;
	
	for (var component in expectedColor) {
		percentageOff += Math.abs(expectedColor[component] - actualColor[component]) / 255 * 100;
	}
	
	percentageOff /= 3;
	var score = (((15 - settings.difficulty - percentageOff) / (15 - settings.difficulty)) * (15000 - timeElapsed)).toFixed(2);
	
	return score;
}

// TODO CheckIt! button
// TODO jQuery UI sliders which update RGB values
// TODO challenge