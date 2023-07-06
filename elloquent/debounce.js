function debounce (cb, delay)  {
 let timer;
 clearTimeout(timer);
    timer = setTimeout(() => {
    cb.apply();
   }, delay)
}
const longString = "what ever stupid stuff i put in"
const generateUsername = () => {
    console.log(longString.split(" ").join("-"));
    return longString.split(" ").join("-");
  };

(debounce(generateUsername, 3000))
var sampleVar;
	function sampleFunction(){    
	  sampleVar = setTimeout(alertFunc, 2000);
	}
	function alertFunc(){    
	  console.log("Two seconds have passed!");
	}
	sampleFunction();