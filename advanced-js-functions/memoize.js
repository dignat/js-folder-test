// create memoize function
const memoize = (func) => {
    const cache = new Map();
    return function () {
        const key = JSON.stringify(arguments);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result  = func.apply(this,arguments);
        cache.set(key, result);
        return result;
    }
}

function fib(n) {
    if (n < 2) return 1;

    return fib(n -1) + fib(n-2);

}

const memoizeFib = memoize(fib);