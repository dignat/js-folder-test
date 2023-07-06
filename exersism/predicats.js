var keep = function (array, condition) {
    var indexed = [];
    array.map(condition).filter(function (item, index) {
        if (item) {
            indexed.push(array[index]);
        }
    });
    console.log(indexed);
};
var discard = function (array) {
};
console.log(keep([1, 2, 3, 4, 5], function (e) { return e % 2 === 0; }));
