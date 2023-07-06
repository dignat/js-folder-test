function resolveAfter(ms, value) {
    return new Promise((resolve => {
        setTimeout(() => {
            resolve(value)
        }, ms)
    }))
}

function timeout(ms, promise) {
    let timeoutId;
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(Error(`Operation time out after ${ms} ms`))
        }, ms)
    });
    return Promise.race([promise, timeoutPromise]).finally(
        () => {
            clearTimeout(timeoutId)
        }
    );
}

const promise = resolveAfter(1000, 'A');

timeout(500, promise).then(
    value => {
        console.log(value);
    },
    error => {
        console.log(error.message)
    }
)

// promise.all and promise.allSettled
const settled = Promise.allSettled([
    Promise.resolve(42),
    Promise.reject(Error('....')),
])

settled.then((data) => {
    console.log(data)
})
// promise.any

const promiseAny = Promise.any([
    Promise.reject(Error('...')),
    Promise.resolve(3)
]).catch(() => {
    return Promise.reject(
        Error(`Failed to fetch`)
    )
})

promiseAny.then((data) => {
    console.log(data)
})

const API_URL = "https://starwars.egghead.training/";
function queryEndpoint(endpoint) {
    return fetch(API_URL + endpoint).then(response => {
        return response.ok ? response.json() : Promise.reject(Error('Unsuccessful response'))
    });
}
const element = document.getElementById('main');
const spinner = document.getElementById('spinner');

async function main() {
    try {
        const [films, planets] = await Promise.all([
            queryEndpoint('films'),
            queryEndpoint('planets')
        ]);
        element.innerText = `${films.length} films, ` +`${planets.length} planets`
    } catch(error) {
        console.warn(error)
        element.innerText = ":("
    } finally {
        spinner.remove()
    }
    
}

main()