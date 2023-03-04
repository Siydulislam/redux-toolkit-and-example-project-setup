const { increment, decrement } = require("./counter/actions");
const store = require("./store");

// subscribe to state changes
store.subscribe(() => {
    console.log(store.getState());
});

// dispatch actions
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());