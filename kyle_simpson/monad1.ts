//monad

type Maybe<T> = {value: T} | undefined;

function from<T>(v: T): Maybe<T> {
    return {value: v}
}


