import {SET_FIRST_SUM, SET_MONTH_SUM, SET_PROGRAM, SET_TERM_PERIOD, SET_TOTAL_SUM} from "./types";

const initialState = {
    program: '',
    total_sum: 0,
    term_period: 0,
    first_sum: 0,
    month_sum: 0,
};
export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROGRAM:
            return {
                ...state,
                program: action.payload
            };
        case SET_TOTAL_SUM:
            return {...state,
                total_sum: action.payload
            };

        case SET_TERM_PERIOD:
            return {...state,
                term_period: action.payload
            };
        case SET_FIRST_SUM:
            return {...state,
                first_sum: action.payload
            };
        case SET_MONTH_SUM:
            return {...state,
                month_sum: action.payload
            };


        default:
            return state;
    }
};