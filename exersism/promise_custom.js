// implement promises

const promisify = (fn) => (...args) => {
    return new Promise((resolve, reject) => {
        fn(...args, (error, data) => {
            if (error) return reject(error);
            return resolve(data);
        })
    })
}
const wrap = prom => Promise.resolve(prom);
const all = (...promises) => {
    const results = [];
    const merged = promises.reduce((acc, p) => acc.then(() => p).then(r => results.push(r)),
    Promise.resolve(null));

    return merged.then(() => results);
}

const allSettled = (promises) => {
    return new Promise(resolve => {
        const results = [];
        let settled = 0;
        promises.map((prom, i) => {
         Promise.resolve(prom)
            .then(data => (results[i] = data))
            .catch(error => [results[i] = error])
            .finally(() => {
                if (++settled === promises.length) resolve(results)
            })
        })
    })
}

const race = (promises) => {
  return new Promise((resolve, reject) => {
        promises.forEach(prom => {
            Promise.resolve(prom)
            .then(resolve)
            .catch(reject)
        })
    })
}
const any = (promises) => {
    return new Promise((resolve, reject) => {
        const results = [];
        let settled = 0;
        promises.map((prom, i) => {
            wrap(prom)
            .then(resolve)
            .catch(error => {
                results[i] = error;
                if (++settled === promises.length) reject(results);
            });
        })
    })
}
const p1 = Promise.resolve('foo')
const p2 = 'bar'
const p3 = new Promise((resolve, reject) => {
   resolve('baz')
});

//const p4 = Promise.reject({message: 'errorFlux'})

all([
   Promise.resolve((33)),
  new Promise((resolve, reject) => setTimeout(() => resolve(66), 0)),
  99,
  Promise.reject(new Error("an error")),
]).then((values) => console.log(values));


