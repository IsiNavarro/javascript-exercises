const add = function(a, b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
  let sum = 0;
  array.forEach(num => {
    sum += num;
  })
  return sum;
};

const multiply = function(array) {
  let product = 1;
  array.forEach(num => {
    product = product*num;
  });
  return product;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  let factorial = 1;
	for(let i = 1; i<=a; i++){
    factorial = factorial * i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
