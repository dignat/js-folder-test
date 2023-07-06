// merge sort

function mergeSort(array) {
    if (array.length < 2) {
        return array
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle)

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {

    const sorted = [];
while (left.length && right.length) {
     if (left[0] <= right[0]) {
        sorted.push(left.shift());
    } else {
        sorted.push(right.shift());
    }
}
   const results = [...sorted, ...left, ...right];
   console.log(results);
   return results;

}

const numbers = [10,5,4,7,8,2,1,3,9,6];

// quick sort break down the original array to smaller arrays
// finding a pivot in the data to compare every element of the array to it and then
// insert it at 'left' or at the 'right' array depend on the result of the comparison


function quickSort(array) {
    if (array.length < 2) {
        return array;
    }

    const pivotIndex = array.length -1;
    const pivot = array[pivotIndex];
    const left = [];
    const right = []
    for (let i = 0; i < pivotIndex; i++) {
        const current = array[i];
        current < pivot ? left.push(current) : right.push(current);
    }
   const result = [...quickSort(left), pivot, ...quickSort(right)];
console.log(result, pivot);
   return result;
}

quickSort(numbers);
