// assert function 
function assert(condition: boolean, message: string): asserts condition {
    if (!condition) {
        throw Error(message);
    }
}
function assertIsNumber(value: unknown, name: string): asserts value is number {
    if (typeof value !== "number") {
        throw Error(`Expected ${name} to be a number`)
    }
}
// overloading function to type safe it / allowing only specific type to be passed as aparams
function range(from: number, to: number): number[];
function range(from: unknown, to: unknown): number[] {
    assert(typeof from === "number" && typeof to === "number", 
    'range() accepts exactly 2 numbers')

    assertIsNumber(from, "from");
    assertIsNumber(to, "to");

    const values: number[] = [];
    for (let i = from; i < to; i++) {
        values.push(i);
    }
    return values;
}

console.log(range("A" as any, 5));