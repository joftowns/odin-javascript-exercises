const sumAll = function(a, b) {
  //swaps the values if a is larger than b
  if (a > b) {
    let temp = a;
    a = b;
    b = temp;
  }

  //returns an error if either value is negative
  if (a < 0 || b < 0) {
    return 'ERROR';
    //this seems like a silly way to do this but it worked
  } else if ( !(typeof a === "number" && typeof b === "number") ) {
    return 'ERROR';
  }

  let sum = 0;

  for (let i = a; i <= b; i++) {
    sum += i;
  };

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
