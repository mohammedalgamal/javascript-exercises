function isEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    };

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    };

    return true;
}

const palindromes = function (str) {
    str = str.toLowerCase()
    str = str.split('');
    let letters = str.filter(item => !(item === ' ' || item === ',' || item === '.' || item === '!'));
    let rev = [...letters].reverse();
    if (isEqual(letters, rev)) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
