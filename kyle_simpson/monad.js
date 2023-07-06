
// monad
const Maybe = {
 from: function (param) {
            return {
                fold: (cb1, cb2) => {
                    if (param === null || param === undefined) {
                        return cb1(param);
                    } else {
                        return cb2(param);
                    }
                } 
            }
    }
}

function prinCost(cost) {
    console.log(Maybe.from(cost).fold(() => "--", v => `$${v.toFixed(2)}`))
}

prinCost();
prinCost(42);