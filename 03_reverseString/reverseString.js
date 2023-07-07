const reverseString = function(phrase) {
	let reversedPhrase = '';
	for (let i = 1; i <= phrase.length; i++) {
		let letter = phrase.substr(-i, 1)
		reversedPhrase += letter;
	}
	return reversedPhrase;
};

//their solution is definitely cleaner!
//that is: phrase.split('').reverse().join('')
//.split splits each character into an array
//.reverse() reverses the array
//.join('') joins the elements of the array into a string
//separated by nothing ('')

// Do not edit below this line
module.exports = reverseString;
