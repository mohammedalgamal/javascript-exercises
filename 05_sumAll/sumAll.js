function isPositiveInt(num) {
    if (typeof(num) === 'number' && num > 0) {
        return true;
    }

    return false;
};

const sumAll = function(num1, num2) {
    // Return Error if any argument is not a positive integer
    if (!(isPositiveInt(num1) && isPositiveInt(num2))) {
        return 'ERROR';
    }

    // Make sure the first argument is the smallest
    if (num1 > num2) {
        let temp;
        temp = num1;
        num1 = num2;
        num2 = temp;
    }

    // Do the sum
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
