var isPrimeNumber = function (n) {
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};
console.log(isPrimeNumber(4));
