function user() {
    console.log(this, 'this is "this"');
    this.name = 'Eliz',
    this.sayUser = function () {
        console.log(this.name, 'in the user function');

        function inner() {
            console.log(this.name, 'in the inner function');
        }

        inner();
    };
}

function userWithSelf() {
    console.log(this, 'this is "this"');
    this.name = 'Eliz',
    this.sayUser = function () {
        console.log(this.name, 'in the user function');

        let self = this;
        function inner() {
            console.log(self.name, 'in the inner function with self');
        }

        inner();
    };
}

function userWithArrow() {
    console.log(this, 'this is "this"');
    this.name = 'Eliz',
    this.sayUser = function () {
        console.log(this.name, 'in the user function');

        let inner = () => {
            console.log(this.name, 'in the inner function');
        }

        inner();
    };
}

const arrow = () => {
    console.log(this, 'this is "this"');
   const name = 'Eliz';
    const sayUser = function () {
        console.log(name, 'in the user function');

        let inner = () => {
            console.log(name, 'in the inner function');
        }

        return inner;
    };
    return sayUser;
}

console.log(arrow()()(), 'this is undefined')