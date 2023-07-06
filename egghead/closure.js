const myTest = (count) => {
    const state = {numberCount: count};
    function setup() {
      return state.numberCount++;
    }

    setup();

    return {
        state,
    }
}


console.log(myTest(0))