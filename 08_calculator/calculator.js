const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
  let sum = nums.reduce((sum, item) => {
    sum += item;
    return sum;
  }, 0);
  return sum;
};

const multiply = function(nums) {
  let mul = nums.reduce((mul, item) => {
    mul *= item;
    return mul;
  }, 1);
  return mul;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  if (num <= 1) {
    return 1;
  }
  else {
    return num * factorial(num - 1);
  };
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
