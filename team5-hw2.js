$.fn.hexed = function (settings) {
	if !settings.hasOwnProperty('difficulty') {
		settings.difficulty = 5;
	}
	
	if !settings.hasOwnProperty('turns') {
		settings.turns = 10;
	}

	return this;
};

// TODO function to randomize RGB values
// TODO scoring function
// TODO CheckIt! button
// TODO jQuery UI sliders which pdate RGB values
// TODO challenge