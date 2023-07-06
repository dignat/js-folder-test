

const myparagraph = document.getElementById('output');
console.log(myparagraph, 'a paragraph')
function type(text, count) {
    
        myparagraph.innerHTML += text[count];
    

}


function start() {
    const str = "I am a Developer!";
    let count = 0;
  const interval = setInterval(() => {
   
        type(str, count);
        count += 1;
        if (count >= str.length) {
            clearInterval(interval);
        }
    }, 500);
}

start()


