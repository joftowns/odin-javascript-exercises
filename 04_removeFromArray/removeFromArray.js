const removeFromArray = function(array, deletion) {
	let target = array.indexOf(deletion);  //finds the index of "deletion" element in the array
	array.splice(target, 1); //at that index, removes 1 element
	return array; //returns the new array
};


//const foo = function () {
//	for (let i = 0; i < arguments.length; i++) {
//		console.log(arguments[i]);
//	}
//}

// Do not edit below this line
module.exports = removeFromArray;
