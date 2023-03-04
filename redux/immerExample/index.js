const { createStore } = require("redux");
const { default: produce } = require("immer");

// initial state
const initialState = {
    name: "Sojib",
    address: {
        street: "Mirpur",
        city: "Dhaka",
        country: "Bangladesh"
    }
};

// action creator
const updateStreet = (street) => {
    return {
        type: "street_updated",
        payload: street
    };
};

// reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "street_updated":
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload
            //     },
            // };
            return produce(state, (draftState) => {
                draftState.address.street = action.payload;
            });

        default:
            return state;
    }
};

const store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(updateStreet("Mirpur 10"));