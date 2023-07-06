// debounce function is method for preventing a qiock series of events
// from repeatedly activating a function
// increase performance by preventing the executionof functions
// if a user rapidly click the buttons

function debounce (func, delay) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    }
}
// update the layout
    function updateLayout () {
        // update layout
    }
//create a debouvced version of the function
    const debouncedUpdateLayout = debounce(updateLayout, 250);
// listen for window resize event and call the debounce function
    window.addEventListener('resize', debouncedUpdateLayout);


