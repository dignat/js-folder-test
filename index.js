import CarbonScope from "./carbon.js";

CarbonScope.measure();
setTimeout(() => {
    CarbonScope.stop();
}, 5000);

console.log('Bla bla')