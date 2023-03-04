const { DYNAMIC_INCREMENT, DYNAMIC_DECREMENT } = require("./actionTypes");

const increment = () => {
    return {
        type: DYNAMIC_INCREMENT
    }
};

const decrement = () => {
    return {
        type: DYNAMIC_DECREMENT
    }
};

module.exports = {
    increment,
    decrement
};