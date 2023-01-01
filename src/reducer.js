// This is the initial state of the user
export const initialState = {
    user: null,
};

export const actionTypes = {
    SET_USER: "SET_USER",
};

// reducer is a function that takes the current state and an action as arguments, and returns a new state result
const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };

        default:
            return state;
    }
};

export default reducer;
