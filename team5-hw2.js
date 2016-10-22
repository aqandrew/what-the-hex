$.fn.hexed = function (settings) {
	if !settings.hasOwnProperty('difficulty') {
		settings.difficulty = 5;
	}
	
	if !settings.hasOwnProperty('turns') {
		settings.turns = 10;
	}
	
	var actualColor = randomColor();

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

// TODO scoring function
// TODO CheckIt! button
// TODO jQuery UI sliders which update RGB values
// TODO challenge