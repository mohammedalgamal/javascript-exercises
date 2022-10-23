const fibonacci = function(num) {
    num = Number(num);
    if (num < 0) {
        return 'OOPS'
    };
    fib = [0, 1];
    num--;
    while (num >= 1) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
        num--;
    };
    return fib[fib.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
