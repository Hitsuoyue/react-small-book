import { createStore } from 'redux'

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state
    }
}

const actions = {
    increase: () => ({type: 'INCREASE'}),
    decrease: () => ({type: 'DECREASE'})
};

let store = createStore(reducer);

export default store;



