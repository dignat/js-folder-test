const promise = () => {
    console.log(1);
    new Promise((resolve, reject) => {
        console.log(2);
        resolve(3);
        console.log(4);
    }).then(resolve => console.log(resolve));
    console.log(5);
}

promise();