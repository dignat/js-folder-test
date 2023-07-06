// bubble sort

// loops through the array and checks 
// if  the current item > next item


function bubbleSort(array) {
    let swapped = false;

    do {
        swapped = false;
        array.forEach((item, index) => {
           if (item > array[index + 1]) {
            const temp = item;
            array[index] = array[index + 1];
            array[index + 1] = temp;
            swapped = true;
            
           }
        })
    } while(swapped)
    
    return array;
}

const array = [10, 4,6,5,7,9,1];

// insertion sort
// nested loop
// two loops

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            // check if next item is less than current item
            if (array[i] < array[j]) {
                const [item] = array.splice(i, 1);
                array.splice(j, 0, item);
            }
        }
    }
    return array;
}
console.log(performance.getEntries())

//console.log(insertionSort(array));

