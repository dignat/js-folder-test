const delay = (ms) => new Promise(resolve => {
    setTimeout(resolve, ms)
});

async function* someGen() {
    await delay(1000);
    yield 1;
    await delay(1000);
    yield 2;
    await delay(1000);
    yield 3;
}

async function main() {
    // for await (const value of someGen()) {
    //     console.log(value);
    // }

    const generator = someGen();
    while(true) {
        const {value, done} = await generator.next();
        if (done) {
            break;
        }
        console.log(value)
    }
}
main();