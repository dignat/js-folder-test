// similar to curry with a difference that it returns result instantly instead of 
// returning another function down the currying chain

const partial = (func, ...args) => {
    return function partialApplied(...moreArgs) {
        return func(...args, ...moreArgs);
    }
}
// optimize the function
function calculate(...args) {
    return args.reduce((acc, curr) => acc * cur);
}

const multiply10By = partial(calculate, 8,2);

const result = multiply10By(5);

console.log(result);