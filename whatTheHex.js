$.fn.hexed = function (settings) {
	if !settings.hasOwnProperty('difficulty') {
		settings.difficulty = 5;
	}
	
	if !settings.hasOwnProperty('turns') {
		settings.turns = 10;
	}

	// TODO everything

	return this;
};