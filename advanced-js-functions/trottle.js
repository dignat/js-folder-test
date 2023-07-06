// trottle function is similar to debounce wuth one 
// difference it does not limit the rate at which the function is called
// but instead it limits the rate the function is executed;

function trottle (func, delay) {
    let wait = false;

    return (...args) => {
        if (wait) {
            return;
        }
    }

    func(...args);
    wait = true;
    setTimeout(() => {
        wait = false;
    }, delay)
}
//define update function
function updateLayout() {
    // update layout
}
// create trottled version of the update funciton
const trottleUpdatedLayout = trottle(updateLayout, 250);
// listen to window scroll event and call the trottle function
window.addEventListener('scroll', trottleUpdatedLayout);