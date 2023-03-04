const { INCREMENT } = require("../counter/actionTypes");
const { DYNAMIC_INCREMENT, DYNAMIC_DECREMENT } = require("./actionTypes");

// initial state
const initialState = {
    count: 0
};

// reducer
const dynamicCounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case DYNAMIC_INCREMENT:
            return {
                ...state,
                count: state.count + action.payload
            };

        case DYNAMIC_DECREMENT:
            return {
                ...state,
                count: state.count - action.payload
            }

        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }

        default:
            return state;
    }
};

module.exports = dynamicCounterReducer;