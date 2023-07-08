const removeFromArray = function() {
	let array = arguments[0]; //takes the first argument (hopefully an array)
                            //and assigns it to "array"
	for (let i = 1; i < arguments.length; i++) { //starts at the second argument
    //finds the index of the argument within the array
    let target = array.indexOf(arguments[i]);
    //skip to the next iteration if that argument is not found
    if (target === -1) continue;
    //splices the element from that index (hopefully)
		array.splice(target, 1);
	}
	return array;
};

// Do not edit below this line
module.exports = removeFromArray;
