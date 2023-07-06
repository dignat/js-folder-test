const data = ['vote2', 'vote1', 'vote1', 'vote2'];
const reducer = (acc, value) => {
    if (acc[value]) {
        acc[value] = acc[value] + 1;
    } else {
        acc[value] = 1;
    }
    return acc;
}

const tally = data.reduce(reducer, {});

console.log(tally);

const items = [
    {item: 'T-shirt', status: 'delivered'},
    {item: 'T-shirt1', status: 'delivered'},
    {item: 'T-shirt2', status: 'delivered'},
    {item: 'T-shirt3', status: 'packeged'},
    {item: 'T-shirt4', status: 'delivered'},
    {item: 'T-shirt5', status: 'packeged'},
    {item: 'T-shirt6', status: 'packeged'},
]

const statusOfItems = items.reduce((accumulator, item) => {
    const group = accumulator[item.status] ?? [];
    return {...accumulator, [item.status]: [...group, item.item] }
}, {});

console.log(statusOfItems)