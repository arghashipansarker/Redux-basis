const redux = require("redux");

// console.log(redux);

//create a dummy state
const initState = {
    num: 0,
}

//reducer create

const rootReducer = (state = initState, action) => {
    if (action.type === "INC_NUM") {
        return {
            ...state,
            num: state.num + 1
        }
    }
    if (action.type === "ADD_NUM") {
        return {
            ...state,
            num: state.num + action.value
        }
    }
    return state;
}

//store
const store = redux.createStore(rootReducer);

store.subscribe(() => {
    console.log("subscribe", store.getState());
})

//dispatching action

store.dispatch({
    type: "ADD_NUM",
    value: 10,
})

store.dispatch({
    type: "INC_NUM"
})


