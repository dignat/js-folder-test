function* create3To4Counter() {
    yield 3;
   yield 4;
}
function* createCounter() {
    yield 1;
    yield 2;
   // const four = yield* create3To4Counter();
   // console.log(4)
   yield* create3To4Counter();
    yield 5;
}

const counter = createCounter();

for (let i of counter) {
    console.log(i);
}