const checkISBN = (array) => {
    console.log(array)
    let t = 0;
    let s = 0;

    for (let i = 0; i < 10; i++) {
        t += array[i];
        s += t;
    }
console.log(s)
    return s % 11;
}

const convertString = (string) => {
    return [...string.replace(/-/g, '')].map((item) => Number(item))
}

const findNaN = (array) => array.findIndex((n) => Number.isNaN(n));

const stringContainX = (string) => {
    let transformed = '';
    if (string.charAt(string.length-1).includes('X')) {
        transformed = string.replace('X', '');
       let transArray = convertString(transformed);
        transArray = [...transArray, 10];
       
      return transArray;
    } else {
      return convertString(string);
    }
}

let isbn = "98245726788";

let array = stringContainX(isbn)
console.log(array)
console.log(checkISBN(array));

console.log((9 * 10 + 8 * 9 + 2 * 8 + 4 * 7 + 5 * 6 + 7 * 5 + 2 * 4 + 6 * 3 + 7 * 2 + 8 * 1 + 8 ) % 11 )
