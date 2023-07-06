const keep = (array: Array<string|number> , condition: MyCallback) => {
    let indexed: any = [];
array.map(condition).filter((item, index) => {
    if (item) {
        indexed.push(array[index])
    }
 })
console.log(indexed)
}

const discard = (array: []) => {

}

type MyCallback = (arg: any) => boolean



console.log(keep([1,2,3,4,5] , (e) => e % 2 === 0))