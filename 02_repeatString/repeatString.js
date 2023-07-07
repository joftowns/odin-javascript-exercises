const repeatString = function (string, num) {
	let finalString = '';
	if ( num < 0) return 'ERROR';
	for (let i = 0; i < num; i++) {
		finalString = finalString + string;
	}
	return finalString;	
};

// output a string composed of 'string' concatenated num times


// Do not edit below this line
module.exports = repeatString;
