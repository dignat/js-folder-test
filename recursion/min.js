// custom Math.min() function

const customMin = (num1, num2) => num1 < num2 ? num1 : num2;

console.log(customMin(-5, 1));

function isEven(num) {
    if (num < 0) return;
    return num % 2 === 0;    
}

console.log(isEven(5))

const countsCaps = (string) => {
    const caps = string.match(/[A-Z]/g)
    return caps.length;
}

const countOccurence = (string, char) => {
    const chars = string.match(new RegExp(char, 'g')).length
    return chars;
}

console.log(countsCaps("BBc"))
console.log(countOccurence('nnnty', 'n'));