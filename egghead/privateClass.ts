// orivate modifier does not give us any protection or privacy at run time

class Counter {
    //private _value = 0;
    #value = 0;

    increment() {
        this.#value +=1;
    }

    getCount() {
        return this.#value;
    }
}

const couter = new Counter();

couter.increment();

//couter.#value= 100;

console.log(couter.getCount())
//if we need privay before es2015 changes we can use closure

function createCounter() {
    let value = 0;
    return {
        increment() {
            value +=1;
        },
        get count() {
            return value;
        },
    }
};

const counter1 = createCounter();
counter1.increment();

console.log(counter1.count)


class  User {
    username: string | undefined;
    // we can use var assignement in the constructor to avoid undefined and nullish checks
    // constructor(username: string) {
    //     this.username = username;
    // }

     setUsername(username: string) {
        this.username = username;
    }
}

const user1 = new User();
user1.setUsername("denise")
const username = user1.username?.toLowerCase() ?? "n/a";
console.log(`Username: ${username}`)