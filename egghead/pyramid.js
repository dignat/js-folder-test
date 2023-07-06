

function leftAlign() {
    let counter = 0;
for (let i = 1; i < 5; i++) {
    for (let j = 1; j < i; j++) {
        counter += 1;
        console.log(`#`.repeat(counter - 1), j, i, counter);
    }
   }
}  

function rightAlign() {
    let counter = 0;
    let n = 5
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < i; j++) {
            let steps = (5 - counter);
            console.log(`.`.repeat(steps) + "#".repeat(counter), j, i, counter, steps);
            counter += 1;
            
        }
       }
}
leftAlign()
rightAlign()