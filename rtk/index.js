const store = require("./app/store");
const { counterActions } = require("./features/counter/counterSlice");
const { dynamicCounterActions } = require("./features/dynamicCounter/dynamicCounterSlice");
const { fetchPosts } = require("./features/posts/postsSlice");


// initial state
// console.log(`Initial State: ${JSON.stringify(store.getState())}`);

// subscribe to state changes
store.subscribe(() => {
    // console.log(store.getState());
});

// dispatch actions for counter
// store.dispatch(counterActions.increment());
// store.dispatch(counterActions.increment());
// store.dispatch(counterActions.decrement());

// dispatch actions for dynamic counter
// store.dispatch(dynamicCounterActions.increment(3));
// store.dispatch(dynamicCounterActions.increment(4));
// store.dispatch(dynamicCounterActions.decrement(2));

store.dispatch(fetchPosts());