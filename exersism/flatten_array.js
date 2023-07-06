var array = [0, 2, [[2, 3], 8, 100, 4, [[[50]]]], -2];
var flatten_array = function (array) {
    array.map(function (item) {
        if (!Array.isArray(item)) {
            return item;
        }
        return flatten_array(item);
    }).filter(function (el) { return el !== null; });
};
console.log(flatten_array(array));

for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i)
    }, i* 1000)
}
