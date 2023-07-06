function foo(x) {
    console.log("foo!", x)
}

class A {
    constructor(v) {
        foo(v)
    }
}

class B extends A {
    whatever = foo(10)
    constructor() {
        super(100)
        this.another = foo(1000);
    }
}

var g = new B();