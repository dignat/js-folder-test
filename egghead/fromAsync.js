async function* generate(total, throttle) {
    for (let i = 0; i < total; ++i) {
        await new Promise((resolve) => setTimeout(resolve, throttle));
        yield i + 1;
    }
    
}
// Array.fromAsync allows you to get an array from asynchrounously generated collection
const array = new Array()
console.log(array)