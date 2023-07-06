function interperse<T>(array: readonly T[], separator: T): T[] {
    const newArray: T[] = [];
    for (const element of array) {
        if (newArray.length !== 0) {
            newArray.push(separator);
        }
        newArray.push(element);
    }

    return newArray;
}
const values: readonly string[] = ["A", "B", "C"];
// another way to declare readonly array
const values1: ReadonlyArray<string> = ["A", "B", "C"];
const valueWithSeparators = interperse(values, "X");

// read only tuple types

function swap<T, U>(tuple: readonly [T, U]): [U, T] {
    const [first, second] = tuple;
    return [second, first];
}

const keyValue: [number, string] = [1, "one"];
const readOnlykeyValue: readonly [number, string] = [2, "haha"];
const valueKey = swap(keyValue);

const readONlyValueKey = swap(readOnlykeyValue)

console.log(keyValue, valueKey, readONlyValueKey, readOnlykeyValue);
// make object propeeties immutable
const ORIGIN = {
    x: 0,
    y: 0,
} as const;

console.log(ORIGIN)
// another way is to set Object.freese()

const NOTORIGIN = Object.freeze({
    x: 1,
    y: 1
})

// as const assetion to make array read only tuple

const person = ["Nesrin", 50] as const;


// const assetion allows us to makr a varaible value as a literal type For example:

let onSwitch = "On" as const;

console.log(onSwitch)
// bare in mind const assertion can be applied only on simple expression
// for example this will not set onSwitch to type Off | On
function switchValue(input: boolean): string {
    let onSwitchP = (input ? "On" : "Off");
    onSwitchP = 'boo'
    return onSwitchP
}

// but this will

function switchValueWithAssetion(input: boolean): string {
    let onSwitchS = (input ? "On" as const : "Off" as const);
    // this will error onSwitchS = "s"
    return onSwitchS
}
