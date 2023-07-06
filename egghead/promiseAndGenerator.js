import fetch from 'node-fetch';
const url = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

function* createQuote() {
    const response = yield fetch(url);
    
    const quote = yield response.json();
  
    return `${quote.quoteText} - ${quote.quoteAuthor}`;
}

const coroutine = (gen) => {
    const generator = gen();

    const handle = (result) => {
        if (result.done) return Promise.resolve(result.value);
        return Promise.resolve(result.value).
        then(res => handle(generator.next(res)))
    }

    return handle(generator.next());
    
}

const quoteFetcher = coroutine(createQuote);
quoteFetcher.then(quote => console.log(quote));

