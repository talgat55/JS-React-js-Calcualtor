import {DECREMENT_CURRENT_STEP, INCREMENT_CURRENT_STEP} from "./types";

const initialState = {
    currentStep: 1
};
export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_CURRENT_STEP:
            return {...state, currentStep: state.currentStep + 1};
        case DECREMENT_CURRENT_STEP:
            return {...state, currentStep: state.currentStep - 1};
        default:
            return state;
    }
};