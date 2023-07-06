const multi = (factor) => {
    const me = "Nesy"
    console.log(this.me, me);
    return number => number * factor;
}
function totest(a,b) {
    console.log(a,b);
    console.log(this);
}
console.log(multi(2)(5));
totest('me', 'you');

const parent = {
    mom_name: 'Nesi',
    mother: function () {
        return `${this.mom_name} is my mum's name`
    }
}

const parent_arrow = {
    mom_name: "Nesy",
    mother: () => {
        return `${this.mom_name} is my mum's name`;
    }
}

console.log(parent.mother());
console.log(parent_arrow.mother());