const withCount = fn => {
    let count = 0;

    return (...args) => {
        console.log(`Count call ${++count}`)
        return fn(...args)
    }
}

const add = (x, y) => x + y;

const countedAdd = withCount(add);

console.log(countedAdd(1,2))

const add3 = x => y => x + y;

console.log(add3(2)(5))